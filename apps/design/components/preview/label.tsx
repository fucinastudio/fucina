import Preview from "@/components/preview/preview";
import { Checkbox, Input, Textarea, Label } from "@fucina/ui";

export const LabelPreview = () => (
  <Preview>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  </Preview>
);

export const LabelWithCheckbox = () => (
  <Preview>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms-2" />
      <Label htmlFor="terms-2">Accept terms and conditions</Label>
    </div>
  </Preview>
);

export const LabelWithInput = () => (
  <Preview>
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" className="input-docs" />
    </div>
  </Preview>
);

export const LabelWithTextArea = () => (
  <Preview>
    <div className="grid w-full gap-3">
      <Label htmlFor="message">Your story</Label>
      <Textarea placeholder="Once upon a time..." id="message" />
    </div>
  </Preview>
);
