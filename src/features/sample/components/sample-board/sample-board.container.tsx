import { SampleBoard } from "./sample-board"
import { SampleBoardButtonWidget } from "./sample-board-button/sample-board-button.widget"

export function SampleBoardContainer() {
	// Fetch or prepare data here if needed
	const res = { data: { text: "This is Content" } }
	const { text } = res.data

	return <SampleBoard text={text} buttonElement={<SampleBoardButtonWidget label="Sample Button" />} />
}
