import React, {useState} from 'react'
import './Socials.css'
import TypedText from '../TextAnimation/TextAnimation'
import {FaGithubSquare} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {BsFacebook} from 'react-icons/bs'
import {FaWhatsappSquare} from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa"
const Socials = () => {

  const [animationIndex, setAnimationIndex] = useState(0);
  const handleAnimationComplete = () => {
    setAnimationIndex(prevIndex => prevIndex + 1);
  };
  
  return (
    <div className='header__socials'>
        <a href="https://github.com/JamesLuiz" target='_blank'> <FaGithubSquare />  {animationIndex === 0 && (
        <TypedText 
          text="Github  " 
          typeSpeed={100} 
          start={true} 
          onComplete={handleAnimationComplete} 
        />
      )}</a>

        <a href="https://twitter.com/eliezerjames92" target='_blank'><BsTwitter/> {animationIndex === 1 && (
        <TypedText 
          text="Twitter  " 
          typeSpeed={100} 
          start={true} 
          onComplete={handleAnimationComplete} 
        />
      )}</a>
        <a href="https://www.instagram.com/onchaindevbot/" target='_blank'><BiLogoInstagramAlt/> {animationIndex === 2 && (
        <TypedText 
          text="Instagram  " 
          typeSpeed={100} 
          start={true} 
          onComplete={handleAnimationComplete} 
        />
      )}</a>
        <a href="https://facebook.com/james.luiz.12/" target='_blank'><BsFacebook/> {animationIndex === 3 && (
        <TypedText 
          text="Facebook  " 
          typeSpeed={100} 
          start={true} 
          onComplete={handleAnimationComplete} 
        />
      )}</a>
        <a href="https://api.whatsapp.com/send?phone=2349152087229" target='_blank'><FaWhatsappSquare/> {animationIndex === 4 && (
        <TypedText 
          text="Whatsapp  " 
          typeSpeed={100} 
          start={true} 
          onComplete={handleAnimationComplete} 
        />
      )}</a>

      <a href="https://www.linkedin.com/in/eliezer-james-41ba0b252/" target='_blank'> <FaLinkedin />  {animationIndex === 5 && (
        <TypedText 
          text="Linkedin  "
          typeSpeed={120} 
          start={true} 
          onComplete={handleAnimationComplete} 
        />
      )}</a>
    </div>
  )
}

export default Socials