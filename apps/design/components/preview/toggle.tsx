import { Bold } from "lucide-react";

import Preview from "@/components/preview/preview";
import { Toggle } from "@fucina/ui";

export const TogglePreview = () => (
  <Preview>
    <Toggle aria-label="Toggle bold">
      <Bold />
    </Toggle>
  </Preview>
);

export const ToggleDefault = () => (
  <Preview>
    <Toggle aria-label="Toggle bold">
      <Bold />
    </Toggle>
  </Preview>
);

export const ToggleWithText = () => (
  <Preview>
    <Toggle aria-label="Toggle bold">
      <Bold /> Bold
    </Toggle>
  </Preview>
);

export const ToggleDisabled = () => (
  <Preview>
    <Toggle aria-label="Toggle bold" disabled>
      <Bold />
    </Toggle>
  </Preview>
);
