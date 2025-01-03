import './index.css'
import React from 'react'


const skillsDetailsList = [
  {
    topic: 'Frontend', sliiks: [ 'HTML', 'CSS', 'Bootstrap', 'JavaScript' ,'Reactjs' ]
    
  },
  { topic: 'Backend', sliiks: ['NodeJS', 'Express', 'SqLite'] },
  { topic: 'Other Skills', sliiks: ['Redux', 'context API'] },
  { topic: 'Tools', sliiks: ["Git hub", "VS code", 'Webpack'] }
]
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
              <div className='dot' style={{marginLeft:"90%"}}></div>
            </div>
          
        </div>
        <div className='con'>
            <p className='skill-p'>
              Backend development
            </p>
            <div className='percentage-row'>
              <div className='dot' style={{marginLeft:"70%"}}></div>
            </div>
          
        </div>
        <div className='con'>
            <p className='skill-p'>
              Design
            </p>
            <div className='percentage-row'>
              <div className='dot' style={{marginLeft:"40%"}}></div>
            </div>
          
        </div>
           <div className='con'>
            <p className='skill-p'>
              Softskills
            </p>
            <div className='percentage-row'>
              <div className='dot' style={{marginLeft:"80%"}}></div>
            </div>
          
          </div>
      </div>
      <div className='individual-skills-con'>
        <ul>
        {skillsDetailsList.map((each) => (
          <li className='skill-row'>
            <h6 className='topic' >{each.topic}</h6>
            <ul>
              {each.sliiks.map((skill) => (
                <li className='skill-name'>{skill}</li>
              ))}
            </ul>
          </li>
        ))}
          </ul>
      </div>
    </div>
  )
}

export default Skills