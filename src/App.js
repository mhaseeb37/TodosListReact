import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Todos } from './components/todos/Todos';
import { AddTodo } from './components/addTodo/AddTodo';
import { About } from './components/about/About';

function App() {
  let initTodo;
  if(localStorage.getItem('TodosList')===null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem('TodosList'));
  }
  const onDelete = (todo) =>{
    console.log("Delete Button Pressed of ", todo);
    // Deleting this way will not work in React!
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
    setTodosList(TodosList.filter((e) => {
      return e!==todo;
    }));
    localStorage.setItem("TodosList",JSON.stringify(TodosList));
  };
  const addTodo = (title, desc) =>{
    console.log('I am adding this todo.', title, desc);
    let sno; 
    if (TodosList.length === 0){
      sno = 0;
    }else{
      sno = TodosList[TodosList.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    console.log(myTodo);
    setTodosList([...TodosList,myTodo]);
  }
  const [TodosList, setTodosList] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("TodosList",JSON.stringify(TodosList));
  },[TodosList]);
  
  return (
    <div className="TodosApp">
      <Header title='Todos List' searchBar={true}/>
      <Routes>
        <Route path='/' element={
          <>
            <AddTodo addTodo={addTodo}/>
            <Todos todoList={TodosList} onDelete={onDelete}/>
          </>
        }>
        </Route>
        <Route path='/about' element={<About />}>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
