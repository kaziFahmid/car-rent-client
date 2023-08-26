import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Journey = () => {

  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });



  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 max-w-6xl mx-auto mt-52'>
        <div className='flex justify-center items-center'>   
      <div data-aos="fade-right">
      <h1 className='text-5xl mb-4 font-bold'>Unleash Your <span className='text-sky-500'>Journey</span></h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem animi excepturi, temporibus amet magnam vel quia. Omnis molestiae nam cupiditate dolorem pariatur, earum, obcaecati esse amet, cum expedita natus eligendi!</p>
      </div>
        </div>
        <div data-aos="fade-down" >
            <img  src='https://i.ibb.co/rQq1RvM/pngegg-4.png' className='img-fluid'/>
        </div>

      
    </div>
  )
}

export default Journey
