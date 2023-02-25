import React, { Component } from 'react';

export default class Header extends Component {
     render() {
          return (

               <div className='header'>

                    <h1 className='header-title'>Todo App</h1>

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
