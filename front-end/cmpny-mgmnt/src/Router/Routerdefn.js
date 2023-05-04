import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Login from '../Components/Login';
import Add from '../Components/Add';
import Dashboard from '../Components/Dashboard';
import Display from '../Components/Display';

export default function Routerdefn() {
  // Create the Router definition for entire application 
  return (
   
    <Routes> 
          <Route path="/" element={<Display/>} />
          <Route path="/display" element={<Display/>} />
          <Route path="/add" element={<Add/>}/>
          <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>

  
  );
}
