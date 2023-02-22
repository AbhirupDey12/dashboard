import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
     return (
          <div className='header'>
               <button>
                    <Link to={"/"} >Home</Link>
               </button>
               <button>
                    <Link to={"/login"} >Login</Link>
               </button>
               <button>
                    <Link to={"/about"} >About</Link>
               </button>
          </div>
     )
}

export default Header;