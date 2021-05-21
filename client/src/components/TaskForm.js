import React from 'react'

const TaskForm = () => {
    return (
        <form className="add-task">
            <div className="input-field">
                <label htmlFor="title">Task Title</label>
                <input type="text" name="title" placeholder="enter task title" />
            </div>
            <div className="input-field">
                <label htmlFor="description">Task Description</label>
                <input type="text" name="description" placeholder="enter task description" />
            </div>
            <div className="input-field">
                <label htmlFor="date">Date </label>
                <input type="text" name="date" placeholder="enter task date" />
            </div>
        </form>
    )
}

export default TaskForm
