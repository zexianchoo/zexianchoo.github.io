import React from 'react'
import { face } from "../assets/images";



const Hero = () => {
  return (
    <section
      id='home'
      className='pt-64 flex justify-between items-center max-container min-h-full'
    >
      <div className='relative fading-down-slow'>
        <img
          src={ face }
          alt='picture'
          width={1200}
          height={1200}
          className='rounded-full'
        />
        <p className='relative text-3xl text-center font-montserrat text-dark-blue py-8 fading-down-slow'>
          Choo Ze Xian
        </p>
        </div>
        <div className='relative'>
            <p className='text-xl font-montserrat text-dark-blue pl-32 fading-right-slower' >
            Hi! I'm a sophomore at the University of Illinois Urbana-Champaign studying Computer Science. I am a software developer interested in developing applications that use Artificial Intelligence, Machine Learning, and Computer Vision. I have experience working Pytorch, Tensorflow, OpenCV and React. I am passionate about developing solutions that provide business value, and am constantly looking for oppourtunities to improve my skills as a Software Engineer.
            </p>
        </div>
    </section>
  );
}

export default Hero