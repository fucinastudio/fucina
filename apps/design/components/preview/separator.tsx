import Preview from "@/components/preview/preview";
import { Separator } from "@fucina/ui";

export const SeparatorPreview = () => (
  <Preview>
    <div>
      <div className="space-y-1">
        <h4 className="text-lg-semibold leading-none">Fucina</h4>
        <p className="text-description text-md">Open source product foundry</p>
      </div>
      <Separator className="my-4" />
      <div className="text-md flex h-5 items-center space-x-4">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  </Preview>
);

export const SeparatorHorizontal = () => (
  <Preview>
    <div>
      <h4 className="text-lg-semibold leading-none">Fucina</h4>
      <Separator className="my-4" />
      <p className="text-description text-md">Open source product foundry</p>
    </div>
  </Preview>
);

export const SeparatorVertical = () => (
  <Preview>
    <div className="text-md flex h-5 items-center space-x-4">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  </Preview>
);
