import { zodResolver } from "@hookform/resolvers/zod"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { useForm } from "react-hook-form"
import { type SampleFormData, sampleFormSchema } from "@/features/sample/lib/validation"
import { SampleForm } from "./sample-form"

export default {
	title: "Sample/SampleForm",
	component: SampleForm,
} satisfies Meta<typeof SampleForm>

type StoryType = StoryObj<typeof SampleForm> & {
	args?: React.ComponentProps<typeof SampleForm>
}

function FormWrapper({ isPending = false, error }: { isPending?: boolean; error?: string }) {
	const form = useForm<SampleFormData>({
		mode: "onBlur",
		resolver: zodResolver(sampleFormSchema),
		defaultValues: {
			email: "",
		},
	})

	const handleSubmit = (data: SampleFormData) => {
		alert(JSON.stringify(data))
	}

	return <SampleForm form={form} onSubmit={handleSubmit} isPending={isPending} error={error} />
}

export const Default: StoryType = {
	render: () => <FormWrapper />,
}
