import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content mt-20">
    <div>
      <span className="footer-title">Services</span> 
      <a className="link link-hover">Branding</a>
      <a className="link link-hover">Design</a>
      <a className="link link-hover">Marketing</a>
      <a className="link link-hover">Advertisement</a>
    </div> 
    <div>
      <span className="footer-title">Company</span> 
      <Link className="link link-hover" to='/'>Home</Link>
      <Link className="link link-hover" to='/contactus'>Contact</Link>
      <Link className="link link-hover" to='/login'>Login</Link>
      <Link className="link link-hover" to='/signup'>Signup</Link>
    </div> 
    <div>
      <span className="footer-title">Legal</span> 
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </div>
  </footer>
  )
}
