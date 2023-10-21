import React from 'react'
import { face, icon } from "../assets/images";


const Hero = () => {
  return (
    <main className='flex flex-col mb-auto'>
      <section
        id='home'
        className='relative py-10 max-sm:pt-8 sm:flex max-sm:flex-col justify-between items-center max-container object-scale-down min-h-full'
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
            <p className='relative max-sm:text-lg max-md:xl md:text-2xl text-center font-montserrat text-dark-blue max-sm:py-2 min-sm:py-8 fading-down-slow'>
              Machine Learning | Computer Vision
            </p>
          </div>
        </div>

        <div className='flex flex-col sm:ml-36'>
          <div className='py-2 sm:max-w-full'>
            <p className='sm:text-[55px] max-sm:text-md font-montserrat text-dark-blue fading-right-slower' >
              Hey! 👋 My name is <span className='text-coral-red font-semibold'>Ze Xian Choo</span>. 
            </p>
          </div>
          <div className='justify-left'>
            <ul className='space-y-4 sm:text-lg font-light max-sm:text-sm  font-Palanquin text-dark-blue fading-right-slower py-2' >
                <p className='' >
                  📖 CS Student @ UIUC
                </p>
                <p className='' >
                  💻 Computer Vision Researcher @ Promoting Undergraduate Research Engineering (PURE)
                </p>
                <p className='' >
                  👨‍🏫 Course Assistant for CS 222
                </p>
                <p className='' >
                  🏘️ Sigma Phi Delta
                </p>

                <p className='' >
                  🥏 Ultimate Frisbee
                </p>
                
                <p className='' >
                  ... and loves ☕
                </p>
            </ul>
          </div>
        </div>

      </section>
    </main>
    
  );
}

export default Hero