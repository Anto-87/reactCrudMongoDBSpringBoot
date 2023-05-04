import React,{useState, state} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { Outlet, Link } from "react-router-dom";
import Add from './Add';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Dashboard()  {

  const navigate = useNavigate();

  // naviagte to add screen 
  function showAddScreen() {
    navigate('/add');

  } 

  // navigate to display screen 
  function showDisplayScreen() {
    navigate('/display');
  }

  return (
          <div>
          <div>
              {/* 
                Creating App bar with navigation of Add & display screen   
              */}
              <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                Company Management
                </Typography>
                <Typography variant="body1" style={{marginRight: 20 }}>
                <Button color="inherit" onClick={showAddScreen}>Add </Button>
                </Typography>
                <Typography variant="body2" style={{marginRight: 20 }}>
                <Button color="inherit" onClick={showDisplayScreen}> Display</Button>
                </Typography>
              </Toolbar>
            </AppBar>
        </div>
        </div>
          
  );
}