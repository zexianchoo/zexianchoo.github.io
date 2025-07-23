import React from 'react'
import { frisbee, brownies, cookies, working_out, train_selfie, portrait, cherry_blossoms } from '../assets/images';
import { TechStack } from '../components';

const AboutMe = () => {
    return (
        <section
          id='about'
          className='max-container justify-center items-center space-y-4'
        >
            <div className='padding-x'>
                <section className='max-container max-sm:text-lg max-md:xl md:text-2xl fading-down-fast'>
                    <h1 className='font-palanquin text-center text-4xl font-bold'> 
                        About Me! 🤩
                    </h1>
                    <div className='flex max-w-full items-center justify-center gap-x-10 px-4 py-4 fading-right-delayed'>
                        <img
                            src={ portrait }
                            width={300}
                            height={300}
                            className='block w-[300px] h-[300px] object-cover rounded-3xl' // Added w-[300px], h-[300px], object-cover, and changed to rounded-3xl
                        />
                        <img
                            src={ cherry_blossoms }
                            width={300}
                            height={300}
                            className='block w-[300px] h-[300px] object-cover rounded-3xl' // Added w-[300px], h-[300px], object-cover, and changed to rounded-3xl
                        />
                    </div>
                    <div className='py-4 space-y-12'>
                        <p className='font-semibold max-sm:py-2 min-sm:py-8 text-center'>
                            Everything DevOps, SRE and Software Engineering!
                        </p>
                        <ul className='info-text text-dark-blue list-disc list-inside space-y-4 ml-8'> {/* Added ml-8 for indentation */}
                            <li className='max-sm:py-2 min-sm:py-8'>
                                I own multiple VPS servers across the world for my own personal projects, I host a Minecraft server for my friend group, I own a NAS which I use for school, and I have backups on cloud (B2).
                            </li>

                            <li className='max-sm:py-2 min-sm:py-8'>
                                Even while I shower, I think about improvements to my own home server, and I browse r/homelab and r/selfhosted for potential upgrades. I might be a little obsessed 🤔, but I like to think it's a good kind of obsessed! 😄
                            </li>

                            <li className='max-sm:py-2 min-sm:py-8'>
                                I have gone through maybe 3-4 different iterations of my own home server, starting from humble Docker images and Docker Compose files, I have now gone on to Proxmox and even a local K8s cluster (admittedly just to practice K8s).
                            </li>
                        </ul>

                        <TechStack/>

                        <p className='info-text text-dark-blue max-sm:py-2 min-sm:py-8'>
                        When I have to pretend to be normal, I like to play frisbee with my friends, bake brownies, work out at the gym or go out to bars and clubs! 🤩
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