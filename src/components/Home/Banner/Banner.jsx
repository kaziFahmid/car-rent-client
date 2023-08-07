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

<section className='flex items-center justify-center bg-[url(https://efs.consulting/app/uploads/2023/07/Header_Upcoming-Developments-of-the-Automotive-Regulatory_3840x2160px-1-scaled.jpg)] bg-no-repeat bg-cover bg-center bg-slate-200 h-screen'>

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
