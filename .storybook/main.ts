import path from "node:path"
import { fileURLToPath } from "node:url"
import type { StorybookConfig } from "@storybook/nextjs-vite"
import { mergeConfig, type Plugin } from "vite"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function stripUseClient(): Plugin {
	return {
		name: "strip-use-client",
		enforce: "pre",
		transform(code, id) {
			if (!id.endsWith(".mjs") && !id.match(/\.(t|j)sx?$/)) return
			return code.replace(/^(\s*["']use client["'];?\s*)/m, "")
		},
	}
}

const config: StorybookConfig = {
	stories: [{ titlePrefix: "Features", directory: "../src/features", files: "**/*.stories.*" }],
	addons: ["@storybook/addon-a11y", "@storybook/addon-vitest", "storybook-addon-pseudo-states"],
	framework: {
		name: "@storybook/nextjs-vite",
		options: {},
	},
	viteFinal: (config) => {
		return mergeConfig(config, {
			plugins: [stripUseClient()],
			resolve: {
				alias: {
					"@": path.resolve(__dirname, "../src"),
				},
			},
			build: {
				chunkSizeWarningLimit: 2000,
			},
		})
	},
}

export default config
