import { Nav, Footer } from '../components'
import { GCPPage } from '../sections'

const GCPReadMore = () => {
  return (
    <main className='flex flex-col w-full h-screen' >
      <Nav />
      <section className='mb-auto padding-x fading-down' >
        <div>
          <GCPPage />
        </div>
      </section>

        <div id='footer' className=''>
          <Footer />
        </div>

    </main>
  )
}

export default GCPReadMore