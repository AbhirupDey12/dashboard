import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainPage from './Components/MainPage';
import AddToDo from './Components/AddToDo';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      modalStatus: false,
      todos: [] ,
      currentEditModal : {} ,
    }
  }

  changeModalStatus = (status , id ) => {
    this.setState({
      modalStatus: status ,
      currentEditModal : this.state.todos.filter((ele) => ele.id === id)[0] 
    })
  };

  createTodo = (name, description, status) => {
    this.state.todos.push({
      id: Date.now(),
      name: name,
      description: description,
      status: status
    });
    this.setState({ todos: this.state.todos, modalStatus: false });
  };

  deleteTodo = (id) => {
    this.setState({ todos: this.state.todos.filter((ele) => ele.id !== id) });
  }

  upDateTodo = (name , description , status , id) => {
    const tempTodo = this.state.todos.map((ele) => {
      if(ele.id === id) {
       return {
        id , name , status , description
       }
      }
      return ele;
    })
    this.setState({
      todos: tempTodo
    })
  }

  render() {

    return (

      <div className='App'>
        <Header changeStatus={this.changeModalStatus} />
        <MainPage todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          changeStatus={this.changeModalStatus}
        />
        {
          this.state.modalStatus && (
            <div className="modal">
              <AddToDo
                changeStatus={this.changeModalStatus}
                createTodo={this.createTodo}
                currentEditTodo = {this.state.currentEditModal}
                updateTodo = {this.upDateTodo}
              />
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