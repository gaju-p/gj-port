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
    review: 'Excellent work and Best Customer service appreciated.'
  },
  {
    avatar: Avt2,
    name: 'Suneet Sharma',
    review: 'sdfhkj dsjfhdk jdhfjd sddfkdj skhfiue seioe seue eihhrie iieri ehrheih ieri ereofe erhe ere nf i akhe kaehr.'
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
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className='client__name'>{name}</h5>
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