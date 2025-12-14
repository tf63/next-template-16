import type { Preview } from "@storybook/nextjs-vite"

import "./preview.css"

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		options: {
			storySort: {
				order: [""],
			},
		},
		a11y: {
			config: {
				rules: [{ id: "color-contrast", enabled: false }],
			},
		},
	},
	decorators: (Story) => (
		<div className="inline-flex w-full justify-start p-4">
			<Story />
		</div>
	),
}

export default preview
