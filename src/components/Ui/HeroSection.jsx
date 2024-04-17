import React, {useEffect, useRef, useState} from 'react'

import { Swiper, SwiperSlide,  } from "swiper/react";
import './Hero-section.css'
import {Container, Row, Col}  from 'reactstrap'
import{Link} from 'react-router-dom'
import heroImage from '../../assets/img/new_hero.webp'
import heroImage1 from '../../assets/img/new1.webp'
import heroImage2 from '../../assets/img/new3.webp'
import heroImage3 from '../../assets/img/nft51.webp'
import heroImage4 from '../../assets/img/nft101.webp'
import heroImage5 from '../../assets/img/nft7.jfif'
import { EffectCards,Autoplay, } from "swiper";

import  Aos  from 'aos';
import 'aos/dist/aos.css'



function HeroSection() {
  useEffect(() =>{
    Aos.init({duration:3000})
  },[])


  
  return (
   

   <section className='hero__section overflow-hidden'>
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className='hero__content'>
            <h4 className='text-light' data-aos='fade-left'data-aos-delay="50">Taskmint market built over Tezos</h4>
            <h1>Discover the Most Premium, Unique and <span className='nft__color'>Exclusive Project Collections</span> for your requirements.</h1>
            <p>
                Taskmint is one of the world's largest marketplace where you can buy &amp; 
                trade a lot of top projects.</p>

              <div className="hero__btn d-flex align-items-center gap-4">
              <button className='hero-btn1 d-flex align-items-center gap-2'><Link to='/market'>Explore<i class="ri-rocket-line"></i></Link></button>
              <button className='hero-btn2 d-flex align-items-center gap-2'><Link to='/create'>Create<i class="ri-arrow-right-up-fill"></i></Link></button>
          </div>
              </div>
        </Col>
        <Col lg='6' md='6'>
          <div className="hero-img">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[EffectCards, Autoplay]}
            className="mySwiper"
          >
          <SwiperSlide>  <img src={heroImage} alt='hero' width='400px' /></SwiperSlide>
        <SwiperSlide>  <img src={heroImage1} alt='hero' width='400px' /></SwiperSlide>
        <SwiperSlide>  <img src={heroImage2} alt='hero' width='400px' /></SwiperSlide>
        <SwiperSlide>  <img src={heroImage3} alt='hero' width='400px' /></SwiperSlide>
        <SwiperSlide>  <img src={heroImage4} alt='hero' width='400px' /></SwiperSlide>
        <SwiperSlide>  <img src={heroImage5} alt='hero' width='400px' /></SwiperSlide>

      </Swiper>
          
          </div>
        </Col>
      </Row>
    </Container>
   </section>
  )
}

export default HeroSection