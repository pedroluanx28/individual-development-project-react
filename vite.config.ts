import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import istanbul from "vite-plugin-istanbul";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		istanbul({
			include: "src/*",
			exclude: ["node_modules", "test/"],
			extension: [".js", ".ts", ".tsx"],
			cypress: true,
			requireEnv: false
		}),
	],
	resolve: {
		alias: [
			{
				find: "@",
				replacement: path.resolve(__dirname, "src")
			}
		]
	}
});
