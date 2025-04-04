import { Button } from "."

const Chatbot = ({
    img_class,
    title,
    read_more_href
  }) => {

return (
    <section className='flex flex-col items-center card '>
        <h1 className='heading-text mb-5 text-center'>
        {title}
        </h1>

    <div className='flex min-w-full flex-col justify-between space-y-10 px-8'>
        <div className='flex sm:flex-row max-sm:flex-col items-center space-x-10'>
        <div className='flex max-w-[20%] first-line:object-scale-down items-center sm:justify-start max-sm:justify-center  max-sm:py-2'>
            <img 
                src = { img_class } 
                className='rounded-lg drop-shadow-lg' >
            </img>
        </div>
        <div className='grow-0 sm:w-4/5 flex flex-col'>
            <div className='flex flex-col'>
            <p className='info-text '>
            Utilizing cutting-edge LLMs, I was able to create a Retrieval Augmented Generation (RAG) Chatbot. 
            This means that the Chatbot is able to understand user input documents, and answer questions based on them. 
            Through this project, I gained familiarity with HuggingFace and Chatbot libraries like Chainlit and Langchain. 
            This code is <a target="_blank" rel="noopener noreferrer" href="https://github.com/zexianchoo/Retrieval-Augmented-Generation-Chatbot" 
  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
    open source</a>. 
        
            </p>

            <div className="flex justify-end items-center ">
                
                <a href={read_more_href} className='pr-4 py-4'>
                <Button  label="Read More" >  </Button>
                </a>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
    );
  };

export default Chatbot