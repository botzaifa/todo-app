import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from "react";
import { useRef } from "react";
import { Ref } from "./components/Ref";



// Creating Todo App

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Go to college",
    description: "Uth, naha, Metro pakad aur bhaag college"
  }, {
    id: 2,
    title: "Try not to die",
    description: "Bekar college hai ik but pls dont die!"
  }, {
    id: 3,
    title: "Go home",
    description: "Ghar jaake soo jaa"
  }])


  function addTodo() {
    setTodos([...todos, {
      title: "new todo",
      description: "new todo desc"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add crow new todo</button>
      {todos.map(todo => <Todo key = {todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todo({title, description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
}






// function App() {
//   const [id, setSelectId] = useState(1);
//   return <div>
//     <button onclick={(setSelectId(1)}>1</button>
//     <button onclick={(setSelectId(2)}>2</button>
//     <button onclick={(setSelectId(3)}>3</button>
//     <button onclick={(setSelectId(4)}>4</button>
//     <Todo id={setSelectId} />
//   </div>
// }

// function Todo({id}) {
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todo?id=" + id)
//       .then(async function(res) {
//         const json = await res.json();
//         setTodo (json.todo);
//       })
//   }, [id])

//   return <div>
//     <h1>
//       {todo.title}
//     </h1>
//     <h4>
//       {todo.description}
//     </h4>
//   </div>
// }




// function App() {
//   const [Id, setId] = useState(1)
//   return (
//     <>
//       <button onClick={() => setId(1)}>1</button>
//       <button onClick={() => setId(2)}>2</button>
//       <button onClick={() => setId(3)}>3</button>
//       <button onClick={() => setId(4)}>4</button>
//       <Todo id={Id} />
//     </>
//   )
// }


// function Todo({id}){
//   const [todos, setTodos] = useState({})
  
//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todo?id=" + id)
//     .then(async function(res){
//       const json = await res.json()
//       setTodos(json.todo)
//     })
//   }, [id])

//   return (
//     <>
//       <h3>{todos.title}</h3>
//       <p>{todos.description}</p>
//     </>
//   )
// }
// }





// function App() {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todos")
//     .then (async function(res) {
//       const json = await res.json();
//       setTodos(json.todos);
//     }) 
//   }, [todos])



//   return (
//     <div>
//       <h1>
//         Dam hai toh rokh kar dikhao
//       </h1>
//       {/* <button onClick={addTodo}>Add crow new todo</button> */}
//       {todos.map(todo => <Todo key = {todo.id} title={todo.title} description={todo.description} />)}
//     </div>
//   )
// }

// function Todo({title, description}) {
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h4>
//       {description}
//     </h4>
//   </div>
// }

// function App() {
//   <div>
//     <Ref/>
//   </div>
// }



// import { useCallback, useEffect, useRef, useState } from 'react'

// function App() {
//   const divRef = useRef();

//   useEffect(() => {
//     setTimeout(() => {
//       divRef.current.innerHTML = "10"
//     }, 5000);
//   }, [])

//   const incomeTax = 20000;

//   return (
//     <div>
//         hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
//     </div>
//   )
// }






export default App
