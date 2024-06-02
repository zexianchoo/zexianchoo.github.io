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
    <main className='sm:relative flex flex-col w-full h-screen justify-between bg-cover.bg-clip-custom-2 bg-[url("src/assets/images/wave.svg")]'>
        <Nav />
      <div className='items-center justify-center'>
        <section id='hero' className=''>
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