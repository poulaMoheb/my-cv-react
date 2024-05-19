import React from 'react'
import SectionHeader from './SectionHeader'
import style from '../css/projects.module.css'
function Projects() {
  return (
    <div className={style.main}>
      <SectionHeader name='Projects'/>
      <h4>Graduation Project</h4>
      <h6>Workout Assistant</h6>
      <p>A tracker of body motion during weightlifting exercises and detection of wrong
        movements to help beginners master the workout technique.
        I was responsible for the database and the connection between the system
        (Python) and the Kinect camera (C).</p>
        <h4>VenBase</h4>
        <p>Platform designed to facilitate the interaction between aspiring entrepreneurs
        and investors, Participants present their business ideas to the Venbase, who
        evaluate the proposals based on their potential for success. The system enables
        entrepreneurs to secure funding and strategic partnerships while offering viewers
        an engaging showcase of entrepreneurship, investment decision-making, and the
        pursuit of business opportunities.</p>
    </div>
  )
}

export default Projects
