import React from 'react'

const AboutMe = () => {
    return (
        <section
          id='about'
          className='relative max-sm:pt-8 sm:flex flex-col max-container px-8  min-h-full fading-down-slow'
        >
            <section className='max-container max-sm:text-lg max-md:xl md:text-2xl fading-down-slow'>
                <h1 className='font-palanquin text-center text-4xl font-bold padding-t'> 
                    About Me!
                </h1>

                <div className='py-20'>
                    <p className='font-montserrat test-end text-dark-blue max-sm:py-2 min-sm:py-8'>
                    I am a software developer interested in developing applications that use Artificial Intelligence, Machine Learning, and Computer Vision. 
                    I have experience working Torch, Tensorflow, OpenCV and React. I am passionate about developing solutions that provide business value, and am constantly looking for oppourtunities to improve my skills as a Software Engineer.
                    </p>
                </div>

            </section>
        </section>
      );
}

export default AboutMe