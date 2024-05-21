import React, { useState } from 'react'
import style from '../css/PersonalInformationView.module.css'

function EducationalInformation(props) {
    
  return (
       <div className={style.container}>
        
        <h2 onClick={()=>{props.setViewedNum(props.viewed[props.viewedNum]==='educationalData'?0:2)}}>Educational Information </h2>        
            
       
        { 
           props.viewed[props.viewedNum]==='educationalData'&&
           <div>
               <div className={style.input}><label>School Name</label>
                  <input type='text' placeholder='Enter Your School/University' value={props.educationalData.schoolName} onChange={e =>{props.setEducationalData({...props.educationalData,schoolName:e.target.value})}}></input>
                </div>
               <div className={style.input}><label>Degree</label>
                  <input type='text' placeholder='Enter Your Degree' value={props.educationalData.degree} onChange={e =>{props.setEducationalData({...props.educationalData,degree:e.target.value})}}></input>
                </div>
               <div className={style.input}><label>Location</label>
                  <input type='text' placeholder='Enter Your School/University location' value={props.educationalData.location} onChange={e =>{props.setEducationalData({...props.educationalData,location:e.target.value})}}></input>
                </div>
               <div className={style.input}><label>Year</label>
                  <input type='text' placeholder='Enter The Date' value={props.educationalData.year} onChange={e =>{props.setEducationalData({...props.educationalData,year:e.target.value})}}></input>
                </div>
            </div>
            
        }
        
    </div>
  )
}

export default EducationalInformation
