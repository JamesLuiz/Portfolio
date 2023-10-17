import React, {useState} from 'react'
import './Nav.css'
import {RiHomeOfficeFill} from 'react-icons/ri'
import {SiAboutdotme} from 'react-icons/si'
import {GiExpense} from 'react-icons/gi'
import {FaServicestack} from 'react-icons/fa'
import {MdContactMail} from 'react-icons/md'
import {MdOutlineFindReplace} from 'react-icons/md'
import {BsSignal} from 'react-icons/bs'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  
  return (
    <nav  id='navbar'>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><RiHomeOfficeFill/> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><SiAboutdotme/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiExpense/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FaServicestack/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdOutlineFindReplace/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactMail/></a>
    </nav>
  )
}

export default Nav