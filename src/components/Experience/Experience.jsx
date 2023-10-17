import React, {useEffect} from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import Paragraphs from '../TextAnimation/Paragrapgh'
import Slide from 'react-reveal/Slide'
import { useInView } from 'react-intersection-observer';
const Experience = () => {

  const maintext = [
    "I work professionally with my tools + research",
    "How can I help your Business?"
  ];
  

  return (
    <Slide  duration={1500} left>
    <section id='experience'>
     <h5>My Tech Stack</h5>
     <h2>Tools</h2>
     <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Decentralised App Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Python</h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>CSS</h4>
              <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Tailwind CSS</h4>
              <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Swiper js</h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Typedjs</h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>NEXT js</h4>
              <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Node js</h4>
              <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Mongo DB</h4>
              <small className="text-light"> intermediate </small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Web3 js</h4>
              <small className="text-light"> Experienced </small>
              </div>
            </article>
            
          </div>
        </div>
        <div className="experience__backend">
          <h3>Blockchain Technology</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Solidity</h4>
              <small className="text-light"> Experienced </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Ethers js</h4>
              <small className="text-light"> Experienced </small>
              </div>
            </article>
            
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Open zeppeline</h4>
              <small className="text-light"> Experienced </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>ChainLink Oracle</h4>
              <small className="text-light"> Experienced </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Infura</h4>
              <small className="text-light"> Experienced </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Alchemy</h4>
              <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Quicknode</h4>
              <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Vigil</h4>
              <small className="text-light"> Experienced </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Hardhat</h4>
              <small className="text-light"> Experienced </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Remix</h4>
              <small className="text-light"> Experienced </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Metamask</h4>
              <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Research</h4>
              <small className="text-light"> Versatile </small>
              </div>
            </article>
          </div>

          
        </div>
        <div className="experience__backend">
          <h3>Version Control</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div><h4>Git</h4>
              <small className="text-light"> Experienced </small>
              </div>
            </article>
            
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>GitHub</h4>
              <small className="text-light"> Experienced </small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Operating System</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Windows</h4>
              <small className="text-light"> Experienced </small>
              </div>
            </article>
            
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Linux</h4>
              <small className="text-light"> Comfortable </small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Languages</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>English</h4>
              <small className="text-light"> Fluent </small>
              </div>
            </article>
            
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Chinese</h4>
              <small className="text-light"> intermediate </small>
              </div>
            </article>
          </div>
        </div>
     </div>
     <div className="mission">
      <Paragraphs text={maintext} typeSpeed={30}/>
     </div>
    </section>
    </Slide>
  )
}

export default Experience