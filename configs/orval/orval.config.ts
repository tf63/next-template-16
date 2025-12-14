import { defineConfig } from "orval"

export default defineConfig({
	user: {
		output: {
			mode: "tags-split",
			target: "../../src/api",
			schemas: "../../src/api/models",
			client: "fetch",
			httpClient: "fetch",
			baseUrl: "http://localhost:4010",
			biome: true,
			indexFiles: false,
			mock: true,
		},
		input: {
			target: "../../docs/api/v1/openapi.json",
		},
	},
})
