import React, { useState, useEffect } from 'react'
import API from "../utils/Api"
const Tasks = () => {

    const [tasks, setTasks] = useState([]);


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
                <div className="main">
                    <h1>{task.title}</h1>
                    <p>{task.description}</p>
                    <p>{task.date}</p>
                </div>
            )
    })
    return (
        <>
            {tasksList}
        </>
    )
}

export default Tasks
