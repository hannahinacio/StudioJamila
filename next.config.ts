import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** App root (folder that contains this config). Pins Turbopack when another lockfile exists higher up — e.g. home directory. */
const appRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: appRoot,
    /**
     * When the repo is opened one level up (`STUDIOJAMILA/`), Turbopack can try to resolve
     * `@import "tailwindcss"` from that folder, where there is no `node_modules`. Only
     * `studio-jamila/node_modules` exists — pin the package to the app root.
     */
    resolveAlias: {
      tailwindcss: path.join(appRoot, "node_modules", "tailwindcss", "index.css"),
    },
  },
};

export default nextConfig;
