import { defineConfig, mergeConfig } from "vitest/config"
import viteConfig from "./vite.config"

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			environment: "jsdom",
			globals: true,
			setupFiles: "./tests/unittest/setup-test.ts",
			include: ["src/**/*.spec.{ts,tsx}"],
		},
	})
)
