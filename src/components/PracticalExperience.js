import React from 'react'
import style from '../css/PersonalInformationView.module.css'

function PracticalExperience(props) {
    

  return (
    <div className={style.container}>
        
        <h2 onClick={()=>{props.setViewedNum(props.viewed[props.viewedNum]==='practicalExperience'?0:3)}}>Practical Experience</h2>        
            
       
        { 
           props.viewed[props.viewedNum]==='practicalExperience'&&
           <div>
               <div className={style.input}><label>Company Name</label>   
                    <input type='text' placeholder='Enter The Company  Name' value={props.practicalExperience.companyName} onChange={e =>{props.setPracticalExperience({...props.practicalExperience,companyName:e.target.value})}}></input>
                </div>
               <div className={style.input}>
                    <label>Title</label>   <input placeholder='Enter The Title' value={props.practicalExperience.title} onChange={e =>{props.setPracticalExperience({...props.practicalExperience,title:e.target.value})}}></input>
                </div>
               <div className={style.input}>
                    <label>Responsibility</label>   <input type='text' placeholder='Enter Your Responsibility' value={props.practicalExperience.mainResponsibility} onChange={e =>{props.setPracticalExperience({...props.practicalExperience,mainResponsibility:e.target.value})}}></input>
                </div>
               <div className={style.input}>
                <label>Date Started</label>   <input type='date'  value={props.practicalExperience.dateFrom} onChange={e =>{props.setPracticalExperience({...props.practicalExperience,dateFrom:e.target.value})}}></input>
                </div>
               <div className={style.input}>
                <label>Date Until</label>   <input type='date'  value={props.practicalExperience.dateUntil} onChange={e =>{props.setPracticalExperience({...props.practicalExperience,dateUntil:e.target.value})}}></input>
                </div>
            </div>
            
        }
        
    </div>
  )
}

export default PracticalExperience
