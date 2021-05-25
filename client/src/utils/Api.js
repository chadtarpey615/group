import axios from "axios";

export default {
    getTask: () => {
        return axios.get("/api/tasks")
    },

    saveTask: (data) => {
        console.log(data)
        return axios.post("/api/tasks", data);
    }
}