import Preview from "@/components/preview/preview";
import { Progress } from "@fucina/ui";

export const ProgressPreview = () => (
  <Preview>
    <Progress value={33} className="w-3/5" />
  </Preview>
);

export const ProgressDefault = () => (
  <Preview>
    <Progress variant="default" value={33} className="w-3/5" />
  </Preview>
);

export const ProgressBrand = () => (
  <Preview>
    <Progress variant="brand" value={33} className="w-3/5" />
  </Preview>
);

export const ProgressDanger = () => (
  <Preview>
    <Progress variant="danger" value={33} className="w-3/5" />
  </Preview>
);

export const ProgressWarning = () => (
  <Preview>
    <Progress variant="warning" value={33} className="w-3/5" />
  </Preview>
);
