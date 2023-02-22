import React, { Component } from 'react'

export default class Login extends Component {
     render() {
          return (
               <div>
                    <h1>LogIn</h1>
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <button type='submit'>LogIn</button>
               </div>
          )
     }
}
