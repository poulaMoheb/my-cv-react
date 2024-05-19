import React from 'react'
import SectionHeader from './SectionHeader'
import style from '../css/personalExperience.module.css'

function PersonalExperience() {
  return (
    <div>
      <SectionHeader name='Personal Experience'/>
      <h4 className={style.header}>Front-end Developer | Openner | Cairo, Egypt</h4>
      <p>2023 May - present</p>
      <p>
            As a frontend developer at Openner Company,
            my primary focus was on developing dynamic
            and interactive user interfaces using React.js. I
            collaborated closely with the design team and
            backend developers to create engaging web
            applications and ensure a seamless user
            experience.
      </p>
      <h4 className={style.header}>Bubble developer | Openner | Cairo, Egypt</h4>
      <p>2023 Mar - present</p>
      <p>
            As a bubble developer at Openner, my primary
            focus was on creating Venbase website. My duties
            was to work on the sprints from creating single
            pages until the testing phase.
      </p>
      <h4 className={style.header}>Front-end training | OneKonnect | Cairo, Egypt</h4>
      <p>2023 Mar - present</p>

      <h4 className={style.header}>Freelance Web Developer | Haroun const. co. | Cairo, Egypt</h4>
      <p>2020 Feb - 2020 May </p>
      <ul>
        <ol>Contributed to back-end experience and
            collaborated on APIs.</ol>
        <ol>Integrated advanced UI principles for user-centred design.</ol>
      </ul>
      
    </div>
  )
}

export default PersonalExperience
