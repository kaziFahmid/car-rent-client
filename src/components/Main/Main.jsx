import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Main() {
  return (
    <div>
        <Header/>
  <div className='min-h-screen'>
  <Outlet/>
  </div>
  
      < Footer/>
    </div>
  )
}
