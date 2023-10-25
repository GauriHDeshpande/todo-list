import './App.css';
import React, { useState } from 'react';
import { Footer } from './MyComponents/Footer';//It is passed in curly brackets because it is not exported by default through its function.
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';

function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete of todo...", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }
  const addTodo = (title,desc) =>{
    console.log("I am adding this todo", title, desc);
    let sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno : sno,
      title : title,
      desc : desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "wake up early in the morning !",
      desc: "This is the description 1"
    },
    {
      sno: 2,
      title: "Do morning exercise",
      desc: "This is the description 2"
    },
    {
      sno: 3,
      title: "complete complete rest application",
      desc: "This is the description 3"
    },
    {
      sno: 4,
      title: "Do interview preparation.",
      desc: "This is the description 4"
    },
    {
      sno: 5,
      title: "Eat and sleep on time !",
      desc: "This is the description 5"
    }
  ]);
  
    return (
    <>
      <Header title="My-Todo's-List" searchBar={true} />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
