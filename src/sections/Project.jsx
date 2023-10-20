import React from 'react'
import { PURE_project } from "../components"

const Project = () => {
  return (
    <main
      id='project'
      className=' max-container min-h-full flex flex-col '
    >
    <h1 className='heading-text text-center font-semibold'>
      Here's some of the projects I've worked on:
    </h1>
    <section className='padding'>
      <PURE_project />
    </section>

    </main>
  )
}

export default Project