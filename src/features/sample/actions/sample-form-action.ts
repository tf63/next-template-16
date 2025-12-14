"use server"

import { redirect } from "next/navigation"
import type { SampleFormData } from "@/features/sample/lib/validation"
import type { FormResult } from "@/types"

export async function sampleFormAction(_prevState: FormResult, _formData: SampleFormData): Promise<FormResult> {
	await new Promise((resolve) => setTimeout(resolve, 500))

	if (Math.random() > 0.5) {
		return {
			ok: false,
			message: "Sample form submission failed. Please try again.",
		}
	}

	redirect("/")
}
