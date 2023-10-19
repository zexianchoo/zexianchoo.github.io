import React from 'react'
import { face } from "../assets/images";



const Hero = () => {
  return (
    <section
      id='home'
      className='relative h-[60vh] max-sm:pt-8 sm:flex justify-between items-center max-container px-8  min-h-full'
    >
      <div className='sm:relative max-sm:text-lg fading-down-slow'>
        <img
          src={ face }
          alt='picture'
          width={1200}
          height={1200}
          className='rounded-full'
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
        <div className='relative sm:max-w-full'>
            <p className='text-[21px] font-light max-sm:text-md font-montserrat text-dark-blue sm:pl-36 fading-right-slower' >
            Hey! 👋 I'm a sophomore at the University of Illinois Urbana-Champaign studying Computer Science. I am a software developer interested in developing applications that use Artificial Intelligence, Machine Learning, and Computer Vision. I have experience working Torch, Tensorflow, OpenCV and React. I am passionate about developing solutions that provide business value, and am constantly looking for oppourtunities to improve my skills as a Software Engineer.
            </p>
        </div>
    </section>
  );
}

export default Hero