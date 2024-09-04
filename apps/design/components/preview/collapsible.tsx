import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import Preview from "@/components/preview/preview";
import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@fucina/ui";

export const CollapsiblePreview = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Preview>
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[340px] space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <p className="text-md-semibold">@kkratterf starred 3 repositories</p>
          <CollapsibleTrigger asChild>
            <Button variant="text" icon={true}>
              <ChevronsUpDown />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="border-default text-md rounded border px-4 py-3 font-mono shadow-sm">@fucina/ui</div>
        <CollapsibleContent className="space-y-2">
          <div className="border-default text-md rounded border px-4 py-3 font-mono shadow-sm">
            @fucina/visualizations
          </div>
          <div className="border-default text-md rounded border px-4 py-3 font-mono shadow-sm">
            @fucina/tailwind
          </div>
          <div className="border-default text-md rounded border px-4 py-3 font-mono shadow-sm">
            @fucina/utils
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Preview>
  );
};
