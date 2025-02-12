import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <img src={assets.logo} alt="" />
      <p>Copyright @MogesBekele | All right reserved</p>
      <div>
        <img width={38}  src={assets.facebook_icon} alt="" />
        <img width={38}  src={assets.twitter_icon} alt="" />
        <img width={38} src={assets.instagram_icon} alt="" />
      </div>
    </div>
  )
}

export default Footer
