import React from 'react'
import { Nav, Footer } from '../components'
import { SphericalWorld } from '../sections'

const SphericalReadMore = () => {
  return (
    <main className='flex flex-col w-full h-screen ' >
      <Nav />
      <section className='mb-auto padding-x fading-down' >
        <div>
          <SphericalWorld />
        </div>
      </section>

        <div id='footer' className=''>
          <Footer />
        </div>

    </main>
  )
}

export default SphericalReadMore