import React from 'react'
import style from '../css/sectionHeader.module.css'

function SectionHeader(props) {
  return (
    <div className={style.main}>
      {props.name}
    </div>
  )
}

export default SectionHeader
