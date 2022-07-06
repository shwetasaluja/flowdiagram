import React from 'react';
import Button from '@mui/material/Button';

export default function Node(props) {
  return (
    <div>
      <Button variant="contained"> Step 1 </Button>
      <Button variant="contained"> Step 2 </Button>
      <Button variant="contained" color="secondary"> Step 3 </Button>
      <Button variant="contained" color="secondary"> Step 4 </Button>
    </div>
  )
}
