import React from 'react';
import Input from './components/Input';
import './App.css';
import TodoItem from './components/TodoItem';

import{useSelector} from 'react-redux'
import {selectTodoList} from './features/todoSlice'

function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="App">
      <div className = 'app_container'>
        <div className = 'app_todoContainer'>
    {
      todoList.map(item => (
        <TodoItem name = {item.item}
        done = {item.done}
        id = {item.id}
        />
      ))
    }
        </div>
      </div>
     <Input/>
    </div>
  );
}

export default App;
