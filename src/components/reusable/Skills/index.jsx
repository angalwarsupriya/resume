import './index.css'
import React from 'react'

function Skills() {
  return (
    <div className='skills-bg-con'>
        <div className='hea-con'>
          <h2 className='.h2'>Skills</h2>
      </div>
      
        <div className='skills-desplay-con'>
          <div className='con'>
            <p className='skill-p'>
              Frontend development
            </p>
            <div className='percentage-row'>
              <div className='dot'></div>
            </div>
          
        </div>
        <div className='con'>
            <p className='skill-p'>
              Backend development
            </p>
            <div className='percentage-row'>
              <div className='dot'></div>
            </div>
          
        </div>
        <div className='con'>
            <p className='skill-p'>
              Design
            </p>
            <div className='percentage-row'>
              <div className='dot'></div>
            </div>
          
        </div>
           <div className='con'>
            <p className='skill-p'>
              Softskills
            </p>
            <div className='percentage-row'>
              <div className='dot'></div>
            </div>
          
          </div>
        </div>
    </div>
  )
}

export default Skills