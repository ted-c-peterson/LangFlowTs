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
    const useTool = await Src.Actions.solveGoal({chat: rootContext, goal: '/interview-chatbot/src/main/java/com/chatbot/conversation/ConversationInterface.java--Managestheconversationbetweentheuserandthebot.Handlesstartingandendingaconversation,aswellassavingtheconversationhistory./customization/Customize.java--Handlesthecustomizationoftheinterviewprocess,includingsettingandgettingcustomizationdetailsandvalidatingthosedetails./documentparser/ParserClass.java--Responsibleforparsingrelevantdocuments,suchasresumesandjobdescriptions.Providesmethodstoparsethedocument,gettheparseddetails,andvalidatetheparseddetails./questiongenerator/QuestionGeneratorInterface.java--Handlesthegenerationofcontextuallyrelevantinterviewquestions.Providesmethodstogeneratequestions,getthegeneratedquestions,validatethesequestions,andenrichthequestionsusinginteractiondetails.Interaction.java--Representsaninteractionbetweentheuserandthebot.Itcontainsaquestionandaresponse,amongotherpossiblefields./integration/IntegrationClass.java--IntegratesthechatbotwithexternalplatformslikeHRMSandATSsystems.Providesmethodstointegratewithaplatform,validatetheintegration,andcheckiftheintegrationwassuccessful./feedback/FeedbackClass.java--Managesfeedbackcollectionfromusers.Providesmethodstocollectfeedback,getthecollectedfeedback,andvalidatethecollectedfeedback./nlp/NLPModule.java--Singletonclassthathandlesnaturallanguageprocessingtofacilitateintelligentresponsesbythebot.Providesmethodstoprocessthelanguageinput,gettheprocessedoutput,andvalidatethisoutput./logging/Logger.java--Singletonclassthathandlestheloggingoferrorsandexceptions.Providesamethodtologmessagesfromanyclass./event/EventListenerInterface.java--Definesthecontractforlisteningtoevents.Hasanupdatemethodthatis-triggeredwhenaneventoccurs./threadhandling/Task.java--Representstasksthataresubmittedtotheexecutorforconcurrentexecution./database/CRUDOperations/Create.javaRead.javaUpdate.javaDelete.java--HandletheCRUDoperationsonthedatabase./DatabaseChoice/DatabaseChoice.java--Handlesthechoiceofthedatabasetobeusedbythebot./DatabaseSchema/Schema.java--Handlesthedesignofthedatabaseschema./test/java/com/chatbot//Testclassesforeachmodule/resources//Configurationfiles,resourcefilesetc./lib//Externallibrariespom.xmlREADME.mdFunctionoftheProgram:TheInterviewChatbotisaninnovativeapplicationdesignedtorevolutionizethehiringprocessbyconductingautomatedpre-screeningofcandidatesinaconvenient,efficient,andfairmanner.Atitscore,theprogramhandlesaconversationwiththeuser,allowingforcustomizationoftheinterviewprocess.Itcanparserelevantdocumentssuchasresumesandjobdescriptions,andgeneratecontextuallyrelevantinterviewquestions.ThechatbotintegrateswithexternalHRMSandATSsystems,allowingseamlessdataexchangeandexpandingitsfunctionality.TheapplicationusesNaturalLanguageProcessing(NLP)tounderstandandrespondintelligentlytouserinputs.Feedbackcollectionandarobustloggingsystemenableconstantimprovementstothesystem,whileaneventsystemensuresmodularityandadaptability.Concurrencyismanagedwithamodernthreadhandlingapproach,ensuringefficientperformanceevenunderheavyloads.Databaseoperationsareperformedtomanagedatapersistencewithfunctionstocreate,read,update,anddeleterecordsinthedatabase.Theapplicationpromisesimprovedscalability,reusability,andmaintainability,presentingasophisticatedsolutionforautomatingtheinitialstepsofthehiringprocess.'});
    const useTool2 = await Src.Actions.getTestsPassing({chat: useTool.resultContext});
}
