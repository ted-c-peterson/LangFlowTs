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
    const useTool = await Src.Actions.solveGoal({chat: rootContext, goal: 'Complete this java project with console outputs: create the directory structure with all class, interfaces, propertie files, prompt files etc neccary to have a very well done execution of this project: # Interview Chatbot Project Planning Document ## 1. Overview\n    This project aims to design and implement an Interview Chatbot that automates and improves the hiring process by conducting pre-screening of candidates in a convenient, efficient, and fair manner.\n    \n    ## 2. System Architecture Diagram\n    A visual representation of the system architecture provides a holistic view of how various modules interact and work together.\n    \n    ```\n                   +--------------------+\n                   |   Conversation     |\n                   |   Management       |\n                   +--+--------------+--+\n                      |              |\n                      V              V\n    +-----------------+-+         +--v-------------+\n    | Interview        |         | Question        |\n    | Customization    |         | Generation      |\n    +------------------+         +-----------------+\n             |                            |\n             V                            V\n    +--------v---+                   +----v-------+\n    | Document   |                   | NLP Module |\n    | Parsing    |                   +------------+\n    +------------+                            |\n             |                                |\n             V                                V\n    +--------v---+                      +-----v-----+\n    | External   |                      | Feedback  |\n    | Integration|                      | Collection|\n    +------------+                      +-----------+\n             |\n             V\n    +--------v---+\n    | Database    |\n    | Design      |\n    +------------+\n    ```\n    \n    ## 3. Module Specifications and Details\n    \n    ### 3.1. Conversation Management\n    This module maintains and manages the conversational state with the bot and users.\n    \n    ```java\n    public interface ConversationInterface {\n        void startConversation();\n        void endConversation();\n        void saveConversation(String user, String text);\n    }\n    ```\n    \n    ### 3.2. Interview Customization\n    Allows users to customize the interview process as per their needs.\n    \n    ```java\n    interface Customize {\n        void setCustomizationDetails(String details);\n        String getCustomizationDetails();\n        boolean validateCustomizationDetails();\n    }\n    ```\n    \n    ### 3.3. Document Parsing\n    Module parses relevant details from the given documents – Resumes and Job Descriptions. Includes methods to parse and validate the document details.\n    \n    ```java\n    abstract class ParserClass {\n        abstract void parseDocument(String documentPath);\n        abstract Map<String, String> getDocumentDetails();\n        abstract boolean validateParsedDetails();\n    }\n    ```\n    \n    ### 3.4. Contextual Question Generation\n    Generates contextually relevant interview questions using methods to generate, validate, and enrich the generated contextual questions. It utilizes the context of past interactions to inform the generation of new questions.\n    \n    ```java\n    interface QuestionGeneratorInterface {\n        void generateQuestion(String context, List<Interaction> pastInteractions);\n        List<String> getGeneratedQuestions();\n        boolean validateGeneratedQuestions();\n        void enrichGeneratedQuestion(Interaction interaction);\n    }\n    \n    class Interaction {\n        String question;\n        String response;\n        // ... other interaction-related fields ...\n    }\n    ```\n    \n    ### 3.5. External Integration\n    This module integrates the chatbot with external Human Resource Management System (HRMS) and Applicant Tracking Systems (ATS) platforms for data exchange.\n      \n    ```java\n    class IntegrationClass {\n        public void integrateWithPlatform(String platformDetails);\n        public boolean isIntegrationSuccessful();\n        public boolean validateIntegrationDetails(String platformDetails);\n    }\n    ```\n    \n    ### 3.6. Feedback Collection\n    Collects and manages user feedback for improving system performance.\n    \n    ```java\n    class FeedbackClass {\n        public void collectFeedback(String feedback);\n        public List<String> getCollectedFeedbacks();\n        public boolean validateCollectedFeedback(String feedback);\n    }\n    ```\n    \n    ### 3.7. Natural Language Processing (NLP)\n    The module facilitates intelligent responses by the bot - implemented via Singleton design pattern because creating a new instance for each request would be expensive.\n    \n    ```java\n    class NLPModule {\n        private static NLPModule instance;\n        private NLPModule(){}\n        public static synchronized NLPModule getInstance();\n        public void processLanguage(String languageInput);\n        public String getProcessedOutput();\n        public boolean validateProcessedOutput(String output);\n    }\n    ```\n    \n    ### 3.8. Logging System\n    This module will help trace and rectify any possible errors or exceptions in the system. It employs the Singleton design pattern to ensure thread-safety during concurrent logging.\n    \n    ```java\n    class Logger {\n        private static final Logger instance = new Logger();\n        private Logger(){}\n        public static Logger getInstance();\n        public synchronized void log(String className, String message);\n    }\n    ```\n    \n    ### 3.9. Event System\n    Adding an event system to allow the code to be more modular and allows for actions to be added or removed easily without affecting other parts of the code.\n      \n    ```java\n    public interface EventListenerInterface {\n        void update(EventClass event);\n    }\n    ```\n    \n    ### 3.10. Thread Handling\n    Javas Executors Framework is leveraged to improve thread management and concurrency. \n    \n    java\n    ExecutorService executor = Executors.newFixedThreadPool(10); // create a pool of 10 threads\n    executor.submit(new Task()); // submit tasks for execution\n    \n    \n    ### 3.11. Error and Exception Handling\n    All potential exceptions in the code are either handled or logged properly in the system for robust debugging information.\n    \n    ## 4. Database Design\n    \n    ### 4.1 Database Choice\n    Depending on the volume and nature of data the bot needs to handle, an appropriate database will be chosen.\n    \n    ### 4.2 Database Schema\n    In this phase, we will design the schema for our database.\n    \n    ### 4.3 Database Operations\n    The bot will need to\n\n     perform various CRUD (Create, Read, Update, Delete) operations on the database.\n    \n    ## 5. Conclusion\n    This design provides a comprehensive understanding of the expected functionality and flow of the system which can act as a reference for developers, testers, and stakeholder reviews. It promises a versatile and modular interview chatbot system with improved performance, scalability, reusability, and maintainability.'});

    const useTool2 = await Src.Actions.getTestsPassing({chat: useTool.resultContext});
}
