import { composeStories } from "@storybook/nextjs-vite"
import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import * as stories from "./sample-form.stories"

const { Default } = composeStories(stories)

describe("SampleForm", () => {
	it("renders SampleForm component", () => {
		render(<Default />)
	})
})
