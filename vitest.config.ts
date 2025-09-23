import { defineConfig } from "vitest/config";

import * as path from "path";

export default defineConfig({
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: "./vitest-setup.js",
		coverage: {
			provider: "istanbul",
		}
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src")
		}
	}
});
