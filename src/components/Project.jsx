import React from 'react'

const Project = () => {
  return (
    <section
      id='home'
      className='pt-64 flex justify-between items-center max-container min-h-full'
    >
      <div className='relative max-sm:text-lg fading-down-slow'>
        <img
          src={ face }
          alt='picture'
          width={1200}
          height={1200}
          className='rounded-full'
        />
        <p className='relative max-sm:text-lg text-3xl text-center font-montserrat text-dark-blue py-8 fading-down-slow'>
          Choo Ze Xian
        </p>
        </div>
        <div className='relative'>
            <p className='text-xl max-sm:text-sm font-montserrat text-dark-blue pl-36 fading-right-slower' >
            Hey! 👋 I'm a sophomore at the University of Illinois Urbana-Champaign studying Computer Science. I am a software developer interested in developing applications that use Artificial Intelligence, Machine Learning, and Computer Vision. I have experience working Torch, Tensorflow, OpenCV and React. I am passionate about developing solutions that provide business value, and am constantly looking for oppourtunities to improve my skills as a Software Engineer.
            </p>
        </div>
    </section>
  )
}

export default Project