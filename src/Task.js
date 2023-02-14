import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodos: [
        {id: 'todo1', title: 'Doing homework'},
        {id: 'todo2', title:'Making video'},
        {id:'todo3',title:'fix'},
      ],

      title: '',

      editTodo:{}

    };
  }
addNewTodo = (todo) => {
  this.setState({
    listTodos: [...this.state.listTodos, todo ]
   
  })
}

handleOnChangeTitle = (event) => {
  this.setState({
    title : event.target.value
  })
  console.log(event.target.value)
}
handleAddTodo = () => {
  let todo ={
    id : Math.floor(Math.random() * 1001 ),
    title: this.state.title
  }
// alert("alo")

 this.addNewTodo(todo);
 this.setState({
  title: ''
 }
 )
}

handleDeleteTodo = (todo) => {
  let currentTodos = this.state.listTodos;
  currentTodos = currentTodos.filter(item => item.id !== todo.id);
  this.setState({
      listTodos: currentTodos
  })
  
}





  render() {
    let {listTodos}= this.state;
    let {title}= this.state;
    return (
        <div className='Task'>
          <div className='add-todo'>
            <input type='text' value={title}
                onChange={(event) => this.handleOnChangeTitle(event)}            
            />
          
            <button type='button' onClick={() => this.handleAddTodo()} >Add</button>
          </div>

          <div className='list-todo-content'>
            { listTodos && listTodos.length > 0 &&
                listTodos.map((item, index)=>{
                  return(
                    <div className='todo-child' key={item.id}>
                   <span> {index+1} - {item.title} </span>

                   <button className="delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >Delete
                    </button>
                  </div>
                  )
                })            
            }
              
              
          </div>
      </div>
    );
  }
}

export default Task;