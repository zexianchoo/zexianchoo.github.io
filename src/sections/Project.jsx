import React from 'react'
import { CurrentCard, Card } from "../components"
import { PURE_data, Deepfake_data } from '../constants'

const Project = () => {
  return (
    <main
      id='project'
      className=' max-container min-h-full flex flex-col '
    >
    <h1 className='heading-text text-center font-semibold fading-right-fast'>
      Here's some projects I've worked on ✌️:
    </h1>
    <section className='fading-down-slower card-padding'>
    <ul>
        {PURE_data.map((item) => (
        <li>
          <CurrentCard img_class = {item.img_class}
          title={item.title}
          text={item.text}
          read_more_href={item.read_more_href}/>
        </li> 
      ))}
      </ul>

    </section>
    <section className='fading-down-slower card-padding'>
    <ul>
        {Deepfake_data.map((item) => (
        <li>
          <Card img_class = {item.img_class}
          title={item.title}
          text={item.text}
          read_more_href={item.read_more_href}/>
        </li> 
      ))}
      </ul>
    </section>
    </main>
  )
}

export default Project