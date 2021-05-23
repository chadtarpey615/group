const path = require('path');
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
    console.log(res)
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

module.exports = router;