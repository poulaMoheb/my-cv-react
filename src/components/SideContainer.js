import React from 'react'
import PersonalInformation from './PersonalInformation'
import style from '../css/SideContainer.module.css'
import Profile from './Profile'
import PersonalExperience from './PersonalExperience'
import EducationalExperience from './EducationalExperience'
import Publications from './Publications'
import Courses from './Courses'
import Projects from './Projects'
import Skills from './Skills'
import PersonalData from './PersonalData'


function SideContainer(props) {
  if(props.position){
  return (
    <div className={style.main}>
      <PersonalInformation/>
      <Profile/>
      <PersonalExperience/>
      <EducationalExperience/>
    </div>
  )}
  else if(!props.position){
    return(
      <div className={style.main2}>
        <Publications />
        <Courses/>
        <Projects/>
        <Skills/>
        <PersonalData/>
      </div>
    )
  }
}

export default SideContainer

