import { describe, it, expect } from "vitest";
import { api } from "../src/api/instace";
import { config } from "dotenv";

config();

describe("Axios instance", () => {
	it("should have the correct baseURL", () => {
		expect(api.defaults.baseURL).toBe(process.env.VITE_API_BASE_URL);
	});
});
