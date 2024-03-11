const ChatBotPage = () => {
  return (
    <main className='flex flex-col space-y-10 text-center padding-x mx-auto max-container'>
      <section className='space-y-10'>
        <div className=''>
          <h1 className='text-center heading-text'> Retrieval Augmented Generation (RAG) Chatbot </h1>
        </div>
        <div>
          <p className='info-text text-left'> Check out the github repository <a target="_blank" rel="noopener noreferrer" href="https://github.com/zexianchoo/Retrieval-Augmented-Generation-Chatbot" 
  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
    here!</a></p>
        </div>

        <div>
          <p className='info-text text-left'> This was a rather straightforward project, which involved 
          working with chatbot libraries and integrating them with the HuggingFace Model. Subsequently,
          I finished up a working demo where I could get the ChatBot to work on some example input data.
          I then worked on creating a friendly user CLI. </p>
        </div>

        <div>
          <p className='info-text text-left'> Here is a demo of the ChatBot! </p>
        </div>

        <div className="aspect-video">
          <iframe className="w-full h-full" src="https://drive.google.com/file/d/1vJwcGMvd23t9lGQGt8GbGIs0QSDO7_9P/view?usp=drive_link" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div className="py-10">
          <a
          href={"/projects"}
          className='transition hover:border backdrop:gap-2 lg:px-5 lg:py-2 rounded-full hover:bg-[#fb7185]
                  font-montserrat leading-none lg:text-lg sm:text-sm text-slate-gray sm:relative bg-[#fda4af]'
          >
            {"Back to Projects"}
          </a>
        </div>
      </section>
    </main>

  )
}

export default ChatBotPage