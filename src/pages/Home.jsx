import React from 'react'
import { Nav, Footer } from "../components";
import { Hero } from "../sections";

const Home = () => {
  return (
    <main className='sm:relative w-full h-screen' >
      <Nav />
      <section id='hero' className='padding'>
        <Hero />
      </section>
      <section id='footer' className='pb-10 bg-slate-500'>
        <Footer />
      </section>
    </main>
  )
}

export default Home