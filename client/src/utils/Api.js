import axios from "axios";

export default {
    getTask: () => {
        return axios.get("")
    },

    saveTask: (data) => {
        console.log(data)
        return axios.post("/api/tasks", data);
    }
}