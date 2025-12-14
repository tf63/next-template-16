import { defineConfig, devices } from "@playwright/test"

const snapshotSuffix = process.env.SNAPSHOT_PATH || "/local"

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
	testDir: "./tests/vrt",
	outputDir: `./tests/test-results/vrt-results`,
	snapshotDir: `./tests/test-results/vrt-snapshots${snapshotSuffix}`,

	/* Run tests in files in parallel */
	fullyParallel: true,

	/* Fail the build on CI if you accidentually left test.only in the source code. */
	forbidOnly: !!process.env.CI,

	/* Retry on CI only */
	retries: process.env.CI ? 2 : 0,

	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 1 : undefined,

	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: [
		["html", { open: "never", outputFolder: "tests/test-results/vrt-report" }], // HTMLレポート生成
		["json", { outputFile: "tests/test-results/test-results.json" }],
	],

	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		/* Base URL to use in actions like `await page.goto('/')`. */
		baseURL: "http://localhost:6016",

		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: "on-first-retry",

		/* Take screenshot on failure */
		screenshot: "only-on-failure",

		// viewport: { width: 1440, height: 900 },
		deviceScaleFactor: 4,

		/* Video recording */
		video: "off",

		/* Run tests in headless mode */
		headless: true,
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"], deviceScaleFactor: 2 },
		},
		// {
		//   name: 'firefox',
		//   use: { ...devices['Desktop Firefox'], deviceScaleFactor: 4 },
		// },
		// {
		//   name: 'webkit',
		//   use: { ...devices['Desktop Safari'], deviceScaleFactor: 4 },
		// },
		{
			name: "chromium-mobile",
			use: { ...devices["Pixel 7"], deviceScaleFactor: 2 },
		},
		// {
		//   name: 'webkit-mobile',
		//   use: { ...devices['iPhone 14'] },
		// },
		// {
		//   name: 'sp',
		//   use: { browserName: 'chromium', viewport: { width: 375, height: 812 } },
		// },
		// {
		//   name: 'sm',
		//   use: { browserName: 'chromium', viewport: { width: 640, height: 900 } },
		// },
		// {
		//   name: 'md',
		//   use: { browserName: 'chromium', viewport: { width: 768, height: 1024 } },
		// },
		// {
		//   name: 'lg',
		//   use: { browserName: 'chromium', viewport: { width: 1024, height: 768 } },
		// },
		// {
		//   name: 'xl',
		//   use: { browserName: 'chromium', viewport: { width: 1280, height: 800 } },
		// },
	],

	webServer: {
		command: "npx serve tests/test-results/storybook-static -l 6016",
		port: 6016,
		timeout: 120000,
	},
})
