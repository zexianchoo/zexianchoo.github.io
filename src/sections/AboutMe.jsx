import React from 'react'
import { frisbee, brownies, cookies, working_out } from '../assets/images';
const AboutMe = () => {
    return (
        <section
          id='about'
          className='max-container justify-center items-center space-y-4'
        >
            <div className='padding-x'>
                <section className='max-container max-sm:text-lg max-md:xl md:text-2xl fading-down-fast'>
                    <h1 className='font-palanquin text-center text-4xl font-bold '> 
                        About Me! 🤩
                    </h1>

                    <div className='py-20 space-y-12'>
                        <p className='info-text text-dark-blue max-sm:py-2 min-sm:py-8'>
                        I am currently interested in the fields of Computer Vision, as well as Quantitative Finance. While there may not seem 
                        to be any obvious overlap in both of these fields, it feels like there are many skills I've learnt that are applicable to both.
                        </p>

                        <p className='info-text'>
                            My Tech Stack:
                        </p>

                        <ul className='list-disc info-text space-y-2'>

                            <li className='ml-10'> Torch, Tensorflow, OpenCV, HuggingFace. </li>

                            <li className='ml-10'> RCMX Strategy Studio, Databento, IEX.  </li>

                            <li className='ml-10'> React, Tailwind, MongoDB, PostgreSQL, MySQL, GCP, Azure. </li>
                        </ul>

                        <p className='info-text text-dark-blue max-sm:py-2 min-sm:py-8'>
                        Technicalities aside, I really enjoy coffee (I think you could probably tell), playing ultimate frisbee, baking and working out.
                        </p>
                    </div>
                </section>
            </div>
            
            <section className=''>
                <div className='flex flex-wrap justify-between max-w-full items-center padding-b space-y-2 fading-right-delayed' >
                    <img
                        src={ working_out }
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