import React from 'react'
import { face, icon } from "../assets/images";
import { TechStack } from '../components';


const Hero = () => {
  return (
    <main className='flex flex-col max-container'>
      <section
        id='home'
        className='relative sm:flex max-sm:flex-col justify-between items-center object-scale-down '
      >
        <div className='sm:flex-col max-sm:text-lg fading-down-slow items-center justify-center'>
          <img
            src={ face }
            alt='picture'
            width={250}
            height={250}
            className='rounded-full mx-auto'
          />
          <div>
            <p className='relative max-sm:text-2xl font-semibold sm:text-2xl text-center font-montserrat text-dark-blue py-4 fading-down-slow'>
              Sean (Ze Xian) Choo 
            </p>
            <p className='relative text-2xl whitespace-nowrap text-center font-montserrat text-dark-blue fading-down-slow'>
              Software Engineer | <br/> DevOps Engineer | <br/> SRE 
            </p>
          </div>
        </div>

        <div className='flex flex-col sm:ml-36 space-y-4 fading-down-slow'>
          <div className='py-2 sm:max-w-full'>
            <p className='sm:text-[50px] max-sm:text-md font-montserrat text-dark-blue' >
              Hey! 👋 My name is <span className='text-coral-red font-semibold'>Sean (Ze Xian) Choo</span>. 
            </p>
          </div>
          <div className='justify-left'>
            <ul className='space-y-4 sm:text-lg font-light max-sm:text-sm font-Palanquin text-dark-blue py-2' >
                <p className='' >
                  📖 <span className='font-semibold'>CS Senior</span> @ UIUC
                </p>

                <p className='' >
                  🗄️ <span className='font-semibold'>Current SRE Intern</span> @ Blizzard Entertainment
                </p>

                <p className='' >
                  💻 Incoming <span className='font-semibold'>SWE Intern</span> @ ByteDance
                </p>

                <p className='' >
                  💬 <span className='font-semibold'>Conversational Search Engineer</span> @ PeopleWeave 
                </p>

                <p className='' >
                  📈 <span className='font-semibold'>Trading Algorithms Engineer</span> @ Illini Blockchain
                </p>

                <p className='' >
                  🏘️ <span className='font-semibold'>Sigma Phi Delta</span>
                </p>

                <p className='' >
                  ... and <span className='text-italics'> really </span> loves ☕!
                </p>
            </ul>
          </div>
          <div className='max-sm:scale-75'>
            <TechStack />
          </div>
        </div>

      </section>
    </main>
    
  );
}

export default Hero
