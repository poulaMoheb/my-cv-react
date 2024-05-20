import React, { useState } from 'react'
import style from '../css/PersonalInformationView.module.css'

function PersonalInformationView() {
    const [isViewed,setIsViewed]=useState(false)
    const [personalData,setPersonalData]=useState({
        name:'',
        profession:'',
        location:'',
        mail:'',
        phoneNum:'',
        gitHubURL:'',      
    })

  return (
    <div className={style.container}>
        
        <h2 onClick={()=>{setIsViewed(isViewed?false:true)}}>Personal Data</h2>        
            
       
        { 
           isViewed&&
           <div>
               <div className={style.input}><label>Name</label>   <input type='text' placeholder='Enter Your Name' value={personalData.name} onChange={e =>{setPersonalData({...personalData,name:e.target.value})}}></input></div>
               <div className={style.input}><label>Location</label>   <input placeholder='Enter Your Location' value={personalData.location} onChange={e =>{setPersonalData({...personalData,location:e.target.value})}}></input></div>
               <div className={style.input}><label>Mail</label>   <input type='email' placeholder='Enter Your E-mail' value={personalData.mail} onChange={e =>{setPersonalData({...personalData,mail:e.target.value})}}></input></div>
               <div className={style.input}><label>Phone Number</label>   <input type='number' placeholder='Enter Your Phone Number' value={personalData.phoneNum} onChange={e =>{setPersonalData({...personalData,phoneNum:e.target.value})}}></input></div>
            </div>
            
        }
        
    </div>
  )
}

export default PersonalInformationView
