import { defineConfig } from "cypress";
import { config } from "dotenv";
import codeCoverageTask from '@cypress/code-coverage/task';

config();

export default defineConfig({
	e2e: {
		defaultBrowser: "edge",
		baseUrl: process.env.VITE_CYPRESS_BASE_URL,
		async setupNodeEvents(on, config) {
			codeCoverageTask(on, config);
			return config;
		}
	}
});
