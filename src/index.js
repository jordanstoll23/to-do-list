import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoList from './components/TodoList'

var destination = document.querySelector("#container")

ReactDOM.render(
    
    <div className='main'>
        <div>
            <h1 className="title">Jordan's To-do's</h1>
        </div>
        <TodoList/>
    </div>,
destination
);

