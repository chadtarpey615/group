const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.listen(PORT, function () {
    console.log(`oh snap you are on PORT ${PORT}`);
});