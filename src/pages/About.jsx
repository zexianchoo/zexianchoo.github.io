import React from 'react'
import { Nav } from "../components";
import { AboutMe } from '../sections';


const about = () => {
  return (
    <main className='sm:relative w-full h-screen' >
      <Nav />
      <section id = 'about me' className=''>
        <AboutMe />
      </section>
    </main>
  )
}

export default about