import React from 'react';
import { useState } from "react";
import { Fab } from '@mui/material';
import Xarrow from 'react-xarrows';

export default function Node(props) {
  const itemsArray = [
    { id: '1', name: 'Step 1', duration: 'Time: 2.10 hrs' },
    { id: '2', name: 'Step 2', duration: 'Time: 1.50 hrs' },
    { id: '3', name: 'Step 3', duration: 'Time: 1.10 hrs' },
    { id: '4', name: 'Step 4', duration: 'Waiting' },
    { id: '5', name: 'Step 5', duration: 'Waiting' }
  ]

  const [stepInfo, setStepInfo] = useState("");

  const mouseEnter = (data) => {
    setStepInfo(data.id);
    console.log(stepInfo, data, typeof stepInfo);
  }
  const mouseLeave = (data) => {
    setStepInfo(""); 
  }

  return (
    <>
      {itemsArray.map(item => (
        // <li key={item.id}> {item.name}</li>
        <>
          <Fab id={item.id} style={{ height: "22%", width: "11%" }} 
          color={item.duration === 'Waiting' ? "info" : "success" }
            onMouseEnter={
              () => {
                mouseEnter(item);
              }}
            onMouseLeave={
              () => {
                mouseLeave(item);
              }} > 
            Step {item.id} <br />
            
            { item.id === stepInfo && 
              (item.duration)
            }
          </Fab>

          { item.id !== '1' && 
            <Xarrow start={String(parseInt(item.id)-1)} end={item.id} />
          }
        </>
        ))}
    </>
  )
}
