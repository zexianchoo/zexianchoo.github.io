import React from 'react'
import { face, icon } from "../assets/images";
import { TechStack } from '../components';


const Hero = () => {
  return (
    <main className='flex flex-col max-container space-y-2'>
      <section
        id='home'
        className='relative sm:flex max-sm:flex-col justify-between items-center object-scale-down '
      >
        <div className='sm:flex-col max-sm:text-lg fading-down-slow items-center justify-center'>
          <img
            src={ face }
            alt='picture'
            width={300}
            height={300}
            className='rounded-full mx-auto'
          />
          <div>
            <p className='relative max-sm:text-2xl font-semibold sm:text-3xl text-center font-montserrat text-dark-blue max-sm:py-2 min-sm:py-8 fading-down-slow'>
              Choo Ze Xian
            </p>
            <p className='relative max-sm:text-lg max-md:xl md:text-2xl whitespace-nowrap text-center font-montserrat text-dark-blue max-sm:py-2 min-sm:py-8 fading-down-slow'>
              Software Engineer | <br/> DevOps Engineer
            </p>
          </div>
        </div>

        <div className='flex flex-col sm:ml-36 space-y-4 fading-down-slow'>
          <div className='py-2 sm:max-w-full'>
            <p className='sm:text-[55px] max-sm:text-md font-montserrat text-dark-blue' >
              Hey! 👋 My name is <span className='text-coral-red font-semibold'>Ze Xian Choo</span>. 
            </p>
          </div>
          <div className='justify-left'>
            <ul className='space-y-4 sm:text-lg font-light max-sm:text-sm  font-Palanquin text-dark-blue py-2' >
                <p className='' >
                  📖 CS Junior @ UIUC
                </p>

                <p className='' >
                  ☁️ DevOps/MLOps Engineer Intern @ HTX
                </p>

                <p className='' >
                  💻 Computer Vision Researcher @ Promoting Undergraduate Research Engineering (PURE)
                </p>
                <p className='' >
                  💬 Conversational Search Engineer @ PeopleWeave 
                </p>

                <p className='' >
                  📈 Trading Algorithms Engineer @ Illini Blockchain
                </p>

                <p className='' >
                  🏘️ Sigma Phi Delta
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
