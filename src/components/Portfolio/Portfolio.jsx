import React, {useEffect} from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/metamask.png'
import IMG2 from '../../assets/Token.png'
import IMG3 from '../../assets/sweeper1.png'
import IMG4 from '../../assets/crypto.png'
import IMG5 from '../../assets/Nft.png'
import IMG6 from '../../assets/smartcontracts.png'
import Paragraphs from '../TextAnimation/Paragrapgh'
import Slide from 'react-reveal/Slide'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Metamask localhost integration',
    github: "https://github.com/JamesLuiz/connectWallet",
    demo: "https://dribbble.com/shots/20742260-Redesign-Wallet-dropdown-UI"
  },

  {
    id: 2,
    image: IMG2,
    title: 'Standard ERC20 Token',
    github: "https://github.com/JamesLuiz/oopenzippeline/tree/main/contracts",
    demo: "https://dribbble.com/shots/21119250-Crypto-App-Animation-Concept"
  },

  {
    id: 3,
    image: IMG3,
    title: 'Real Time Sweeper bot',
    github: "https://github.com/JamesLuiz/Sweeperbot",
    demo: "https://dribbble.com/shots/6902258-Bricsys"
  },
  {
    id: 4,
    image: IMG4,
    title: 'ICO website',
    github: "https://github.com/JamesLuiz/apps/tree/main/erc20-token",
    demo: "https://dribbble.com/shots/4584164-landing-page"
  },

  {
    id: 5,
    image: IMG5,
    title: 'NFT market place',
    github: "https://github.com/JamesLuiz/apps/tree/main/nftMarketplace-Subscription",
    demo: "https://dribbble.com/shots/16478433-Upstrack-Landing-Page-Animation"
  },
  {
    id: 6,
    image: IMG6,
    title: 'Best secured Smart Contracts',
    github: "https://github.com/JamesLuiz/Contracts/tree/main/defi-minimal/contracts",
    demo: "https://dribbble.com/shots/20761596-Smart-Contract-development-studio-redesign"
  }
]

// wait until all the HTML is loaded
const Portfolio = () => {
  const maintext = [
    "I like trying new things",
    "More projects coming soon!"
  ];

  return (

    <Slide  duration={1500} left >
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    <section id='portfolio'>
      <h5>My Web3 Projects</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container" >
        {
          data.map(({id, image, title, github, demo}) => {
           return (
              <article key={id} className="portfolio__item" >
                <div className="portfolio__item-image">
                  <img src={image} alt="wallet" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target='_blank'>Repository</a>
                  <a href={demo} className="btn btn-primary" target='_blank'>Design source</a>
                </div>
              </article>
            )
          })
        }
      </div>
      <div className="mission">
       <Paragraphs text={maintext} typeSpeed={30}/>
      </div>
    </section>
    </Swiper>
    </Slide>
  )
}

export default Portfolio