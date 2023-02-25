import React, { Component } from 'react';
import { TextField } from '@mui/material';

export default class Header extends Component {

     render() {
          return (

               <div className='header'>

                    <h1 className='header-title'>Todo App</h1>

                    <input id="outlined-basic_" type='search'
                         placeholder='Search your todos here...'
                         onChange={(e) => this.props.changeSearchValue(e.target.value)}
                    />

                    <button
                         onClick={() => this.props.changeStatus(true)}
                         className='addButton'
                    >
                         +
                    </button>

               </div>

          );
     };
}
