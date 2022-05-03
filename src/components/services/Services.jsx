import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import brochure from '../../assets/cv.pdf'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>WordPress Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Responsive Web design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Awesome design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Easy to customize</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>E-Commerce websites</p>
            </li>
          </ul>
        </article>

        {/* END OF SERVICE1 */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Unique design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Mobile friendly</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Static & dynamic websites</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Responsive design</p>
            </li>
          </ul>
        </article>

        {/* END OF SERVICE2 */}

        <article className='service'>
          <div className="service__head">
            <h3>Digital Marketing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Unique strategy</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Generate new leads</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Advertise on social media</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Re-target existing customers</p>
            </li>
          </ul>
        </article>

        {/* END OF SERVICE3 */}
      </div>

      <div className='brochure'>
          <a href={brochure} className='btn btn-primary'>Download Brochure</a>
      </div>
    </section>
  )
}

export default Services