import Contact from '../reusable/Contact'
import Skills from '../reusable/Skills'
import './index.css'

import React from 'react'

function SideBar() {
  return (
    <aside className='side-bar-bg-con'>
      <div className='profile-img-con'>
        <img src='sweety (3).jpg' className='profile-img' alt='profile image'/>
      </div>

      <Contact />
      <Skills/>
    </aside>
  )
}

export default SideBar