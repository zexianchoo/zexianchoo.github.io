import { flask, telegram, website } from "../assets/images"

const GCPPage = () => {
  return (
    <main className='flex flex-col space-y-10 text-center padding-x mx-auto max-container'>
      <section className='space-y-10'>
        <div className=''>
          <h1 className='text-center heading-text'> Full-Stack Evaluation of Airplanes Tool (2015) </h1>
        </div>
        <div className="info-text text-left flex flex-col space-y-10">
          <p>
              I created a Full-Stack website, working with frameworks / applications such as MySQL Workbench, Flask and React. I also gained experience
              working with cloud services and APIs, such as Google Cloud Platform. Check the repo out <a target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" 
            href="https://github.com/zexianchoo/FlightWebsite">
                here!
            </a>
          </p>
          <div>
            <img
              src = { website }
              alt='website'
              width={450}
              height={450}
              className='mx-auto my-auto'
            >
            </img>
            <p className="info-text text-center mb-2">
              Website Front Page
            </p>
            </div>
        </div>

        <div className="space-y-10">
          <p className="info-text text-left">
          In this website, we also worked with CRUD operations very closely. One of the main ways we implemented
          CRUD was in the user Login and user account deletion, where the user details were saved in a table in GCP.
          </p>
          <p className="info-text text-left">
            The keyword search also worked by pulling data from GCP by calling a SQL command. The data would be output into
            a table that was sorted by latest data.
          </p>
          <p className="info-text text-left">
            Unfortunately, we don't keep the website running because GCP costs money :(. 
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

export default GCPPage