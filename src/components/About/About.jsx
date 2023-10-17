import React, {useEffect, useRef, useState} from 'react'
import './About.css'
import Me from '../../assets/slide2.png'
import {VscMap} from 'react-icons/vsc'
import {VscFeedback} from 'react-icons/vsc'
import {VscRocket} from 'react-icons/vsc'
import Slide from 'react-reveal/Slide'

const About = () => {

  

  // const [show, setShow] = useState(false);

  // useEffect(() => {
  //   let section = document.getElementById('about');
  //   const topPosition = section.getBoundingClientRect().top;
  //   const onScroll = () => {
  //     const scrollPosition = window.scrollY + window.innerHeight;
  //     if (topPosition < scrollPosition) {
  //       setShow(true);
  //     }
  //     else {
  //       setShow(false);
  //     }
  //   };

  //   window.addEventListener('scroll', onScroll);
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, []);

  return (


    <Slide  duration={1500} left >
      <section id="about">
      <h5>Get To Know More</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="Me"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <VscMap className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ years working experience</small>
            </article>


            <article className="about__card">
              <VscFeedback className="about__icon"/>
              <h5>clients service</h5>
              <small>Delivers Professional Projects on time</small>
            </article>


            <article className="about__card">
              <VscRocket className="about__icon"/>
              <h5>Projects</h5>
              <small>10+ professional web3.0 projects and still building!</small>
            </article>
          </div>
          <p style={{color: 'white', backgroundColor: '#2c2c6c', textAlign: 'center', padding: '2rem', borderRadius: '2rem', fontSize: '0.8rem'}}>
              I am a Blockchain developer with strong
              passion for blockchain technologies and
              innovations. I understand
              blockchain principles and cryptographic protocols, I
              build decentralized applications,
              I'm also proficient in
              programming languages commonly used in
              blockchain development and Dapp integrations, 
              I work well with EVM compatible platforms,
              and I'm experienced with web
              development frameworks and technologies.
              Let me know how my skills can contribute to the growth of your company.
          </p>
            
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
    </Slide>
    
  )
}

export default About