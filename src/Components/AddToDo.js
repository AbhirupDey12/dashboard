import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { InputLabel, Select, MenuItem, FormControl } from '@mui/material';

export default class AddToDo extends Component {

     constructor(props) {
          super(props);
          this.state = {
               title: '',
               desc: '',
               status: ''
          }
     }

     createTodo = () => {
          this.props.createTodo(this.state.title, this.state.desc, this.state.status);
     };

     render() {
          return (
               <div className="create-todo">
                    <h2>Create Todo</h2>
                    <TextField id="outlined-basic" label="Todo Title" variant="outlined"
                         value={this.state.title}
                         onChange={(e) => this.setState({ title: e.target.value })}
                    />
                    <TextField
                         id="outlined-multiline-static"
                         label="Todo Description"
                         multiline
                         rows={4}
                         value={this.state.desc}
                         onChange={(e) => this.setState({ desc: e.target.value })}
                    />

                    <FormControl fullWidth>
                         <InputLabel id="demo-simple-select-label">Status</InputLabel>
                         <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Age"
                              value={this.state.status}
                              onChange={(e) => this.setState({ status: e.target.value })}
                         >
                              <MenuItem value={"Todo"}>Todo</MenuItem>
                              <MenuItem value={"In Progress"}>In Progress</MenuItem>
                              <MenuItem value={"Done"}>Done</MenuItem>
                         </Select>
                    </FormControl>

                    <div className='action-wrapper'>
                         <Button variant="contained" color='success'
                              onClick={this.createTodo}
                         >
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
