import React from 'react'
import { Nav, Footer } from "../components";
import { Hero } from "../sections";

const Home = () => {
  return (
    <main className='flex flex-col min-h-screen w-full ' >
        <Nav />
      <div className='flex-1'>
        <section id='hero' className='padding'>
          <Hero />
        </section>
      </div>
      <footer id='footer' className=''>
        <Footer />
      </footer>
    </main>
  )
} 

export default Home