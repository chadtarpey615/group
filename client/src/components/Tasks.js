import React, { useState, useEffect } from 'react'
import API from "../utils/Api";
import TaskForm from "./TaskForm"
import { FaTrashAlt } from "react-icons/fa"
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

    const deleteTask = (id) => {
        API.deleteTask(id)
            .then(res => loadTask())
            .catch(err => console.log(err))
    }

    // const newInput = () => {
    //     console.log()
    //     return (

    //     )

    // }


    // const tasksList = Array.from(tasks)
    const tasksList = tasks.map(task => {
        if (tasks)
            return (
                <div className="task">
                    <h1>{task.title}</h1>
                    <p>{task.description}</p>
                    <p>{task.date}</p>
                    <FaTrashAlt onClick={() => deleteTask(task._id)} />
                    <button onClick={(id) => setIsEditing(true)}>edit task</button>
                </div>
            )
    })

    if (isEditing)
        return (

            <>
                <TaskForm />

            </>
        )

    if (!isEditing)
        return (
            <>
                {tasksList}
            </>
        )
}

export default Tasks
