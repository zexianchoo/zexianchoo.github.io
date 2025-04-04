import React from 'react'
import { Nav, Footer } from "../components";
import { AboutMe } from '../sections';


const about = () => {
  return (
    <main className='sm:relative flex flex-col w-full h-screen' >
      <Nav />
      <div className='mb-auto'>
      <section id = 'about me' className=''>
        <AboutMe />
      </section>
      </div>
      <footer id='footer' className=''>
        <Footer />
      </footer>
    </main>
  )
}

export default about