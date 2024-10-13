

import { useState } from 'react';
import './App.css';
import TodoList from "./components/TodoList"
import ViewList from "./components/ViewList"

function App() {

  const [todo,setTodo]=useState([])

  return (
    <div className='appContainer'>
      
      <TodoList todo={todo} setTodo={setTodo} />
      <ViewList todo={todo}/>

    </div>
   
  );
}

export default App;
