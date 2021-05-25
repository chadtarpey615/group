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
            .then(res => setTasks(...tasks, res.data))

            .catch(err => console.error(err))
    }
    return (
        <div>
            <h1>All Tasks here</h1>
        </div>
    )
}

export default Tasks
