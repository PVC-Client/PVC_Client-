import React from 'react'
import './registration.css'
import apiData from '../registration/apidata'
import { Item1 } from '../gst/Gst'
function Registration() {
  return (
    <div className="registration-main">

            <div className="registration-heading">
                <h3>Registration</h3>
                <div className="registration-h3-underline">
                 
                </div>

            </div>
            <div className="registration pt-3">

                <Item1 data={apiData[0]}></Item1>
                <Item1 data={apiData[1]} type="reverse"></Item1>
                <Item1 data={apiData[2]}></Item1>
                <Item1 data={apiData[3]} type="reverse"></Item1>
                <Item1 data={apiData[4]}></Item1>
                
                
            </div>

          


        </div>
  )
}

export default Registration