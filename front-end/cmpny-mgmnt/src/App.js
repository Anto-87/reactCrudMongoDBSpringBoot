import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Routerdefn from './Router/Routerdefn';

export default function App() {
  return (
    <div>
      {/* Invoke the router definition specified in Routerdefn.js */}
      <Routerdefn />
    </div>
  )
}


