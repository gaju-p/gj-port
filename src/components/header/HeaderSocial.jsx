import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr'
import {GrInstagram} from 'react-icons/gr'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank" rel="noopener"><BsLinkedin /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener"><GrFacebook /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener"><GrInstagram /></a>
    </div>
  )
}

export default HeaderSocial