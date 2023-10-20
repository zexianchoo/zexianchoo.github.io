import React from 'react'
import { Nav, Footer } from '../components'

const Contact = () => {
  return (
    <main className='w-full h-screen' >
      <Nav />
      <section className='flex flex-col min-h-full justify-between'>
        <div>
          <div className='text-center h-screen mb-auto'>
            <h1 className='heading-text'> Under Construction
              </h1>
          </div>
        </div>
          <div id='footer' className='my-auto pb-10 bg-slate-500'>
            <Footer />
          </div>

      </section>
    </main>
  )
}

export default Contact