import React from 'react'
import { Nav, Footer } from '../components'
import { Project } from '../sections'

const Projects = () => {
  return (
    <main className='sm:relative w-full h-screen flex flex-col justify-between' >
      <Nav />
      <div className='mb-auto'>
        <section id ='projects' className='mt-20' >
          <Project />
        </section>
      </div>
      <div>
        <section id='footer' className=''>
          <Footer />
        </section>
      </div>

    </main>
  )
}

export default Projects