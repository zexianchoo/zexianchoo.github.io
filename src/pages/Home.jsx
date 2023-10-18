import React from 'react'
import { Nav, Hero } from "../components";

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