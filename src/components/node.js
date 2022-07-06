import React from 'react';
// import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
// import SimpleLineIcon from 'react-simple-line-icons';
// import LineIcon from "react-lineicons";
// import line from '../line.png';
// import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

export default function Node(props) {
  return (
    <div>
      {/* <div className="mydiv"> */}
      {/* <HorizontalRuleIcon /> */}
        <Fab color="primary" variant="extended">
          {/* <NavigationIcon sx={{ mr: 1 }} /> */}
          Step 1
        </Fab>
        <svg style={{width: '8%',verticalAlign: 'middle'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
          <path style={{fill: "#232326"}} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/>
        </svg>
        {/* <img src={line} alt="----" /> */}
        {/* <SimpleLineIcon name="bulb" /> */}
        {/* <LineIcon name="spinner" /> */}
        {/* <span className="line"></span> */}
      {/* </div> */}
      <Fab color="primary" variant="extended"> Step 2 </Fab>
      <svg style={{width: '8%',verticalAlign: 'middle'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
        <path style={{fill: "#232326"}} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/>
      </svg>
      <Fab color="secondary" variant="extended"> Step 3 </Fab>
      <svg style={{width: '8%',verticalAlign: 'middle'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
        <path style={{fill: "#232326"}} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/>
      </svg>
      <Fab color="secondary" variant="extended"> Step 4 </Fab>
      {/* <Button variant="contained" rounded="true" color="primary"> Step 1 </Button> */}
      {/* <Button variant="contained" rounded="true" color="secondary"> Step 4 </Button> */}
    </div >
  )
}
