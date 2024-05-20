import React, { useState } from 'react'
import style from '../css/PersonalInformationView.module.css'

function EducationalInformation() {
    const [isViewed,setIsViewed]=useState(false)
    const [educationalData,setEducationalData]=useState([{
        schoolName:'',
        degree:'',
        location:'',
        year:0
    }])
  return (
       <div className={style.container}>
        
        <h2 onClick={()=>{setIsViewed(isViewed?false:true)}}>Educational Information </h2>        
            
       
        { 
           isViewed&&
           <div>
               <div className={style.input}><label>School Name</label>
                  <input type='text' placeholder='Enter Your School/University' value={educationalData.schoolName} onChange={e =>{setEducationalData({...educationalData,schoolName:e.target.value})}}></input>
                </div>
               <div className={style.input}><label>Degree</label>
                  <input type='text' placeholder='Enter Your Degree' value={educationalData.degree} onChange={e =>{setEducationalData({...educationalData,degree:e.target.value})}}></input>
                </div>
               <div className={style.input}><label>Location</label>
                  <input type='text' placeholder='Enter Your School/University location' value={educationalData.location} onChange={e =>{setEducationalData({...educationalData,location:e.target.value})}}></input>
                </div>
               <div className={style.input}><label>Year</label>
                  <input type='text' placeholder='Enter The Date' value={educationalData.year} onChange={e =>{setEducationalData({...educationalData,year:e.target.value})}}></input>
                </div>
               
            </div>
            
        }
        
    </div>
  )
}

export default EducationalInformation
