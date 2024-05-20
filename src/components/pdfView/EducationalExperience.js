import React from 'react'
import SectionHeader from './SectionHeader'
import style from '../../css/personalExperience.module.css'
function EducationalExperience() {
  return (
    <div>
        <SectionHeader name='Educational Experience'/>
        <h4 className={style.header}>Bachelor of Science in Computer Science</h4>
        <h5>Misr international university, Cairo ,Egypt
        2020</h5>
    </div>
  )
}

export default EducationalExperience
