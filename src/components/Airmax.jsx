import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footerlooker from './Footerlooker'
import footlooker from '../assets/images/foot-locker.png'
import slidestep from '../assets/images/sidestep.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Airmax = () => {
       const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
    <section className='overflow-hidden'>
        <Container>
            <p className='ff_poppins fw_500 fs_25'>You can buy the Nike Air Max 97 Men's Shoe - White here:</p>        

               <Slider {...settings} >
          <div className='pt-4 pb-5'>
            <Footerlooker footimage={footlooker}/>
          </div>
          <div className='pt-4 pb-5'>
            <Footerlooker footimage={slidestep}/>
          </div>
          <div className='pt-4 pb-5'>
            <Footerlooker footimage={footlooker}/>
          </div>
          <div className='pt-4 pb-5'>
            <Footerlooker footimage={slidestep}/>
          </div>
        </Slider>
        </Container> 
    </section>  
    </>
  )
}

export default Airmax