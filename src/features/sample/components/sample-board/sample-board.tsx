import { SampleBoardHeader } from "./sample-board-header/sample-board-header"

type Props = {
	buttonElement: React.ReactNode
	text: string
}

export function SampleBoard({ buttonElement, text }: Props) {
	return (
		<div className="flex flex-col gap-2 max-w-sm">
			<SampleBoardHeader text="This is Header" />
			<p>{text}</p>
			{buttonElement}
		</div>
	)
}
