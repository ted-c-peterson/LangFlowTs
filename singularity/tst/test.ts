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
    const useTool = await Src.Actions.solveGoal({chat: rootContext, goal: '1.ConversationManagement(ConversationInterface.java):Manages the conversation between the user and the bot. Includes functions to start, end, and save a conversation.2.InterviewCustomization(Customize.java):Allows customization of the interview process. Includes functions to set, get, and validate customization details.3.DocumentParsing(ParserClass.java):Parses relevant documents such as resumes and job descriptions. Includes functions to parse, get details from, and validate a document.4.ContextualQuestionGeneration(QuestionGeneratorInterface.java):Generates relevant interview questions based on a context and past interactions. Includes functions to generate, get, validate, and enrich questions.5.ExternalIntegration(IntegrationClass.java):Integrates the chatbot with external platforms such as HR'});
    const useTool2 = await Src.Actions.getTestsPassing({chat: useTool.resultContext});
}
