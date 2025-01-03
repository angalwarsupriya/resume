
import './index.css'

import React from 'react'


const educationDetailsList = [
    { id: 1, institueteName: ' Nxtwave Disruptive Technologies', des: 'Industry Ready Certification in Full-stack Development', date: "Aug 2022 - Ongoing", Grade: "" },
    { id: 2, institueteName: 'Krishnaveni Degree College, Adilabad', des: 'BSc (Bachelor of Science) ', date: "2021 - 2024 ", Grade: "Grade: 7.09 CGPA" },
    { id: 3, institueteName: 'Aditya Junior College, Adilabad', des: 'Intermediate ', date: "2019 - 2021", Grade: "Grade: 72.6% " },
    {id:4, institueteName:'Sri Saraswathi Shishu Mandir High School, Adilabad ', des:'Secondary School Of Certificate', date:"2018 - 2019 ", Grade:"Grade: 9.2 CGPA"}
]


function Education() {
  return (
    <section className='education-bg-con'>
        <div>
          <h4 className='home-page-hea'>
            Education
          </h4>
          <hr/>
          
        </div>
          <div className='education-details-con'>
              
            <ul>
                  {educationDetailsList.map((eachDetail) => (
                       <div className='education-row-con'>
                       <div className="left-deatils">
                             <h5>
                                {eachDetail.institueteName}
                             </h5>
                             <p className='educatio-details-p'>
                             {eachDetail.des}
                             </p>
                       </div>
                       <div className="right-details">
                             <h6 className='duration-hea'>
                                  {eachDetail.date}
                              </h6>
                              <p className='grade'>{eachDetail.Grade}</p>
                       </div>
                     </div>  
                  ))}
            </ul>
            
            
            
        </div>

    </section>
  )
}

export default Education

/*
   
            <div className='education-row-con'>
                <div className="left-deatils">
                      <h5>
                      Nxtwave Disruptive Technologies
                      </h5>
                      <p className='educatio-details-p'>
                      Industry Ready Certification in Full-stack Development 
                      </p>
                </div>
                <div className="right-details">
                      <h6 className='duration-hea'>
                          Aug 2022 - Ongoing
                      </h6>
                </div>
              </div>  */