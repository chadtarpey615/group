import React, { useState, useEffect } from 'react'
import API from "../utils/Api"
const Tasks = () => {

    const [tasks, setTasks] = useState([]);
    const [isEditing, setIsEditing] = useState(false);


    useEffect(() => {
        loadTask()
        console.log(tasks)
    }, [tasks.length]);

    const loadTask = () => {
        API.getTask()
            .then(res => setTasks(res.data))

            .catch(err => console.error(err))
    }


    // const tasksList = Array.from(tasks)
    const tasksList = tasks.map(task => {
        if (tasks)
            return (
                <div className="task">
                    <h1>{task.title}</h1>
                    <p>{task.description}</p>
                    <p>{task.date}</p>
                </div>
            )
    })

    {
        if (isEditing) {
            return (
                <form>
                    <div className="input-field">
                        <label htmlFor="description">Task Description</label>
                        <input type="text" name="description" placeholder="enter task description" />
                    </div>
                </form>
            )
        }
    }
    return (

        <>
            <h1 className="title">Task Tracker</h1>
            <div onCLick={() => setIsEditing(true)} className="main">
                {tasksList}
            </div>
        </>
    )
}

export default Tasks
