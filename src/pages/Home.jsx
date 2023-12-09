import React, { useEffect } from 'react'
import { Nav, Footer } from "../components";
import { Hero } from "../sections";

const Home = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-X30YRKRL4C'; 
    script.async = true;

    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-X30YRKRL4C'); 
  }, []);


  return (
    <main className='flex flex-col min-h-screen w-full ' >
      
        <Nav />
      <div className='flex-1'>
        <section id='hero' className='mb-auto padding'>
          <Hero />
        </section>
      </div>
      <footer id='footer' className=''>
        <Footer />
      </footer>
    </main>
  )
} 

export default Home