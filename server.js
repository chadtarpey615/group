const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes")
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");
dotenv.config();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.Tasks_DB_URI || "mongodb://localhost/tasks")


app.listen(PORT, function () {
    console.log(`oh snap you are on PORT ${PORT}`);
})