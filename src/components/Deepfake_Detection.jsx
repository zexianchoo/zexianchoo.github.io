import React from 'react'
import { deepfake_text } from '../constants'
import { Button } from '../components'
import { spherical_world } from '../assets/images'

const Deepfake_Detection = () => {
return (
    <section className='flex flex-col items-center card '>
        <h1 className='heading-text mb-5 text-center'>
        <span className='text-coral-red font-semibold'> Current: </span> Spherical World Generation
        </h1>

    <div id = "Deepfake Detection" className='flex min-w-full flex-col justify-between space-y-10 px-8'>
        <div className='flex sm:flex-row max-sm:flex-col items-center space-x-10'>
        <div className='flex object-scale-down items-center justify-center max-sm:py-2'>
            <img 
                src = { spherical_world } 
                className='w-4/5 rounded-lg drop-shadow-lg max-sm:w-2/5' >
            </img>
        </div>
        <div className='grow-0 w-4/5 flex flex-col'>
            <div className='flex flex-col'>
            <p className='info-text '>
                { deepfake_text }
            </p>

            <div className="flex justify-end items-center ">
                <a href='/' className='pr-4'>
                <Button  label="Read More" >  </Button>
                </a>
            </div>
            </div>
        </div>

        </div>
    </div>
    </section>
    )
}

export default Deepfake_Detection