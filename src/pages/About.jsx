import React from 'react'
import { Nav, Footer } from "../components";
import { AboutMe } from '../sections';


const about = () => {
  return (
    <main className='sm:relative w-full h-screen' >
      <Nav />
      <section id = 'about me' className=''>
        <AboutMe />
      </section>
      <section id='footer' className='pb-10 bg-slate-500'>
        <Footer />
      </section>
    </main>
  )
}

export default about