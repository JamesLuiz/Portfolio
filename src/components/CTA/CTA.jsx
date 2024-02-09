import React from 'react'
import './CTA.css'
import CV from '../../assets/CV.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>View my CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Connect</a>
    </div>
  )
}

export default CTA