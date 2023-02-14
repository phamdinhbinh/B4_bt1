import React, { Component } from 'react';
// import './App.css';
import Task from './Task';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  
  render() {
   
    return (
      <div className='container'>
        <h1>
          To Do List
        </h1>
       <Task /> 
      </div>
    );
  }
}

export default App;
