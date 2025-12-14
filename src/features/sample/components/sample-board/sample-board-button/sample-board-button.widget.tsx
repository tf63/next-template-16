"use client"

import { useRouter } from "next/navigation"
import { SampleButton } from "@/features/sample/components/sample-button/sample-button"

type Props = {
	label: string
}

export function SampleBoardButtonWidget({ label }: Props) {
	const router = useRouter()
	const onClick = () => {
		router.push("/")
	}

	return <SampleButton label={label} onClick={onClick} />
}
