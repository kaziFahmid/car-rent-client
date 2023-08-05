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

    <section className=' bg-[url(https://i.ibb.co/Js2HFCD/pngwing-com.png)] bg-no-repeat lg:bg-contain bg-cover bg-right  bg-slate-200 h-screen  '>

<div className='lg:relative flex lg:flex-row flex-col justify-center '>
<div data-aos="fade-right" className='lg:mt-14 mt-24 lg:me-5 text-center lg:text-start '>
    <h1 className='lg:text-7xl text-4xl font-bold text-white lg:text-black'>Founded on Passion <span className='text-white'>Built</span><br className='hidden lg:block '></br> On Service.</h1>

    <button className='bg-sky-600 text-white btn mt-6'>Request a Quote</button>
   
</div>

<div data-aos="fade-left"  className='lg:absolute lg:mt-28 mt-9'>
        <img src='https://i.ibb.co/t8r6yf4/pngegg-1.png' className='img-fluid lg:h-96'/>
      </div>

</div>

    </section>
    
  
  )
}

export default Banner
