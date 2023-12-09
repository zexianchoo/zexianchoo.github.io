import { footer_icons } from "../constants";

const ContactInfo = () => {
  return (
    <main className="max-container justify-center items-center space-y-4">
      <div className="flex flex-col ">
        <h1 className="heading-text text-center">
          Let's Get in Touch! 🤙
        </h1>
      </div>
      <div className="padding-x">
        <div className="flex flex-col space-y-4">
          <p className="info-text">
            Thank you for reading my page. </p>
          <p className="info-text font-2xl">
            I'm currently looking for internships and job opportunities, especially an internship for Summer 2024.
            You're always welcome to shoot me an email whenever!
          </p>
          <p className="info-text font-2xl">
            Find the source code for this website <a href='https://github.com/zexianchoo/zexianchoo.github.io'
            target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" > here! </a> 
          </p>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <div className="mt-3 flex content-center max-container sm:relative justify-center">
            <ul className='mt-3 flex flex-wrap items-center justify-center sm:gap-12 max-sm:gap-3'>
                {footer_icons.map((item) => (
                    <li key={ item.label }>
                        <a href = { item.href }>
                            <img
                                src={ item.src }
                                alt="test"
                                className="m-0"
                                height = {48}
                                width={48}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </div>

        </div>

      </div>
    </main>
  );
}

export default ContactInfo