import React, { useState, useEffect } from 'react'
import API from "../utils/Api"
const TaskForm = () => {



    const [newTask, setNewTask] = useState([]);




    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask({ ...newTask, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        API.saveTask({
            title: newTask.title,
            description: newTask.description,
            date: newTask.date,
        })
            .then((res) => console.log(res))
            .catch(err => console.log(`sorry, there was an ${err}`))

    }
    return (
        <form className="add-task">
            <h1>Add Task Page</h1>
            <div className="input-field">
                <label htmlFor="title">Task Title</label>
                <input onChange={handleInputChange} type="text" name="title" placeholder="enter task title" />
            </div>
            <div className="input-field">
                <label htmlFor="description">Task Description</label>
                <input onChange={handleInputChange} type="text" name="description" placeholder="enter task description" />
            </div>
            <div className="input-field">
                <label htmlFor="date">Date </label>
                <input onChange={handleInputChange} type="text" name="date" placeholder="enter task date" />
            </div>
            <div className="btn">
                <button onClick={handleSubmit}>Submit Task</button>
            </div>


        </form>
    )
}

export default TaskForm
