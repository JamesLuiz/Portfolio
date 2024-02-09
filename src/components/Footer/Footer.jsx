import React from 'react'
import './Footer.css'
import {BsTwitter} from 'react-icons/bs'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {

  
  return (
    <footer id='footer'>

      <ul className='permalinks'>
        <li><a href=""></a></li>
        <li><a href="#" >Home</a></li>
        <li><a href="#about" >About me</a></li>
        <li><a href="#experience" >Skills</a></li>
        <li><a href="#services" >Services</a></li>
        <li><a href="#portfolio" >Projects</a></li>
        <li><a href="#contact" >Contact</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href="https://facebook.com/james.luiz.12/" target='_blank'><BsFacebook/></a>
        <a href="https://www.instagram.com/onchaindevbot/" target='_blank'><BiLogoInstagramAlt/></a>
        <a href="https://twitter.com/eliezerjames92" target='_blank'><BsTwitter/></a>
      </div>
    </footer>
  )
}

export default Footer