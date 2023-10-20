import React from 'react'
import { Nav, Footer } from "../components";
import { Hero } from "../sections";

const Home = () => {
  return (
    <main className='h-screen w-full justify-between' >
        <Nav />
      <div className=''>
        <section id='hero' className='padding'>
          <Hero />
        </section>
      </div>
      <footer id='footer' className='pb-10 bg-slate-500'>
        <Footer />
      </footer>
    </main>
  )
} 

export default Home