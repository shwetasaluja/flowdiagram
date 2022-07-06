import React from 'react';
import { useState } from "react";
import { Fab } from '@mui/material';
import Xarrow from 'react-xarrows';

const canvasStyle = {
  position: 'relative',
  height: '50vh',
  background: 'white',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
};

export default function Node(props) {
  const [step1, setStep1] = useState("");
  const [step2, setStep2] = useState("");
  const [step3, setStep3] = useState("");
  const [step4, setStep4] = useState("");

  return (
    <div style={canvasStyle} id="canvas">
      <Fab disableRipple disableFocusRipple  id={'comp1'} color="success" variant="extended" 
        onMouseEnter={() => {
          setStep1("Time: 2.10 hrs");
        }}
        onMouseLeave={() => {
          setStep1("");
        }}
      > Step 1 <br />
      {step1.length > 0 &&
        <div style={{ fontSize: "8px" }}>
          ({step1})
        </div>
      }
      </Fab>

      {/* <svg style={{width: '8%',verticalAlign: 'middle'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
        <path style={{fill: "#232326"}} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/>
      </svg> */}

      <Fab id={'comp2'} color="success" variant="circular" 
        onMouseEnter={() => {
          setStep2("Time: 4.05 hrs");
        }}
        onMouseLeave={() => {
          setStep2("");
        }}
      > Step 2
      {step2.length > 0 &&
        <div style={{ fontSize: "8px" }}>
          ({step2})
        </div>
      }
      </Fab>

      <Fab id={'comp3'} color="info" variant="circular"
        onMouseEnter={() => {
          setStep3("Time: 3.15 hrs");
        }}
        onMouseLeave={() => {
          setStep3("");
        }}
      > Step 3
      {step3.length > 0 &&
        <div style={{ fontSize: "8px" }}>
          ({step3})
        </div>
      }
      </Fab>

      <Fab id={'comp4'} color="info" variant="circular" 
        onMouseEnter={() => {
          setStep4("Time: 1.50 hrs");
        }}
        onMouseLeave={() => {
          setStep4("");
        }}
      > Step 4
      {step4.length > 0 &&
        <div style={{ fontSize: "8px" }}>
          ({step4})
        </div>
      }
      </Fab>

      <Xarrow start={'comp1'} end={'comp2'} />
      <Xarrow color="grey" start={'comp2'} end={'comp3'} />
      <Xarrow color="grey" start={'comp3'} end={'comp4'} />
    </div>
  )
}
