import React from 'react'
import { Nav, Footer } from '../components'

const Contact = () => {
  return (
    <main className='sm:relative w-full h-screen' >
      <Nav />
      <section id='footer' className='pb-10 bg-slate-500'>
        <Footer />
      </section>
    </main>
  )
}

export default Contact