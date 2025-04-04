import React from 'react'
import { frisbee, brownies, cookies, working_out, train_selfie } from '../assets/images';
import { TechStack } from '../components';


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
                        I am passionate about the fields Computer Vision and DevSecOps. I am currently doing research in Computer Vision and doing DevOps side projects involving work with open source code!
                        </p>

                        <TechStack/>

                        <p className='info-text text-dark-blue max-sm:py-2 min-sm:py-8'>
                        Technicalities aside, I really enjoy coffee (I think you could probably tell), playing ultimate frisbee, baking and working out.
                        </p>
                    </div>
                </section>
            </div>
            
            <section className=''>
                <div className='flex flex-wrap justify-between max-w-full items-center padding-b space-y-2 fading-right-delayed' >
                    <img
                        src={ train_selfie }
                        alt='train_selfie'
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