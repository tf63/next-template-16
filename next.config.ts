import bundleAnalyzer from "@next/bundle-analyzer"
import type { NextConfig } from "next"

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
})

const nextConfig: NextConfig = {
	output: "standalone",
	devIndicators: false,
	typescript: {
		tsconfigPath: "tsconfig.build.json",
	},
}

export default withBundleAnalyzer(nextConfig)
