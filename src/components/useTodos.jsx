
function App() {
    const todos = useTodos();

    return (
        <div>
          {/* <button onClick={addTodo}>Add crow new todo</button> */}
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


  export default useTodos