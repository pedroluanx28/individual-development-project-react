import { defineConfig } from "cypress";
import { config } from "dotenv";

config();

export default defineConfig({
	e2e: {
		defaultBrowser: "edge",
		baseUrl: process.env.VITE_CYPRESS_BASE_URL
	}
});
