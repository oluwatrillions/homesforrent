import React from 'react'
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
      <div className='footer'>
          <div className='footer-container'>
              <div className='copyright'>
                <MdOutlineCopyright />
                <h4>2023</h4>      
              </div>
              <div>
                  <h4>Made with love and NextJS</h4>
              </div>
            </div>       
    </div>
  )
}

export default Footer