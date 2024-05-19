import React from 'react'
import  styles from '../css/personalInformation.module.css'
import { FaGithub } from "react-icons/fa";



function PersonalInformation() {
  return (
    <>
    <h1>
    Paula Moheb Haroun
    </h1>
    <h3 className={styles.workPosition}>Front-end Developer</h3>
    <div className='personal-details'>
    <div className={styles.personalDetailsItems}>
    <p><svg className={styles.icons} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000" ><path d="M440-42v-80q-125-14-214.5-103.5T122-440H42v-80h80q14-125 103.5-214.5T440-838v-80h80v80q125 14 214.5 103.5T838-520h80v80h-80q-14 125-103.5 214.5T520-122v80h-80Zm40-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm0-80Z"/></svg>    
    Cairo, Egypt</p>
    </div>  
    <div className={styles.personalDetailsItems}>
    <p><svg  className={styles.icons} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000" ><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>    
    poulamoheb12@gmial.com</p>
    </div>  
    <div className={styles.personalDetailsItems}>
    <p><svg  className={styles.icons} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000" ><path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-320h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z"/></svg> 
    +201287477770</p>
    </div>  
    <div className={styles.personalDetailsItems}>
    <p><FaGithub className={styles.icons}/><a href='https://www.Github.com/poulaMoheb'>
    Github.com/poulaMoheb</a></p>
    </div>  
    </div>
    </>
  )
}

export default PersonalInformation
