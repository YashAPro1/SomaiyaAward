import React from 'react'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import '../App.css';

export default function Multiprogressbar(props) {
    
  return (
    
    <div>
      <ProgressBar className='progbar' 

      
        percent={((props.steps -1)*100)/2}
        // filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
        filledBackground="linear-gradient(to right, #fc0303, #fc0303)"
      >
        <Step transition="scale">
          {({ accomplished ,index}) => (
            <div style={{padding:"22px"}} className={`step ${accomplished ? "completed" : ""}`}>
                0%
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished,index }) => (
            <div style={{padding:"22px"}} className={`step ${accomplished ? "completed" : ""}`}>
            50%
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished ,index }) => (
            <div style={{padding:"22px"}} className={`step ${accomplished ? "completed" : ""}`}>
            100%
            </div>
          )}
        </Step>
      </ProgressBar>
    </div>
  )
}
