import sharedConfig from "@fucina/tailwind/tailwind.config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "presets"> = {
  presets: [
    {
      ...sharedConfig,
      content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./ui/**/*.{js,ts,jsx,tsx}",
        "../../packages/ui/src/**/*{.js,.ts,.jsx,.tsx}",
        "../../packages/ui/src/**/*.stories.tsx",
      ],
      theme: {
        extend: {
          ...sharedConfig?.theme?.extend,
        },
      },
    },
  ],
};

export default config;
