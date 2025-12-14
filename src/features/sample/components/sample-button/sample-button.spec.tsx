import { composeStories } from "@storybook/nextjs-vite"
import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import * as stories from "./sample-button.stories"

const { Default } = composeStories(stories)

describe("SampleButton", () => {
	it("renders SampleButton component", () => {
		render(<Default />)
	})
})
