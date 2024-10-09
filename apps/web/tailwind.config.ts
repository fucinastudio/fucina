import sharedConfig from "@fucina/tailwind/tailwind.config";
import type { Config } from "tailwindcss";

import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

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
      plugins: [addVariablesForColors],
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}

export default config;
