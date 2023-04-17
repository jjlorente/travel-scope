import React, { useEffect } from 'react'
import './main.css'
import img2 from '../../Assets/image2.jpg'
import img3 from '../../Assets/image3.jpg'
import img4 from '../../Assets/image4.jpg'
import img5 from '../../Assets/image5.jpg'
import img6 from '../../Assets/image6.jpg'
import img7 from '../../Assets/image7.jpg'
import img8 from '../../Assets/image8.jpg'
import img9 from '../../Assets/image9.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsClipboardCheck} from 'react-icons/bs'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: img3,
    destTitle:'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '700$',
    description: 'Located in New Zealand, Bora Bora is a stunning island paradise that offers a perfect blend of luxury and adventure. With its crystal clear waters, white sandy beaches, and luxurious resorts, Bora Bora is the perfect destination for honeymooners or anyone looking to relax and unwind.'
  },

  {
    id:2,
    imgSrc: img4,
    destTitle:'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '600$',
    description: 'Machu Picchu is one of the most iconic travel destinations in Peru, known for its rich history and breathtaking views. This ancient Incan citadel sits high in the Andes Mountains and offers visitors a chance to explore the ruins of this once great civilization.'
  },
  {
    id:3,
    imgSrc: img5,
    destTitle:'Great Barrier Reef',
    location: 'Autralia',
    grade: 'CULTURAL RELAX',
    fees: '800$',
    description: 'Located in Australia, the Great Barrier Reef is one of the most spectacular natural wonders of the world. With its vibrant coral reefs and diverse marine life, this is the perfect destination for snorkeling, scuba diving, or simply taking a boat tour to explore this underwater wonderland.'
  },
  {
    id:4,
    imgSrc: img2,
    destTitle:'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '400$',
    description: 'Nestled in the heart of Turkey, Cappadocia is a magical destination that is famous for its fairy chimneys, underground cities, and hot air balloon rides. This unique landscape is a must-visit for anyone interested in history, culture, or adventure.'
  },
  {
    id:5,
    imgSrc: img6,
    destTitle:'Mexico',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '1100$',
    description: 'Mexico is a vibrant country that offers a perfect blend of culture, history, and natural beauty. From the stunning beaches of Cancun and Cozumel to the ancient ruins of Chichen Itza and Tulum, Mexico is a destination that has something for everyone.'
  },
  {
    id:6,
    imgSrc: img7,
    destTitle:'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '850$',
    description: 'Located in Italy, Cinque Terre is a charming seaside village that is known for its colorful houses, picturesque streets, and breathtaking views of the Mediterranean Sea. This is the perfect destination for anyone looking to escape the hustle and bustle of city life and immerse themselves in the beauty of the Italian coastline.'
  },
  {
    id:7,
    imgSrc: img8,
    destTitle:'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '900$',
    description: 'Located in India, the Taj Mahal is one of the most iconic and beautiful buildings in the world. This stunning white marble mausoleum was built in the 17th century by the Mughal emperor Shah Jahan as a tribute to his wife, Mumtaz Mahal, and has since become a symbol of love and romance.'
  },
  {
    id:8,
    imgSrc: img9,
    destTitle:'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '740$',
    description: 'Angkor Wat is a magnificent temple complex located in Cambodia and is one of the largest religious monuments in the world. Built in the early 12th century, this temple complex is a stunning example of Khmer architecture and is a must-visit destination for anyone interested in history or culture.'
  },
]

const Main = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <BsClipboardCheck className='icon'/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main