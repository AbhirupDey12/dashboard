import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Faltu/MainPage';
import Login from './Faltu/Login';
import About from './Faltu/About';
import Header from './Faltu/Header';
import Footer from './Faltu/Footer';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

    return (
      
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element= {<MainPage />} ></Route>
            <Route path='about' element= {<About />} ></Route>
            <Route path='login' element= {<Login />} ></Route>
        </Routes> 
        <Footer />
      </BrowserRouter>

      // <div>
      //   <MainPage />
      //   <Login />
      //   <About />
      // </div>

    )
  }

}

export default App;

