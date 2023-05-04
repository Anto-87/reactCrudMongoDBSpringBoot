import React from 'react'
import { 
    TextField, FormControlLabel, Select, 
    MenuItem, Button, Checkbox  } from '@mui/material';
import Box from '@mui/material/Box';  
import Dashboard from './Dashboard';

export default function Add(){
            return (
                        <div>
                        
                        {/* Include the DashBoard control to appear app header for navigation  */}
                        <Dashboard />
                        
                        {/* Create the Box container */}
                        <Box sx={{  
                        marginTop: '2%',
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                        }}>

                        <Box sx= {{ marginTop :1 }}>

                        {/* Create the formItem used for company managment info  */}
                        <form>
                        <TextField label="Preference Name" id="preferenceName" variant="outlined" sx= {{ width: 500, marginTop : 4, marginLeft:7}} /> <br/>
                        <TextField label="Description" id="description" variant="outlined" sx= {{ width: 500, marginTop : 4, marginLeft:7}} /> <br/>
                        <FormControlLabel sx= {{ width: 500, marginTop : 4, marginLeft:7}} control={<Checkbox/>} label="Enable" /> <br/>
                        <Select label="valueType" sx= {{ width: 500, marginTop : 4, marginLeft:7}}> 
                            <MenuItem value="String">String</MenuItem>
                            <MenuItem value="Int">Int</MenuItem>
                            <MenuItem value="Float">Float</MenuItem>
                            <MenuItem value="Boolean">Boolean</MenuItem>
                        </Select><br/>
                        <TextField label="Value" id="value" variant="outlined" sx= {{ width: 500, marginTop : 4, marginLeft:7}} /> <br/>
                        <Button variant="contained" color="primary" sx= {{ width: 500, marginTop : 4, marginLeft:7}}>
                            Submit
                        </Button>
                        </form>
                        
                        </Box>
                        </Box>
                    </div>

            );
}
