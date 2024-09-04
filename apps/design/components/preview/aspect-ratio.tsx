import Image from "next/image";

import Preview from "@/components/preview/preview";
import { AspectRatio } from "@fucina/ui";

export const AspectRatioPreview = () => (
  <Preview>
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <Image
        src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
        alt="Photo by Alvaro Pinot"
        fill
        className="rounded object-cover"
      />
    </AspectRatio>
  </Preview>
);

export const AspectRatio16x9 = () => (
  <Preview>
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <Image
        src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
        alt="Photo by Alvaro Pinot"
        fill
        className="rounded object-cover"
      />
    </AspectRatio>
  </Preview>
);

export const AspectRatio4x3 = () => (
  <Preview>
    <AspectRatio ratio={4 / 3} className="bg-muted">
      <Image
        src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
        alt="Photo by Alvaro Pinot"
        fill
        className="rounded object-cover"
      />
    </AspectRatio>
  </Preview>
);

export const AspectRatio3x2 = () => (
  <Preview>
    <AspectRatio ratio={3 / 2} className="bg-muted">
      <Image
        src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
        alt="Photo by Alvaro Pinot"
        fill
        className="rounded object-cover"
      />
    </AspectRatio>
  </Preview>
);

export const AspectRatio9x16 = () => (
  <Preview>
    <AspectRatio ratio={9 / 16} className="bg-muted">
      <Image
        src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
        alt="Photo by Alvaro Pinot"
        fill
        className="rounded object-cover"
      />
    </AspectRatio>
  </Preview>
);

export const AspectRatio3x4 = () => (
  <Preview>
    <AspectRatio ratio={3 / 4} className="bg-muted">
      <Image
        src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
        alt="Photo by Alvaro Pinot"
        fill
        className="rounded object-cover"
      />
    </AspectRatio>
  </Preview>
);
