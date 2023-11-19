import { useState } from "react"
import "./style.css"

export default function App() {
  const [ newItem, setNewItem ] = useState("")
  const [ todos, setTodos ] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos( currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false,
        }
      ]
    })

    setNewItem("")

  }

  function toggleToDo( id, completedFlag ){
    setTodos(currentTodos=> {
      return currentTodos.map( todo => {
        if ( todo.id === id ){
          return { ...todo, completed: completedFlag }
        }
        return todo
      })
    })
  }

  function deleteToDo ( id ) {
    setTodos( currentTodos=> {
      return currentTodos.filter(todo=> todo.id !== id)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">Add New Item</label>
          <input 
            value={newItem} 
            onChange={ e=> setNewItem(e.target.value)} 
            type="text" 
            id="item"
          />
        </div>
        <button className="btn">Add Item</button>
      </form>

      <h1 className="header">Your List</h1>

      <ul className="list">

        { todos.length===0 && "No Items in the List"}

        {
          todos.map ( todo => (
            <li key={todo.id}>
              <label>
                <input 
                  type="checkbox" 
                  checked={todo.completed}
                  onChange={e=> toggleToDo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button onClick={() => deleteToDo(todo.id)} className="btn btn-danger">Remove</button>
            </li>
          ))
        }
      </ul>
    </>
  )
}