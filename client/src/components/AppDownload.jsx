import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Download Mobile App For Better Experience</h1>
          <div>
            <a href="">
              <img src={assets.play_store} alt="" />
            </a>
            <a href="">
              <img src={assets.app_store} alt="" />
            </a>
          </div>
        </div>
        <img src={assets.app_main_img} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
