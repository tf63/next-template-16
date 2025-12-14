"use client"

import type { useForm } from "react-hook-form"
import type { SampleFormData } from "@/features/sample/lib/validation"

type Props = {
	form: ReturnType<typeof useForm<SampleFormData>>
	onSubmit: (data: SampleFormData) => void
	isPending: boolean
	error?: string
}

export function SampleForm({ form, onSubmit, isPending, error }: Props) {
	return (
		<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
			{/* Form Error */}
			{error && <p className="text-red-500 text-sm">{error}</p>}

			{/* Email Field */}
			<div>
				<label className="block mb-1 font-medium" htmlFor="email">
					Email
				</label>
				<input
					id="email"
					type="email"
					className="w-full border border-gray-300 rounded px-3 py-2"
					{...form.register("email")}
					disabled={isPending}
				/>
				{form.formState.errors.email && (
					<p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
				)}
			</div>

			{/* Submit Button */}
			<button
				type="submit"
				className="bg-blue-400 text-white px-4 py-2 rounded-full disabled:opacity-50"
				disabled={isPending}
			>
				Submit
			</button>
		</form>
	)
}
