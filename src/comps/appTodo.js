import React from 'react'
import TodoInput from './todoInput'
import TodoList from './todoList'

export default function AppTodo() {
  return (
    <div className='container mt-3'>
      <h1 className='display-4'>Add a task</h1>
      <TodoInput />
      <TodoList />
    </div>
  )
} 
