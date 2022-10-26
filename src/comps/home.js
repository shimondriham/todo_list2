import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { delSingleItem } from '../features/todoSlice';
export default function Home() {
  const dispatch = useDispatch();
  const todos_ar = useSelector(state => state.todoSlice.todos_ar)
  return (
    <div className='container home'>
      <h1 className='text-center'>- A list of all tasks -</h1>
     
    {todos_ar>[] ? todos_ar.map(item => {
      return (
        <div key={item.id} className='border shadow-sm my-2 p-2'>
          <button onClick={() => {
            dispatch(delSingleItem({delId:item.id}))
          }} className='btn btn-danger float-end' >X</button>
          <h3>{item.name} - {item.time}</h3>
        </div>
      )
    }): (<div><h3 className='text-center mt-5'>There are no tasks to display</h3>
     <h4  className='text-center '>Go to Add Tasks</h4></div>)
     }

  </div >
  )
}
