import React from 'react'
import { PURE_project } from "../components"
import { Deepfake_Detection } from '../components'
import { PURE_data } from '../constants'
import { Card } from '../components'

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
          <Card img_class = {item.img_class}
          title={item.title}
          text={item.text}
          read_more_href={item.read_more_href}/>
        </li>
      ))}
      </ul>
      <PURE_project />
    </section>
    <section className='fading-down-slower card-padding'>
      <Deepfake_Detection />
    </section>
    </main>
  )
}

export default Project