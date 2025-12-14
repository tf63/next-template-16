import { defineConfig } from "orval"

export default defineConfig({
	"user-mcp": {
		output: {
			mode: "single",
			target: "../../tmp/mcp/handlers.ts",
			schemas: "../../tmp/mcp/http-schemas",
			client: "mcp",
			baseUrl: "http://prism:4010",
			biome: true,
			// indexFiles: false, // NOTE: falseにすると正しく生成してくれない
		},
		input: {
			target: "../../docs/api/v1/openapi.json",
		},
	},
})
