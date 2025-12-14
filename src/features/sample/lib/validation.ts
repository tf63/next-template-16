import z from "zod"

export const sampleFormSchema = z.object({
	email: z.email("Invalid email address"),
})
export type SampleFormData = z.infer<typeof sampleFormSchema>
