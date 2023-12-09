import { flask, telegram } from "../assets/images"

const BBDCPage = () => {
  return (
    <main className='flex flex-col space-y-10 text-center padding-x mx-auto'>
      <section className='space-y-10'>
        <div className=''>
          <h1 className='text-center heading-text'> Automated Driving Lesson Booking Bot </h1>
        </div>
        <div className="info-text text-left flex flex-col space-y-10">
        <p>
            I created an open source <a target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" 
            href="https://github.com/zexianchoo/BBDC-PRACTICAL-BOOKING-BOT">
                Github Repo
            </a> with an automated Robotic Process
            Automation bot, which automatically visits and books classes on the driving center's website 
            to book driving lessons, using Selenium. The bot was connected with Telegram through Heroku and Flask
            to provide updates to the user.
            </p>
          <div className="flex justify-center">
            <div>
            <img
              src = { telegram }
              alt='telegram'
              width={150}
              height={150}
              className='mx-auto my-auto'
            >
            </img>
            </div>
            <div>
            <img
              src = { flask }
              alt='flask'
              width={200}
              height={150}
              className='mx-auto my-auto'
            >
            </img>
            </div>

            
          </div>

          <p>
            This project is a little outdated, but the ideas and concepts behind this project is still applicable to the 
            projects I work on today. I used Selenium which simulated user inputs, and I had to make this RPA be automated,
            which meant a lot of regex and string matching, as well as reading and processing web elements on the website.
          </p>
          <p>
            In addition, I also worked on building a backend system with react that was hosted on heroku. The server would 
            routinely spin up RPAs with user credentials to access the website, and subsequently relay the information if the 
            slot was booked or not to the user through Telegram, a messaging app.
          </p>
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

export default BBDCPage