import './index.css'

import React from 'react'



const projectsDetailsList = [
    {
        id: 1,
        title: 'Jobby App',
        link: 'http://jobsBox.ccbp.tech',
        points: [
            'Constructed an all-in-one job searching platform using React components, form inputs, and event handlers.',
            'Constructed an all-in-one job searching platform using React components, form inputs, and event handlers.',
            'Constructed an all-in-one job searching platform using React components, form inputs, and event handlers.'
        ]
    },
    {
        id: 2,
        
        title: 'Nxt Trendz (ECommerce Clone - Amazon, Flipkart)', link: 'https://NxtBuy.ccbp.tech', points: [
            'Implemented different pages and routes for Login, Products, and Product details using React Router components.',
            'Authenticated and authorized users by implementing login POST HTTP API calls and filters.',
            'Persisted user login state by storing JWT tokens in local storage and sending them in headers of further API calls.'
        ]
    },
    {
        id: 3,
        title: 'Nxt-Watch', link: 'https://nxt-watch-video-player-box.vercel.app', points: [
            'Developed a video playing app with trending and gaming videos using React.js and Redux for state management',
            'Implemented responsive design using HTML, CSS, JavaScript, and Bootstrap.',
            'Enhanced user experience with dynamic content loading and state management.'
        ]
    },
 
]
function Projects() {
  return (
    <section className='projects-bg-con'>
        <div>
            <h4 className='home-page-hea'>
              Projects
            </h4>
            <hr/>         
        </div>
        <div className='projects-details-con'>
              
                {projectsDetailsList.map((eachProject) => (
                      <div className='project-con'>
                  
                      <div className='project-top-con'>
                            <h5 className='project-title'>{eachProject.title}</h5>
                            <a href={eachProject.link} target='_blank'>{eachProject.link}</a>
                      </div>
                      <div className='project-bottom-con'>
                            <ul>
                                {eachProject.points.map((point) => (
                                    <li>{point}</li>
                                ))}
                            </ul>
                      </div>
                  </div>
                ))}
             
        </div>
    </section>
  )
}

export default Projects

/*
<div className='project-con'>
                  
                <div className='project-top-con'>
                    <h5 className='project-title'></h5>
                    <a href={} target='_blank' />
                </div>
                <div className='project-bottom-con'>
                      <ul>
                          {eachproject.points.map((point) => (
                              <li>{point}</li>
                          ))}
                      </ul>
                </div>
            </div>*/