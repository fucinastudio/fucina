import { Activity, AlertTriangle, Info, XCircle } from "lucide-react";

import Preview from "@/components/preview/preview";
import { Badge } from "@fucina/ui";

export const BadgePreview = () => (
  <Preview>
    <Badge>
      <Activity />
      Active
    </Badge>
  </Preview>
);

export const BadgeDefault = () => (
  <Preview>
    <div className="sm:flex justify-items-center gap-3 grid">
      <Badge variant="default">
        <Activity />
        Active
      </Badge>
      <Badge variant="default">Active</Badge>
      <Badge variant="default">
        <Activity />
      </Badge>
      <Badge variant="default">7</Badge>
    </div>
  </Preview>
);

export const BadgeBrand = () => (
  <Preview>
    <div className="sm:flex justify-items-center gap-3 grid">
      <Badge variant="brand">
        <Info />
        Information
      </Badge>
      <Badge variant="brand">Information</Badge>
      <Badge variant="brand">
        <Info />
      </Badge>
      <Badge variant="brand">7</Badge>
    </div>
  </Preview>
);

export const BadgeDanger = () => (
  <Preview>
    <div className="sm:flex justify-items-center gap-3 grid">
      <Badge variant="danger">
        <XCircle />
        Error
      </Badge>
      <Badge variant="danger">Error</Badge>
      <Badge variant="danger">
        <XCircle />
      </Badge>
      <Badge variant="danger">7</Badge>
    </div>
  </Preview>
);

export const BadgeWarning = () => (
  <Preview>
    <div className="sm:flex justify-items-center gap-3 grid">
      <Badge variant="warning">
        <AlertTriangle />
        Caution
      </Badge>
      <Badge variant="warning">Caution</Badge>
      <Badge variant="warning">
        <AlertTriangle />
      </Badge>
      <Badge variant="warning">7</Badge>
    </div>
  </Preview>
);
