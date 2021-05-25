const router = require("express").Router();
const taskController = require("../../controller/taskController.js");

router.route("/")
    .get(taskController.findAll)
    .post(taskController.create);


router.route("/:id")
    .delete(taskController.remove);


module.exports = router;