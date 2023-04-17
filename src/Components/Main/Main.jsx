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
    description: 'The epitome of romance, Bora Bora is one of the best travel destinatios in the World. This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id:2,
    imgSrc: img4,
    destTitle:'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '600$',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinatios in the World. This place is known for its luxurious stays and adventurous activities.'
  },
  {
    id:3,
    imgSrc: img5,
    destTitle:'Great Barrier Reef',
    location: 'Autralia',
    grade: 'CULTURAL RELAX',
    fees: '800$',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinatios in the World. This place is known for its luxurious stays and adventurous activities.'
  },
  {
    id:4,
    imgSrc: img2,
    destTitle:'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '400$',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinatios in the World. This place is known for its luxurious stays and adventurous activities.'
  },
  {
    id:5,
    imgSrc: img6,
    destTitle:'Mexico',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '1100$',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinatios in the World. This place is known for its luxurious stays and adventurous activities.'
  },
  {
    id:6,
    imgSrc: img7,
    destTitle:'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '850$',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinatios in the World. This place is known for its luxurious stays and adventurous activities.'
  },
  {
    id:7,
    imgSrc: img8,
    destTitle:'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '900$',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinatios in the World. This place is known for its luxurious stays and adventurous activities.'
  },
  {
    id:8,
    imgSrc: img9,
    destTitle:'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '740$',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinatios in the World. This place is known for its luxurious stays and adventurous activities.'
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