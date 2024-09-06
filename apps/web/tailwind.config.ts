import sharedConfig from "@fucina/tailwind/tailwind.config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "presets"> = {
  presets: [
    {
      ...sharedConfig,
      content: [
        "./app/**/*.tsx",
        "./components/**/*.tsx",
        "../../packages/ui/src/**/*.tsx",
        "../../packages/visualizations/src/**/*.tsx",
        "../../packages/utils/src/**/*.ts",
      ],
      theme: {
        extend: {
          ...sharedConfig?.theme?.extend,
          animation: {
            grid: "grid 15s linear infinite",
          },
          keyframes: {
            grid: {
              "0%": { transform: "translateY(-50%)" },
              "100%": { transform: "translateY(0)" },
            },
          },
        },
      },
    },
  ],
};

export default config;
