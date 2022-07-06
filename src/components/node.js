import React from 'react';
import { useState } from "react";
import { Fab } from '@mui/material';
import Xarrow from 'react-xarrows';

const canvasStyle = {
  position: 'relative',
  height: '60vh',
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
      <Fab style={{ height: "22%", width: "11%" }} id={'comp1'} color="success" 
        onMouseEnter={() => {
          setStep1("Time: 2.10 hrs");
        }}
        onMouseLeave={() => {
          setStep1("");
        }}
      > Step 1 <br />
      {step1.length > 0 &&
        <div style={{ fontSize: "10px" }}>
          ({step1})
        </div>
      }
      </Fab>

      <Fab style={{ height: "22%", width: "11%" }} id={'comp2'} color="success" variant="circular" 
        onMouseEnter={() => {
          setStep2("Time: 4.05 hrs");
        }}
        onMouseLeave={() => {
          setStep2("");
        }}
      > Step 2
      {step2.length > 0 &&
        <div style={{ fontSize: "10px" }}>
          ({step2})
        </div>
      }
      </Fab>

      <Fab style={{ height: "22%", width: "11%" }} id={'comp3'} color="info" variant="circular"
        onMouseEnter={() => {
          setStep3("Waiting");
        }}
        onMouseLeave={() => {
          setStep3("");
        }}
      > Step 3
      {step3.length > 0 &&
        <div style={{ fontSize: "10px" }}>
          ({step3})
        </div>
      }
      </Fab>

      <Fab style={{ height: "22%", width: "11%" }} id={'comp4'} color="info" variant="circular" 
        onMouseEnter={() => {
          setStep4("Waiting");
        }}
        onMouseLeave={() => {
          setStep4("");
        }}
      > Step 4
      {step4.length > 0 &&
        <div style={{ fontSize: "10px" }}>
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
