import path from "node:path"

function extractFilename(filePath) {
	return path.basename(filePath)
}

function extractComponentPrefix(filePath) {
	return filePath.split("/")[0]
}

export default (plop) => {
	plop.setHelper("extractFilename", extractFilename)
	plop.setHelper("extractComponentPrefix", extractComponentPrefix)

	plop.setGenerator("component", {
		description: "Create a new component",
		prompts: [
			{
				type: "input",
				name: "path",
				message: "Please enter the component path (e.g. features/sample/components/sample-button)",
			},
		],
		actions: [
			{
				type: "add",
				path: "src/{{path}}/{{kebabCase (extractFilename path)}}.tsx",
				templateFile: "templates/components/component.tsx.hbs",
			},
			{
				type: "add",
				path: "src/{{path}}/{{kebabCase (extractFilename path)}}.spec.tsx",
				templateFile: "templates/components/component.spec.tsx.hbs",
			},
			{
				type: "add",
				path: "src/{{path}}/{{kebabCase (extractFilename path)}}.stories.tsx",
				templateFile: "templates/components/component.stories.tsx.hbs",
			},
		],
	})
}
