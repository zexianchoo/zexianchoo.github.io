import React from 'react'
import { Nav, Footer } from '../components'
import { ContactInfo } from '../sections'

const Contact = () => {
  return (
    <main className='sm:relative flex flex-col w-full h-screen bg-cover.bg-clip-custom-2 bg-[url("src/assets/images/wave.svg")] ' >
        <Nav />
      <div className='mb-auto'>
        <section id='ContactInfo' className='padding fading-down-fast'>
          <ContactInfo />
          
        </section>
      </div>
      <footer id='footer' className=''>
        <Footer />
      </footer>
    </main>
  )
}

export default Contact