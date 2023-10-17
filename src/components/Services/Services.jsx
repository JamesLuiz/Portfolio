import React, {useEffect} from 'react'
import './Services.css'
import {BsShieldFillCheck} from 'react-icons/bs'
import Paragraphs from '../TextAnimation/Paragrapgh'
import Slide from 'react-reveal/Slide'

const Services = () => {

  const maintext = [
    "I Build and deploy secure smart contracts",
    "Proffesional and production ready",
    "I can build and deploy your Idea!"
  ];

  

  return (
    <Slide   duration={1500} left>
      <section id='services'>
      <h5>My expertise</h5>
      <h2>I can build and deploy</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Decentralised Applications</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Finance (DeFi) Applications.</p>

            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Decentralized Event Ticketing System</p>

            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Real Estate Applications</p>

            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Token Faucet</p>

            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Decentralized Voting System</p>

            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Digital Art Marketplace</p>

            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Personal Finance Tracker</p>

            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Decentralized Crowd Funding Platform</p>

            </li>
          </ul>
        </article>



        <article className="service">
          <div className="service__head">
            <h3>Smart Contracts</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Token Contracts</p>

            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Crowdsale Contracts (ICO websites)</p>

            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Decentralized Finance (DeFi) Contracts</p>

            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Oracle Contracts</p>

            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Escrow Contracts</p>

            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Supply Chain Contracts</p>

            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Insurance Contracts</p>

            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Identity Verification Contracts</p>

            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Websites</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>E-commerce Websites</p>

            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Blogging Websites</p>

            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Portfolio Websites</p>

            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Educational Websites.</p>

            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Business Websites</p>

            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Entertainment Websites</p>

            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Travel and Booking Websites</p>

            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Government and Institutional Websites</p>

            </li>
          </ul>
        </article>


        
      </div>
      <div className="mission">
        <Paragraphs text={maintext} typeSpeed={30}/>
      </div>
    </section>
    </Slide>
  )
}

export default Services