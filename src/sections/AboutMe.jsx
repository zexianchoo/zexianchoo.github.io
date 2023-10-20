import React from 'react'
import { frisbee, brownies, cookies } from '../assets/images';
const AboutMe = () => {
    return (
        <section
          id='about'
          className='relative max-sm:pt-8 sm:flex flex-col max-container px-8  min-h-full '
        >
            <section className='max-container max-sm:text-lg max-md:xl md:text-2xl fading-down-fast'>
                <h1 className='font-palanquin text-center text-4xl font-bold sm:pt-16 pt-8'> 
                    About Me!
                </h1>

                <div className='py-20 space-y-10'>
                    <p className='font-montserrat text-dark-blue max-sm:py-2 min-sm:py-8'>
                    I am passionate about developing applications
                    I have experience working with 2 main focuses: Deep Learning and Web Development:
                    that use AI/ML, especially Computer Vision.  
                    </p>

                    <p className='font-montserrat text-dark-blue max-sm:py-2 min-sm:py-8'>
                    </p>

                    <ul className='list-disc font-montserrat text-dark-blue max-sm:py-2 min-sm:py-8 space-y-3'>

                        <li className='ml-10'> Torch, Tensorflow, OpenCV, NeRFStudio. I am currently working on creating diffusion models with spherical geometry. </li>

                        <li className='ml-10'> React, Tailwind, MongoDB, PostgreSQL, MySQL. </li>
                    </ul>

                    <p className='font-montserrat text-dark-blue max-sm:py-2 min-sm:py-8'>
                    Technicalities aside, I really enjoy coffee, playing ultimate frisbee and baking.
                    </p>
                </div>
            </section>
            
            <section className=''>
                <div className='flex flex-wrap justify-between max-w-full items-center padding-b space-y-2 fading-right-delayed' >
                    <img
                        src={ cookies }
                        alt='cookies'
                        width={300}
                        height={300}
                        className='object-contain rounded-2xl mx-auto relative'
                        />
                    <img
                        src={ brownies }
                        alt='brownies'
                        width={300}
                        height={300}
                        className='object-contain rounded-2xl mx-auto relative'
                        />
                    <img
                        src={ frisbee }
                        alt='frisbee'
                        width={500}
                        height={300}
                        className='object-contain rounded-2xl mx-auto relative'
                        />
                </div>
            </section>
        </section>
      );
}

export default AboutMe