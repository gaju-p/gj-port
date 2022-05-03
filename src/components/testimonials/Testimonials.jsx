import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/uzair-mirza.jpg'
import Avt2 from '../../assets/avatar1.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: Avt1,
    name: 'Uzair Mirza',
    designation: 'Business Owner',
    review: 'Excellent work and Best Customer service appreciated.'
  },
  {
    avatar: Avt2,
    name: 'Suneet Sharma',
    designation: 'Business Owner',
    review: 'Gajanan is best at his work and completed my requirements on time and much recommeded for his services.'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review, designation}, index) => {
            return(
              <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className='client__name'>{name} | {designation}</h5>
              <small className='client__review'>{review}</small>
              </SwiperSlide> 
            )
          })
        }  
      </Swiper>
    </section>
  )
}

export default Testimonials