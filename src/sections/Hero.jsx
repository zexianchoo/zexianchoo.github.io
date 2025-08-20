import React from 'react';
import { face } from "../assets/images";
import { TechStack } from '../components';

const Hero = () => {
  return (
    <main className='max-container px-4 sm:px-8 py-16'>
      <section
        id='home'
        className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12'
      >
        <div className='flex flex-col items-center text-center lg:w-1/3 flex-shrink-0'>
          <img
            src={face}
            alt='Sean Choo profile picture' 
            width={250}
            height={250}
            className='rounded-full shadow-lg'
          />
          <div className='mt-6'>
            <p className='text-3xl font-semibold font-montserrat text-dark-blue'>
              Sean (Ze Xian) Choo
            </p>
            <p className='text-xl font-medium mt-2 font-montserrat text-slate-600 whitespace-nowrap'>
              Software Engineer |<br /> DevOps Engineer |<br /> SRE
            </p>
          </div>
        </div>

        <div className='flex flex-col lg:w-2/3 mt-8 lg:mt-0'>
          <div className=''>
            <p className='text-3xl md:text-5xl font-montserrat text-dark-blue'>
              Hey! 👋 My name is <span className='text-coral-red font-semibold'>Sean (Ze Xian) Choo</span>.
            </p>
          </div>
          <div className='mt-6'>
            <ul className='space-y-3 text-base md:text-lg font-light font-palanquin text-dark-blue'>
              <li>📖 <span className='font-semibold'>CS Senior</span> @ UIUC</li>
              <li>🗄️ <span className='font-semibold'>Current SRE Intern</span> @ Blizzard Entertainment</li>
              <li>💻 <span className='font-semibold'>Incoming SWE Intern</span> @ ByteDance</li>
              <li>💬 <span className='font-semibold'>Conversational Search Engineer</span> @ PeopleWeave</li>
              <li>📈 <span className='font-semibold'>Trading Algorithms Engineer</span> @ Illini Blockchain</li>
              <li>🏘️ <span className='font-semibold'>Sigma Phi Delta</span></li>
              <li>... and <i>really</i> loves ☕!</li>
            </ul>
          </div>
          <div className='mt-8'>
            <TechStack />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;