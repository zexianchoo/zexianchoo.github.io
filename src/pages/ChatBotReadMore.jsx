import React from 'react'
import { Nav, Footer, Deepfake } from '../components'
import { ChatBotPage } from '../sections'

const ChatBotReadMore = () => {
  return (
    <main className='flex flex-col w-full h-screen' >
      <Nav />
      <section className='mb-auto padding-x fading-down' >
        <div>
          <ChatBotPage />
        </div>
      </section>

        <div id='footer' className=''>
          <Footer />
        </div>

    </main>
  )
}

export default ChatBotReadMore