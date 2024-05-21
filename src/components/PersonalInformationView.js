import React from 'react'
import style from '../css/PersonalInformationView.module.css'

function PersonalInformationView(props) {
    

  return (
    <div className={style.container}>
        
        <h2 onClick={()=>{props.setViewedNum(props.viewed[props.viewedNum]==='personalData'?0:1)}}>Personal Data</h2>        
            
       
        { 
           props.viewed[props.viewedNum]==='personalData'&&
           <div>
               <div className={style.input}><label>Name</label>   <input type='text' placeholder='Enter Your Name' value={props.personalData.name} onChange={e =>{props.setPersonalData({...props.personalData,name:e.target.value})}}></input></div>
               <div className={style.input}><label>profession Title</label>   <input type='text' placeholder='Enter Title' value={props.personalData.profession} onChange={e =>{props.setPersonalData({...props.personalData,profession:e.target.value})}}></input></div>
               <div className={style.input}><label>Location</label>   <input placeholder='Enter Your Location' value={props.personalData.location} onChange={e =>{props.setPersonalData({...props.personalData,location:e.target.value})}}></input></div>
               <div className={style.input}><label>Mail</label>   <input type='email' placeholder='Enter Your E-mail' value={props.personalData.mail} onChange={e =>{props.setPersonalData({...props.personalData,mail:e.target.value})}}></input></div>
               <div className={style.input}><label>Phone Number</label>   <input type='number' placeholder='Enter Your Phone Number' value={props.personalData.phoneNum} onChange={e =>{props.setPersonalData({...props.personalData,phoneNum:e.target.value})}}></input></div>
            </div>
            
        }
        
    </div>
  )
}

export default PersonalInformationView
