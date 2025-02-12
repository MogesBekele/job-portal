import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='container px-4 2xl:px-20 mx-auto my-20'>
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
