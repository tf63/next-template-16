"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { startTransition, useActionState } from "react"
import { useForm } from "react-hook-form"
import { SampleForm } from "./sample-form"
import { sampleFormAction } from "@/features/sample/actions/sample-form-action"
import { type SampleFormData, sampleFormSchema } from "@/features/sample/lib/validation"
import type { FormResult } from "@/types"

export function SampleFormWidget() {
	const [state, formAction, isPending] = useActionState<FormResult, SampleFormData>(sampleFormAction, {
		ok: null,
		message: "",
	})
	const error = state.ok ? undefined : state.message

	const form = useForm<SampleFormData>({
		mode: "onBlur",
		resolver: zodResolver(sampleFormSchema),
		defaultValues: {
			email: "",
		},
	})

	function onSubmit(data: SampleFormData) {
		startTransition(() => {
			formAction(data)
		})
	}

	return <SampleForm isPending={isPending} error={error} form={form} onSubmit={onSubmit} />
}
