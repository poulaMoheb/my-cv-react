import React, { useState } from 'react'
import style from '../css/PersonalInformationView.module.css'

function PracticalExperience() {
    const [isViewed,setIsViewed]=useState(false)
    const [practicalExperience,setPracticalExperience]=useState({
          companyName:'',
          title:'',
          mainResponsibility:'',
          dateFrom:'',
          dateUntil:''

    })

  return (
    <div className={style.container}>
        
        <h2 onClick={()=>{setIsViewed(isViewed?false:true)}}>Practical Experience</h2>        
            
       
        { 
           isViewed&&
           <div>
               <div className={style.input}><label>Company Name</label>   
                    <input type='text' placeholder='Enter The Company  Name' value={practicalExperience.companyName} onChange={e =>{setPracticalExperience({...practicalExperience,companyName:e.target.value})}}></input>
                </div>
               <div className={style.input}>
                    <label>Title</label>   <input placeholder='Enter The Title' value={practicalExperience.title} onChange={e =>{setPracticalExperience({...practicalExperience,title:e.target.value})}}></input>
                </div>
               <div className={style.input}>
                    <label>Responsibility</label>   <input type='text' placeholder='Enter Your Responsibility' value={practicalExperience.mainResponsibility} onChange={e =>{setPracticalExperience({...practicalExperience,mainResponsibility:e.target.value})}}></input>
                </div>
               <div className={style.input}>
                <label>Date Started</label>   <input type='date'  value={practicalExperience.dateFrom} onChange={e =>{setPracticalExperience({...practicalExperience,dateFrom:e.target.value})}}></input>
                </div>
               <div className={style.input}>
                <label>Date Until</label>   <input type='date'  value={practicalExperience.dateUntil} onChange={e =>{setPracticalExperience({...practicalExperience,dateUntil:e.target.value})}}></input>
                </div>
            </div>
            
        }
        
    </div>
  )
}

export default PracticalExperience
