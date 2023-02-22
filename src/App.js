import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainPage from './Components/MainPage';
import AddToDo from './Components/AddToDo';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalStatus: false
    }
  }

  changeModalStatus = (status) => {
    this.setState({
      modalStatus: status
    })
  } ;

  render() {

    return (

      <div className='App'>
        <Header changetatus = {this.changeModalStatus} />
        <MainPage />
        {
          this.state.modalStatus && (
            <div className="modal">
              <AddToDo  changetatus = {this.changeModalStatus}  />
            </div>
          )
        }
        <Footer />
      </div>

    );
  };

}

export default App;


































      // <BrowserRouter>
      //   <Header />
      //   <Routes>
      //       <Route path='/' element= {<MainPage />} ></Route>
      //       <Route path='about' element= {<About />} ></Route>
      //       <Route path='login' element= {<Login />} ></Route>
      //   </Routes>
      //   <Footer />
      // </BrowserRouter>

      // <div>
      //   <MainPage />
      //   <Login />
      //   <About />
      // </div>