/* eslint-disable import/no-unresolved */
import { defineProject } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";
import react from "@vitejs/plugin-react";

export default defineProject({
  test: {
    projects: [
      {
        extends: false,

        plugins: [
          react({
            jsxRuntime: "automatic",
          }),
        ],

        test: {
          name: "integration",
          include: ["test/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
          isolate: true,
          browser: {
            ui: false,
            enabled: true,
            instances: [
              {
                browser: "chromium",
              },
            ],
            provider: playwright(),
            // headless: true,
            screenshotFailures: false,
            locators: {
              testIdAttribute: "data-test-id",
            },
          },
        },
      },
    ],
  },
});
