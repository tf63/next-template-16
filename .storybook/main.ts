import path from "node:path"
import { fileURLToPath } from "node:url"
import type { StorybookConfig } from "@storybook/nextjs-vite"
import { mergeConfig } from "vite"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const config: StorybookConfig = {
	stories: [{ titlePrefix: "Features", directory: "../src/features", files: "**/*.stories.*" }],
	addons: ["@storybook/addon-a11y", "@storybook/addon-vitest", "storybook-addon-pseudo-states"],
	framework: {
		name: "@storybook/nextjs-vite",
		options: {},
	},
	viteFinal: (config) => {
		return mergeConfig(config, {
			plugins: [],
			resolve: {
				alias: {
					"@": path.resolve(__dirname, "../src"),
				},
			},
		})
	},
}

export default config
