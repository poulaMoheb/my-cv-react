import React from 'react'
import SectionHeader from './SectionHeader'
import style from '../css/personalExperience.module.css'
function Profile() {
  return (
    <div>
      <SectionHeader name='Profile'/>
      <p className={style.header}>Creative and detail-oriented front-end developer
with a passion for crafting visually stunning and
user-friendly websites.
Proficient in HTML, CSS, and JavaScript, with a
strong foundation in responsive design
principles. Experienced in collaborating with
cross-functional teams to deliver high-quality
projects on time. Eager to contribute my skills
and enthusiasm to a dynamic development team
dedicated to pushing boundaries and delivering
exceptional digital experiences.</p>
    </div>
  )
}

export default Profile
