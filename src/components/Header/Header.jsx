import React from 'react'
import './Header.css'
import CTA from '../CTA/CTA'
import Me from '../../assets/Dp(1).png'
import Socials from '../Headersocials/Socials'
import TypedTexts from '../TextAnimation/singleTextAnimation'
import {FaArrowAltCircleDown} from 'react-icons/fa'
const Header = () => {
  return (
    <header id='home'>
      <div className='container header__container'>
        <h3><TypedTexts text="Hello, I'm" typeSpeed={100} /></h3>
        <h2><TypedTexts text="James Eliezer" typeSpeed={100} /></h2>
        <h4 className='text-light'><TypedTexts text="A Blockchain software developer" typeSpeed={100} /></h4>
        <CTA/>
        <Socials/>
        <div className="me">
          <img src={Me} alt="me" />

        </div>

        <a href="#contact" className='scroll__down'><FaArrowAltCircleDown/></a>
      </div>
    </header>
  )
}

export default Header