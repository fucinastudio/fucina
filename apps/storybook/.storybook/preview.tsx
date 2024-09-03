
import * as React from "react";
import type { Preview, Renderer } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";

import "../styles/globals.css";

const preview: Preview = {
  decorators: [
    (Story: any) => (
      <div className="flex justify-center items-center bg-background w-full font-sans text">
        <Story />
      </div>
    ),
    withThemeByClassName<Renderer>({
      themes: {
        Light: "",
        Dark: "dark",
      },
      defaultTheme: "Light",
    }),
  ],
  parameters: {
    backgrounds: {
      disable: false,
    },
    nextjs: {
      appDirectory: true,
    },
    docs: {
      source: {
        type: "code",
      },
      themes: {
        Light: "",
        Dark: "dark",
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
