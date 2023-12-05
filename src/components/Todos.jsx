import React, { memo } from 'react'

const Todos = ({todos,addTodo}) => {
console.log('Clicked');
  return (
    <div>
    <h1> Todo App</h1>
{todos.map((todo,index)=>{
  return <p key={index}> {todo+index} </p>

})}

<button onClick={addTodo}>Add Todo</button>

      
    </div>
  )
}

export default memo(Todos);
