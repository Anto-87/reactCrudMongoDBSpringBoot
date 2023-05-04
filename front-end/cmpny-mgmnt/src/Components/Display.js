import React, { useEffect,useState } from "react";
import Dashboard from "./Dashboard";
import axios from 'axios';
import MaterialTable from 'material-table';
import '../App.css';
import { alpha } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Display(){

  const url="http://localhost:8080/preference"

  const api = axios.create({
    baseURL: 'http://localhost:8080/preference'
  })

  const [cmpnyMgmnt, setCmpnyMgmnt] = useState([]);

  const columns = [
    { title: "Name", field: "name"},
    { title: "Description", field: "description" },
    { title: "Value Type", field: "valueType"},
    { title: "Value", field: "value"},
  ]

  const options = ["int", "String","boolean"];
  
  const getDetails = () => {
    axios.get('http://localhost:8080/preference')
    .then(res => {
      const pref = res.data;
      setCmpnyMgmnt(pref);
      console.log(pref);
    })
  }
  
  useEffect(() => {
    getDetails()
  }, [])



                return (
                      <div>
                        <div className="app"> 
                            <br/>
                            <br />
                              <MaterialTable
                              title="Company management"
                               columns={columns}
                              data={cmpnyMgmnt}
                              
                              editable={{
                                onRowUpdate: (newData, oldData) =>
                                  new Promise((resolve) => {
                                    fetch(url + "/", {
                                      method: "PUT",
                                      headers: {
                                        'Content-type': "application/json"
                                      },
                                      body: JSON.stringify(newData)
                                    }).then(resp => resp.json())
                                      .then(resp => {
                                        getDetails()
                                        resolve()
                                      })
                      
                                  }),
                                onRowAdd: (newData) =>
                                  new Promise((resolve) => {
                                    fetch(url, {
                                      method: "POST",
                                      headers: {
                                        'Content-type': "application/json"
                                      },
                                      body: JSON.stringify(newData)
                                    }).then(resp => resp.json())
                                      .then(resp => {
                                        getDetails()
                                        resolve()
                                      })
                                  }),
                                onRowDelete: (oldData) =>
                                  new Promise((resolve) => {
                                   
                                    fetch(url + "/" + oldData.name, {
                                      method: "DELETE",
                                      headers: {
                                        'Content-type': "application/json"
                                      },
                        
                                    }).then(resp => resp.json())
                                      .then(resp => {
                                        getDetails()
                                        resolve()
                                      })
                                  }),
                              }}
                               />
                              <br />
                      
                        </div>
                        </div>
                );
}