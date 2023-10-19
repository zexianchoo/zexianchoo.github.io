import React from 'react'
import { Nav } from "../components";
import { Hero } from "../sections";

const Home = () => {
  return (
    <main className='sm:relative w-full h-screen' >
      <Nav />
      <section id='hero' className='padding'>
        <Hero />
      </section>
    </main>
  )
}

export default Home