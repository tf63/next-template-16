"use client"

type Props = {
	onClick: () => void
	label: string
}

export function SampleButton({ onClick, label }: Props) {
	return (
		<button
			type="button"
			className="rounded-full bg-blue-400 px-5 py-2 cursor-pointer text-white hover:bg-blue-600"
			onClick={onClick}
		>
			{label}
		</button>
	)
}
