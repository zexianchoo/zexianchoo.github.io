import React from 'react'
import { face } from "../assets/images";



const Hero = () => {
  return (
    <section
      id='home'
      className='w-full flex justify-center justify-items-center text-center min-h-screen max-container fading-down-slow'
    >
      <div className='relative w-half pt-48'>
        <img
          src={ face }
          alt='picture'
          width={300}
          height={300}
          className='rounded-full'
        />
        <p className='text-3xl font-montserrat text-dark-blue py-8'>
          Choo Ze Xian
        </p>

      </div>
    </section>
  );
}

export default Hero