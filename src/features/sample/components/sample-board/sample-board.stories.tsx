import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { SampleButton } from "../sample-button/sample-button"
import { SampleBoard } from "./sample-board"

type SampleBoardType = typeof SampleBoard

export default {
	title: "Sample/SampleBoard",
	component: SampleBoard,
} satisfies Meta<SampleBoardType>

type StoryType = StoryObj<SampleBoardType> & {
	args: React.ComponentProps<typeof SampleBoard>
}

export const Default: StoryType = {
	args: {
		text: "This is Content",
		buttonElement: (
			<SampleButton
				label="Click Me"
				onClick={() => {
					alert("Button clicked!")
				}}
			/>
		),
	},
}
