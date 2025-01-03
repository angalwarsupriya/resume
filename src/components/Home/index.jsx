import Projects from '../reusable/Projects'
import Education from '../reusable/Education'
import './index.css'

import React from 'react'

function Home() {
  return (
    <section className='home-bar-bg-con'>
      <div className='border-con'>
        <div className='top-con'>
        <div className='titlebg-con'>
            <div className='round-con'>
              <img src='logo.png' alt='logo' className='logo'/>
          </div>
          <div className="title-con">
            <h1>Supriya <span>Angalwar</span></h1>
            <h3 className='role'>Frontend Developer</h3>
          </div>
        </div>

        <summary className='summary-con'>
          <h4 className='home-page-hea'>
            Summary
          </h4>
          <hr/>
          <p className='summary-p'>Front-end developer with experience in HTML 5, CSS 3, JavaScript, Bootstrap, and React.js. Proven ability to 
          build responsive and dynamic web applications with a focus on user experience and performance.</p>
        </summary>
         
        <Education/>
          <Projects />
        </div>
        <div className='img-con'>
          <img src='bottom-design.png' alt='bottom design' className='bottom-img'/>
        </div>
      </div>
    </section>
  )
}

export default Home