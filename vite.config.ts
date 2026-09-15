import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/nazo-birthday/",
  },
  tanstackStart: {
    server: { entry: "server" },
    spa: {
      enabled: true,
    },
  },
});
