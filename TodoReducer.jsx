import React from "react"
import { useState,useReducer } from "react"

export const ACTIONS = {
  ADD: "add",
  DELETE: 'delete',
  TOGGLE: 'toggle'
}

function reducer(todo,action)
{
  switch (action.type)
  {
    case ACTIONS.ADD:
      return [...todo, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE:
      return todo.map((item)=>{
        if(item.id === action.payload.id)
        {
          return {...item,complete:!item.complete}
        }
        return item
      })
      case ACTIONS.DELETE:
      return todo.filter((item) => item.id !== action.payload.id);
    default:
      return todo;
  }
}

function newTodo(name)
{
  return {id:Date.now(), name:name, complete:false}
}
function App() {

  const [name, setName] = useState('')
  const [todo,dispatch] = useReducer(reducer,[])

  const Todo = ({todo,dispatch}) => {
    return (
      <div>
         <span style={{color:todo.complete?'#AAA':'#000'}}>
         {todo.name}
         </span>
          <button onClick={()=>dispatch({type:ACTIONS.TOGGLE, payload:{id:todo.id}})}>Toggle</button>
          <button onClick={()=>dispatch({type:ACTIONS.DELETE, payload:{id:todo.id}})}>Delete</button>
      </div>
    )
  }

  function handleSubmit(e)
  {
    e.preventDefault();
    if (name.trim()) {
      dispatch({ type: ACTIONS.ADD, payload: { name: name } });
      setName('');
    }
  }
  console.log(todo)
  return (
    <>
    <div className="text-lg font-medium bg-red-300">
      
      <form onSubmit={handleSubmit}>
      <input 
          className="border-4 border-black" 
          type="text" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          />
        <button type="submit">Add Todo</button>
      </form>
      {todo.map(item=>(
        <Todo key={item.id} todo={item} dispatch={dispatch} />
      ))}
      </div>
    </>
  )
}

export default App
