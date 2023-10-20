import React from 'react'
import { spherical_world } from '../assets/images'

const PURE_project = () => {
  return (
    <section className='flex flex-col items-center card'>
    <div id = "PURE Project" className='flex flex-col space-y-10'>
      <h1 className='heading-text'>
        <span className='text-coral-red font-semibold'> Current: </span> Spherical World Generation
      </h1>
      <div className='flex space-x-10'>
        <img 
            src = { spherical_world } 
            width = {200} 
            height={200} 
            className='rounded-lg' >
        </img>
        <p className='info-text'>
            Test
        </p>
      </div>
    </div>
  </section>
  )
}

export default PURE_project