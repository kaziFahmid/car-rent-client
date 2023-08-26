import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutUs = () => {

 AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });

  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 mt-32 max-w-6xl mx-auto gap-5'>
        <div data-aos="fade-right">
            <img src='https://i.ibb.co/V9Mh755/Image.png' className='img-fluid'/>
        </div>
        <div className='flex justify-center items-center'>
           <div data-aos="fade-down" className='lg:mt-0 mt-9'>





           <h1 className='text-4xl font-bold'>About <span className='text-sky-500'>Us</span></h1>
            <p className='mt-5 text-justify'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo dolorem earum officiis modi! Ea sit illo earum, odit, harum dolores et explicabo reprehenderit id facilis maiores quaerat atque aliquam, vel minima! Voluptatum, sint! Neque rerum aliquid similique consequuntur error expedita 
            </p>
        <div>
            <button className='btn bg-sky-500 text-white mt-6'>Explore</button>
        </div>
           </div>
        </div>
  
    </div>
  )
}

export default AboutUs
