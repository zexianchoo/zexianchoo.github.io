import React from 'react'
import { Nav, Footer } from '../components'
import { footer_icons } from "../constants";

const Poetry = () => {
  return (
    <main className="sm:relative w-full h-screen flex flex-col justify-between bg-cover.bg-clip-custom-2 bg-[url('src/assets/images/wave.svg')]">
        <Nav />
        <div className='max-container padding-x space-y-10'> 
            <section alt="Worthy" className='fading-down-fast'>
                <div className='space-y-4'>
                    <h1 className='font-kirimoni text-center font-thin text-3xl italic'> 
                        Worthy
                    </h1>
                    <div className='max-w-prose'>
                        <p className='font-kirimoni text-center text-md'>
                        How can one see her face and stand unfazed? <br/>
                        The man within the slanted glass musters<br/>
                        A short and shameful breath which flowed like rain;<br/>
                        Expelled with greater urgency, cast out <br/>
                        With deep disdain. As April showers fall,<br/>
                        The May flowers bloom. And yet, as nature's<br/>
                        Cleanser reaches trembling hearts, it pools in vain.<br/>
                        Despite the hemorrhage, the weeds remain.<br/>
                        </p>
                    </div>
                    <p className='font-kirimoni text-left text-xs'>
                            2 June 2024
                    </p>
                </div>
            </section>
            <section alt="Worthy" className='fading-down-fast'>
                <div className='space-y-4'>
                    <h1 className='font-kirimoni text-center font-thin text-3xl italic'> 
                        Lifeless Departure
                    </h1>
                    <div className='max-w-prose'>
                        <p className='font-kirimoni text-center text-md'>
                        Shall I watch the last river trickle with <br/>
                        Death, and wash the torture beauty cut in <br/>
                        Stones away? We turned these ancient rocks en-<br/>
                        Trenched and saw the flash of colour <br/>
                        In eternity's lifeless gray.
                        <br/>
                        <br/>
                        Soaring the shaded skies, the lone parrot <br/>
                        had forsaken the begone.
                        </p>
                    </div>
                    <p className='font-kirimoni text-left text-xs'>
                            31 May 2024
                    </p>
                </div>
            </section>
        </div>
        <div id='footer' className='bg-slate-500'>
            <Footer />
        </div>
    </main>
  )
}

export default Poetry