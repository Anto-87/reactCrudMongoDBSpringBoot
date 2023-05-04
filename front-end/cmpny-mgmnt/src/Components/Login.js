import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import React,{Component, useState} from 'react';
import Dashboard from './Dashboard';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Login(){

      // Created the user state variable for the login
      const [username, setUserName] = useState();
      const [password, setPassword] = useState();
    
      // Create the navigation from Login to DashBoard page 
      const navigate = useNavigate();

      // Login button handler to validate the user credentials 
      const handleSubmit = (e) => {

        if(username === 'admin'){
            navigate('/dashboard');
        }else{
          // Throw message for invalid credentials 
          toast.error(username + 'is not a valid user!!');
          e.preventDefault();
          }
      };
    
// Create the component for Login
  return (
      <div>
        <div>

         {/* Creating the App bar for the login page  */}
          <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
            Company Management
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Create Box container to place the login formItems */}
        <Box sx={{  
          marginTop: '10%',
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>

        <Box sx= {{ marginTop :1 }}>

        {/* FormItems used for Login Form */}
        <form onSubmit={handleSubmit}>
        <TextField id="userName"  required onChange={e=> setUserName(e.target.value)} label="userName" variant="outlined" sx= {{ width: 500, marginTop : 4, marginLeft:7}}/> <br />
        <TextField id="password"  required  onChange={e=> setPassword(e.target.value)} label="Password" type="password" variant="outlined" sx= {{ width: 500, marginTop : 4, marginLeft:7}} /> <br />
        <Button type="submit" variant="contained" sx= {{ width: 500, marginTop : 4 , marginLeft:7}}>Login</Button>
        </form> 
        </Box>
      </Box>
      </div>
      
      {/* Create the Toast container to thorow warning message  */}
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      </div>
  );
    
    }

