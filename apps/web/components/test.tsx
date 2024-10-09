import React, { useRef } from "react";
import { motion, useDragControls } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/modal";

function Test() {
  const controls = useDragControls();
  const constraintsRef = useRef(null);
  return (
    <Dialog modal={false}>
      <DialogTrigger>Open</DialogTrigger>
      <div ref={constraintsRef} className="pointer-events-none fixed inset-0 z-50">
        <motion.div
          drag
          dragControls={controls}
          dragMomentum={false}
          dragElastic={0.1}
          dragConstraints={constraintsRef}
          className="pointer-events-auto">
          <DialogContent className="cursor-move" onPointerDownCapture={(e) => controls.start(e)}>
            <DialogHeader onPointerDown={(e) => e.stopPropagation()}>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account and remove your data
                from our servers.
              </DialogDescription>
            </DialogHeader>
            <button onPointerDown={(e) => e.stopPropagation()}>hello u</button>
          </DialogContent>
        </motion.div>
      </div>
    </Dialog>
  );
}

export default Test;
