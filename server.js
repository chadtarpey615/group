import express from "express"
const app = express();
import mongodb from "mongodb";
// const mongoose = require("mongoose");
import TaskData from "./db/taskData.js"
const PORT = process.env.PORT || 5000;
const MongoClient = mongodb.MongoClient;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


MongoClient.connect(
    process.env.Tasks_DB_URI,
    {
        poolSize: 50,
        wtimeout: 2500,
        useNewUrlParser: true
    }
)
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    }).then(async client => {
        await TaskData.injectDB(client)
        app.listen(PORT, function () {
            console.log(`oh snap you are on PORT ${PORT}`);
        })

    });