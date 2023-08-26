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

<section className='grid lg:grid-cols-2 gap-7 grid-cols-1 max-w-6xl mx-auto pt-24' >
<div className='flex justify-center items-center'>
<div data-aos="fade-right">


<h1 className='lg:text-4xl text-2xl text-black font-bold mb-4 '>One Of The Best Car <span className='text-sky-500'>Rental</span> Platform</h1>
  <p className='mb-4 text-justify '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ducimus praesentium excepturi placeat nobis nemo, quo facilis laboriosam blanditiis quibusdam modi incidunt harum commodi itaque doloribus non voluptatibus delectus ullam.</p>
  <div>
    <button className='btn bg-sky-500 text-white'>Explore</button>
  </div>
</div>

</div>
<div data-aos="fade-left">
  <img src='https://i.ibb.co/XCj8ths/blue-bmw-m2-coupe-car.png' className='img-fluid'/>
</div>
</section>

    
  
  )
}

export default Banner
