import React from 'react'
import { footer_icons } from '../constants'
import Github from '../assets/icons/github.svg'

const Footer = () => {
  return (
    <section className='max-container'>
        <div className="mt-5 flex content-center max-container sm:relative justify-center">
            <ul className='mt-5 flex flex-wrap items-center justify-center sm:gap-10'>
                {footer_icons.map((item) => (
                    <li key={ item.label }>
                        <a href = { item.href }>
                            <img
                                src={ item.src }
                                alt="test"
                                className="m-0"
                                height = {48}
                                width={48}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <div className='items-end'>
            <p className=' font-montserrat leading-none text-sm text-slate-50'>Created by Ze Xian Choo</p>
        </div>
    </section>

  )
}

export default Footer