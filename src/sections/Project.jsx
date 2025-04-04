import React from 'react'
import { CurrentCard, Card, GCP, ChatBot } from "../components"
import { PURE_data, Deepfake_data, BBDC_data, GCP_data, ChatBot_data } from '../constants'
import { BBDC, Deepfake } from "../components"

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
        {ChatBot_data.map((item) => (
        <li>
          <ChatBot img_class = {item.img_class}
          title={item.title}
          text={item.text}
          read_more_href={item.read_more_href}/>
        </li> 
      ))}
      </ul>
    </section>

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
          <Deepfake img_class = {item.img_class}
          title={item.title}
          text={item.text}
          read_more_href={item.read_more_href}/>
        </li> 
      ))}
      </ul>
    </section>
    
    <section className='fading-down-slower card-padding'>
    <ul>
        {GCP_data.map((item) => (
        <li>
          <GCP img_class = {item.img_class}
          title={item.title}
          text={item.text}
          read_more_href={item.read_more_href}/>
        </li> 
      ))}
      </ul>
    </section>
    <section className='fading-down-slower card-padding'>
    <ul>
        {BBDC_data.map((item) => (
        <li>
          <BBDC img_class = {item.img_class}
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