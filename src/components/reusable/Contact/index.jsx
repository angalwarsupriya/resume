import './index.css'

import React from 'react'

import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";


function Contact() {
  return (
    <div className='contact-bg-con'>
        <div className='hea-con'>
          <h2 className='.h2'>Contact</h2>
        </div>
          
        <div className='contact-info-con'>
            <div className='row'>
              <MdOutlineMailOutline className='icon'/>
              <a className='p'>angalwarsupriya@gmail.com</a>
            </div>
              
            <div className='row'>
               <IoCallOutline className='icon'/>
              <a className='p'>(91)+ 9676069482</a>
            </div>
              
            <div className='row'>
              <CiLinkedin  className='icon-linkdin'/>
              <a className='p'>linkedin.com/in/supriyaangalwar/</a>
            </div>
              
        </div>
    </div>
  )
}

export default Contact