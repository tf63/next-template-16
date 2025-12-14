import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { SampleButton } from "./sample-button"

export default {
	title: "Sample/SampleButton",
	component: SampleButton,
} satisfies Meta<typeof SampleButton>

type StoryType = StoryObj<typeof SampleButton> & {
	args: React.ComponentProps<typeof SampleButton>
}

export const Default: StoryType = {
	args: {
		label: "Click Me",
		onClick: () => {
			alert("Button clicked!")
		},
	},
}
