import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Banner = () => {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  return (       

<section className='flex items-center justify-center bg-[url(https://images.unsplash.com/photo-1521228670520-81bb7638fc10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)] bg-no-repeat bg-cover bg-center bg-slate-200 h-screen'>

<div data-aos="fade-right" className="w-full">
  <div className="text-center">
    <h1 className='text-white lg:text-6xl text-3xl md:text-4xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. m</h1>
    <div className='mt-5'>
<button className='text-white bg-sky-500 btn px-14 '>Start</button>
    </div>
  </div>
</div>

</section>

    
  
  )
}

export default Banner
