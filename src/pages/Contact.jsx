import React from 'react'
import { Nav, Footer } from '../components'
import { ContactInfo } from '../sections'

const Contact = () => {
  return (
    <main className='sm:relative flex flex-col w-full h-screen ' >
        <Nav />
      <div className='mb-auto'>
        <section id='ContactInfo' className='padding'>
          <ContactInfo />
        </section>
      </div>
      <footer id='footer' className='pb-10 bg-slate-500'>
        <Footer />
      </footer>
    </main>
  )
}

export default Contact