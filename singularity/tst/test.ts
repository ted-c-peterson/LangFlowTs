import * as Src from '../src'

export const invoke = async () => {
    
    await Src.setup({
        apiKey: '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',
        workspace: '../workspace',
        resetWorkspace: true,
    });

    const rootContext = new Src.ChatContext(
        Src.PromptStore.usePrompt('developer.role'), 'Root')

    await Src.Actions.understandFiles.understandAll({chat: rootContext});
    const useTool = await Src.Actions.solveGoal({chat: rootContext, goal: 'write hello world file in ts'});
    const useTool2 = await Src.Actions.getTestsPassing({chat: useTool.resultContext});
}
