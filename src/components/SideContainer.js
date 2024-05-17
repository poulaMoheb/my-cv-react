import React from 'react'
import PersonalInformation from './PersonalInformation'
import SectionHeader from './SectionHeader'
import style from '../css/SideContainer.module.css'


function SideContainer() {
  return (
    <div className={style.main}>
      <PersonalInformation/>
      <SectionHeader name='Educational Experience'/>
    </div>
  )
}

export default SideContainer

