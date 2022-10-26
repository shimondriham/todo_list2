import React,{ useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addNewItem, resetAllItem } from '../features/todoSlice';


export default function TodoInput() {
  const dispatch = useDispatch();
  
  const nameRef = useRef();
  const timeRef = useRef();

  const onAddClick = () => {
    let todoObj = {
      name:nameRef.current.value,
      time:timeRef.current.value,
      id:Date.now()
    }
    console.log(todoObj);
    dispatch(addNewItem({todoItem:todoObj}))
  }

  return (
    <div className='col-md-6'>
      <label>Enter task name:</label>
      <input ref={nameRef} type="text" className='form-control'/>
      <label>Enter task time:</label>
      <input ref={timeRef} type="time" className='form-control'/>
      <div className='text-center my-3'>
        <button onClick={onAddClick} className='btn btn-success me-2'>Add new</button>
        <button onClick={() => {

          window.confirm("are you sure?") && dispatch(resetAllItem());

        }} className='btn btn-danger'>Reset</button>
      </div>
    </div>
  )
}
