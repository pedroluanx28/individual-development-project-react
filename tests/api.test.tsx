import { describe, it, expect } from "vitest";
import { api } from "../src/api/instace";

describe("Axios instance", () => {
	it("should have the correct baseURL", () => {
		expect(api.defaults.baseURL).toBe("https://jsonplaceholder.typicode.com");
	});

	it("should not have unexpected default headers", () => {
		expect(api.defaults.headers.common?.Authorization).toBeUndefined();
	});

	it("should perform a successful GET /posts/1", async () => {
		const res = await api.get('/posts/1');

		expect(res.status).toBe(200);
		expect(res.data).toBeDefined();
		expect(res.data).toHaveProperty('id', 1);
		expect(res.data).toHaveProperty('title');
	});
});
