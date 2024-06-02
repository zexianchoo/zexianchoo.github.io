import { Nav, Footer } from '../components'
import { BBDCPage } from '../sections'

const BBDCReadMore = () => {
  return (
    <main className='flex flex-col w-full h-screen bg-cover.bg-clip-custom-2 bg-[url("src/assets/images/wave.svg")]' >
      <Nav />
      <section className='mb-auto padding-x fading-down' >
        <div>
          <BBDCPage />
        </div>
      </section>

        <div id='footer' className=''>
          <Footer />
        </div>

    </main>
  )
}

export default BBDCReadMore