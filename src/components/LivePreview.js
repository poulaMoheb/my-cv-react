import React from 'react'
import style from '../css/LivePreview.module.css'

function LivePreview(props) {
    const education=props.educationalData   
    
  return (
      <div className={style.container}>
        <h2>{props.personalData.name}</h2>
        <h4>{props.personalData.profession}</h4>
        <div className={style.personal}>
            <p>{props.personalData.location}</p>
            <p>{props.personalData.mail}</p>  
            <p>{props.personalData.phoneNum}</p>  
        </div>
        
        <div className={style.section}>
            <h5>Educational Experience</h5>
             {education.map((item)=>
        (<div key={item.id}>
             <p><strong>{item.degree} at</strong>{item.schoolName} <br/>
             {item.year}</p>
           </div>)
     )} 
        </div>
    </div>
  )
}

export default LivePreview
