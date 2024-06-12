import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './MyComponents/Header';
import AddTodo from './MyComponents/AddTodo';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import About from './MyComponents/About';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';


function App() {
  let initTodo;
  if (localStorage.getItem("todos")) {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  } else {
    initTodo = [];
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  return (
    <>
      <Router>
        <Header title="MyTodosList" />
        <Routes>
        <Route exact path="/" element={
          <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </>
        } >
          </Route>
          </Routes>
          <Routes>
          <Route exact path="/About" element={<About />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
