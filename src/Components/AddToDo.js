import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { InputLabel, Select, MenuItem, FormControl } from '@mui/material';

export default class AddToDo extends Component {
     render() {
          return (
               <div className="create-todo">
                    <h2>Create Todo</h2>
                    <TextField id="outlined-basic" label="Todo Title" variant="outlined" />
                    <TextField
                         id="outlined-multiline-static"
                         label="Todo Description"
                         multiline
                         rows={4}
                    />

                    <FormControl fullWidth>
                         <InputLabel id="demo-simple-select-label">Status</InputLabel>
                         <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Age"
                         >
                              <MenuItem value={"Todo"}>Todo</MenuItem>
                              <MenuItem value={"In Progress"}>In Progress</MenuItem>
                              <MenuItem value={"Done"}>Done</MenuItem>
                         </Select>
                    </FormControl>

                    <div className='action-wrapper'>
                         <Button variant="contained" color='success'>
                              Add
                         </Button>
                         <Button variant="outlined" color="success"
                              onClick={() => this.props.changetatus(false)}
                         >
                              CLOSE
                         </Button>
                    </div>

               </div>
          )
     }
}
