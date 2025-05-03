import React from 'react'

function ToDoContainer() {
  return (
    <div className="container">
        <div className="todo">
          <p>Do DSA</p>
          <div className="actions">
            <input type="checkbox" />
            <button>Delete</button>
          </div>
        </div>
      </div>
  )
}

export default ToDoContainer
