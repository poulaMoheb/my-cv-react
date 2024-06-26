import React from 'react'
import style from '../css/nav.module.css'
import image from '../img/logo.png'
function Nav(props) {
  return (
    <div className={style.container}>
      <img src={image} className={style.image}></img>
            <div className={style.buttonsContainer}>
        <h3 onClick={()=>{props.setReset(true)}}>Reset</h3>
        <h3>Download</h3>
      </div>
    </div>
  )
}

export default Nav
