type Props = { text: string }

export function SampleBoardHeader({ text }: Props) {
	return (
		<div className="font-semibold">
			<p>{text}</p>
		</div>
	)
}
