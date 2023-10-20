import React from 'react'
import { Nav, Footer } from '../components'
import { Project } from '../sections'

const Projects = () => {
  return (
    <main className='sm:relative w-full h-screen' >
      <Nav />
      <section id ='projects' className='mt-20'>
        <Project />
      </section>
      <section id='footer' className='pb-10 bg-slate-500'>
        <Footer />
      </section>
    </main>
  )
}

export default Projects