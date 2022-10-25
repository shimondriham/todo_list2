import React from 'react'

export default function TodoInput() {
  return (
    <div className='col-md-6'>
      <label>Enter task name:</label>
      <input type="text" className='form-control'/>
      <label>Enter task time:</label>
      <input type="time" className='form-control'/>
      <div className='text-center my-3'>
        <button className='btn btn-success me-2'>Add new</button>
        <button className='btn btn-danger'>Reset</button>
      </div>
    </div>
  )
}
