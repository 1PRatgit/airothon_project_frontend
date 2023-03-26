import React from 'react'

export const Todoitem = ({todo,onDelete}) => {
  return (
    <>
    <div className='container m-5 p-2 rounded mx-auto bg-light shadow'>
    <div className="mb-3 col col-11 mx-auto">
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
      </div>
      
      </div>
    <hr/>
    </>

  )
}
