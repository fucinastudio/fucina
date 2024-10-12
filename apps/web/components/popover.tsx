import React, { useState } from "react";
import { X } from "lucide-react";
import {
  useFloating,
  offset,
  flip,
  shift,
  useDismiss,
  useRole,
  useClick,
  useInteractions,
  FloatingFocusManager,
  FloatingContext,
  ReferenceType,
  ElementProps,
  Placement,
} from "@floating-ui/react";

import { getWindow } from "@/lib/utils";
import { cn, focusRing } from "@fucina/utils";
import { Button } from "@fucina/ui";

type Side = "top" | "right" | "bottom" | "left";
type Align = "start" | "center" | "end";

const INTERACTIVE_ELEMENTS = ["INPUT", "TEXTAREA"];

function useDraggable<RT extends ReferenceType = ReferenceType>(
  context: FloatingContext<RT>,
  initialPlacement: Placement
): ElementProps {
  const {
    open,
    refs,
    elements: { floating },
    middlewareData: { offset },
  } = context;
  const [canTrackMove, setCanTrackMove] = React.useState(false);
  const deltaRef = React.useRef({ x: 0, y: 0 });

  const handleMouseUp = React.useCallback(() => {
    setCanTrackMove(false);
  }, []);

  React.useEffect(() => {
    if (!open) {
      refs.setPositionReference(refs.domReference.current);
    }
  }, [refs, open]);

  React.useEffect(() => {
    if (canTrackMove) {
      const handleMouseMove = (event: MouseEvent) => {
        refs.setPositionReference({
          contextElement: refs.domReference.current || undefined,
          getBoundingClientRect() {
            return {
              width: 0,
              height: 0,
              x: event.clientX,
              y: event.clientY,
              top: event.clientY - deltaRef.current.y,
              left: event.clientX + deltaRef.current.x,
              right: event.clientX,
              bottom: event.clientY,
            };
          },
        });
      };

      const win = getWindow(refs.floating.current);
      win.addEventListener("mousemove", handleMouseMove);
      return () => {
        win.removeEventListener("mousemove", handleMouseMove);
        win.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [canTrackMove, refs, handleMouseUp]);

  return React.useMemo(() => {
    return {
      floating: {
        onPointerDown(event) {
          const target = event.target as HTMLElement;
          if (INTERACTIVE_ELEMENTS.includes(target.tagName)) return;
          if (floating) {
            const rect = floating.getBoundingClientRect();
            const { top, left, width, height } = rect;
            const [side, align = "center"] = initialPlacement.split("-") as [Side, Align];
            // prettier-ignore
            const oppositeSideRect = {
              top: rect.bottom, bottom: rect.top,
              left: rect.right, right: rect.left,
            }[side];
            const factor = align === "start" ? 1 : align === "end" ? -1 : 0;
            const offsetX = Math.abs(offset?.x || 0);
            const offsetY = Math.abs(offset?.y || 0);
            if (["top", "bottom"].includes(side)) {
              deltaRef.current = {
                y: event.clientY - oppositeSideRect - offsetY,
                x: width / 2 - (event.clientX - left) - (width / 2) * factor,
              };
            } else {
              deltaRef.current = {
                y: (height / 2 - (event.clientY - top) - (height / 2) * factor) * -1,
                x: (event.clientX - oppositeSideRect + offsetX) * -1,
              };
            }
          }
          const win = getWindow(event.currentTarget);
          win.addEventListener("mouseup", handleMouseUp);
          setCanTrackMove(true);
        },
      },
    };
  }, [handleMouseUp, floating, initialPlacement, offset]);
}

interface PopoverProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  title: string;
}

function Popover({ children, trigger, title }: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const initialPlacement: Placement = "top";

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    strategy: "fixed",
    placement: initialPlacement,
    middleware: [offset(80), flip(), shift()],
  });

  const click = useClick(context, {
    enabled: false,
  });
  const dismiss = useDismiss(context, { enabled: false });
  const role = useRole(context);
  const draggable = useDraggable(context, initialPlacement);

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role, draggable]);

  return (
    <>
      <button
        className={cn("rounded-full", focusRing)}
        ref={refs.setReference}
        onClick={() => setIsOpen(true)}
        {...getReferenceProps()}>
        {trigger}
      </button>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            className="border-default bg-elevated z-50 m-6 min-w-96 max-w-screen-lg cursor-grab select-none overflow-hidden rounded-xl border shadow-md"
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            onMouseEnter={(e) => e.stopPropagation()}
            onMouseLeave={(e) => e.stopPropagation()}>
            <div className="border-default bg-elevated fixed z-50 flex w-full flex-row items-center justify-between gap-4 border-b p-2">
              <p className="font-brand pl-1 text-xl font-medium">{title}</p>
              <Button
                variant="text"
                size="small"
                icon
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}>
                <X />
              </Button>
            </div>
            {children}
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
}

export { Popover };
