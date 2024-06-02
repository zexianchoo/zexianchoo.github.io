import React from 'react'
import { Nav, Footer, Deepfake } from '../components'
import { DeepfakePage } from '../sections'

const DeepFakeReadMore = () => {
  return (
    <main className='flex flex-col w-full h-screen ' >
      <Nav />
      <section className='mb-auto padding-x fading-down' >
        <div>
          <DeepfakePage />
        </div>
      </section>

        <div id='footer' className=''>
          <Footer />
        </div>

    </main>
  )
}

export default DeepFakeReadMore