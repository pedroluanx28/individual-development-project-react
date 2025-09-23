declare module "@cypress/code-coverage/task" {
	const codeCoverageTask: (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => void;
	export default codeCoverageTask;
}
