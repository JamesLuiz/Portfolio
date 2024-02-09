import React, { useRef, useState, useEffect } from 'react';
import './Contact.css'
import {SiMinutemailer} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import { FaLinkedin } from "react-icons/fa"
import emailjs from 'emailjs-com'
import Paragraphs from '../TextAnimation/Paragrapgh';
import Slide from 'react-reveal/Slide'

const Contact = () => {
  const [showParagraphs, setShowParagraphs] = useState(false);

  const toggleParagraphs = () => {
    setShowParagraphs(!showParagraphs);
  };

  const maintext = [
    "I appreciate your getting touch!",
    "I'll respond to you shortly",
    "Thank you!"
  ];

  const form = useRef()
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_l1vlgqs', 'template_flceg6n', form.current, 'ywM0eCr5YF4oqnc3Q')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setShowParagraphs(true);
      })
      .catch((error) => {
        console.log('Failed to send email:', error);
      });
  
    e.target.reset();
  };
  

  
  return (
    <Slide  duration={1500} left>

    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <SiMinutemailer className='contact__option-icon'/>
            <h4>Email</h4>
            <a href="mailto:eliezerjames92@gmail.com">send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=2349152087229" target='_blank'>send a message</a>
          </article>
          <article className="contact__option">
            <BsTwitter className='contact__option-icon'/>
            <h4>Tweet</h4>
            <a href="https://twitter.com/eliezerjames92" target='_blank'>Folow me and get in touch</a>
          </article>
          <article className="contact__option">
            <FaLinkedin className='contact__option-icon'/>
            <h4>Connect on linkedin</h4>
            <a href="https://www.linkedin.com/in/eliezer-james-41ba0b252/" target='_blank'>Connect</a>
          </article>
        </div>

          
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='Your email' required />
          <input type="text" name='subject' placeholder='subject' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className="btn btn-primary"> Send message</button>
        </form>
      </div>

      <div className='mission'>{showParagraphs && (
          <Paragraphs text={maintext} typeSpeed={30} />
        )}
      </div>
    </section>

  </Slide>
  )
}

export default Contact