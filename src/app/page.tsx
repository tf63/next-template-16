import { SampleBoardContainer } from "@/features/sample/components/sample-board/sample-board.container"
import { SampleFormWidget } from "@/features/sample/components/sample-form/sample-form.widget"

export default function Page() {
	return (
		<main className="space-y-4 p-4">
			<SampleBoardContainer />
			<SampleFormWidget />
		</main>
	)
}
