const router = require("express").Router();
const taskController = require("../../controller/taskController.js");

router.route("/")
    .get(taskController.findAll)
    .post(taskController.create);


module.exports = router;