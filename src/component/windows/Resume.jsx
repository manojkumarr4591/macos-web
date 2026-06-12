import React from 'react'
import MacWindow from './MacWindow'
import "./Resume.scss"

const Resume = () => {
  return (
    <MacWindow>
        <div className="resume-window">
        <embed src='/manoj.pdf' frameBorder="0"></embed>
        </div>

    </MacWindow>
  )
}

export default Resume