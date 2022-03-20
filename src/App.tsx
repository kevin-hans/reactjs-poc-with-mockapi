import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import DataTable from './components/DataTable'
import QuiltedImageList from './components/PhotoGrid'
import Box from '@mui/material/Box';

function App() {
  // return <Button variant="contained">Hello World</Button>;
  return (
    <Box sx={{ flexDirection: 'column' }}>
      <Box sx={{ width: '90%', margin: 'auto' }}>
      <img alt="logo" style={{ height: 50, width: 50}} src={process.env.PUBLIC_URL+"logo192.png"} />
      </Box>
      <Box><QuiltedImageList></QuiltedImageList></Box>
      <Box><DataTable></DataTable></Box>
    </Box>
    );
}

export default App;
