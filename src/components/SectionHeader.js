import React from 'react'
import style from '../css/sectionHeader.module.css'

function SectionHeader(props) {
  return (
    <h3 className={style.main}>
            {props.name}
    </h3>
  )
}

export default SectionHeader
