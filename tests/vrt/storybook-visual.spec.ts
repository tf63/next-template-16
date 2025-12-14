import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { expect, test } from "@playwright/test"

interface StoryEntry {
	id: string
	title: string
	name: string
	type: "story" | "docs" | string
}

interface StoryIndexJson {
	entries: Record<string, StoryEntry>
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const jsonPath = path.resolve(__dirname, "../test-results/storybook-static/index.json")

let stories: StoryIndexJson = { entries: {} }

if (fs.existsSync(jsonPath)) {
	stories = JSON.parse(fs.readFileSync(jsonPath, "utf8")) as StoryIndexJson
}

const storyInfos = Object.values(stories.entries)
	.filter((s) => s.type === "story")
	.map((s) => ({
		id: s.id,
		title: s.title,
		name: s.name,
	}))

for (const story of storyInfos) {
	test(`VRT: ${story.title} / ${story.name}`, async ({ page }) => {
		await page.goto(`iframe?id=${story.id}`, {
			waitUntil: "networkidle",
		})
		await page.waitForTimeout(300)
		await page.evaluateHandle("document.fonts.ready")
		await expect(page).toHaveScreenshot(`${story.id}.png`)
	})

	test(`VRT (dark): ${story.title} / ${story.name}`, { tag: ["@dark"] }, async ({ page }) => {
		await page.goto(`iframe?id=${story.id}`, {
			waitUntil: "networkidle",
		})
		await page.waitForTimeout(300)
		await page.evaluateHandle("document.fonts.ready")
		await page.evaluate(() => {
			document.documentElement.classList.add("dark")
		})
		await expect(page).toHaveScreenshot(`${story.id}-dark.png`)
	})
}
