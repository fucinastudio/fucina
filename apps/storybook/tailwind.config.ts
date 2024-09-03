import sharedConfig from "@fucina/tailwind/tailwind.config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "presets"> = {
  presets: [
    {
      ...sharedConfig,
      content: [
        "./stories/**/*.stories.tsx",
        "../../packages/ui/src/**/*.tsx",
        "../../packages/visualizations/src/**/*.tsx",
        "../../packages/utils/src/**/*.ts",
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
