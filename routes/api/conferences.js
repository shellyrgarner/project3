const router = require("express").Router();
const confController = require("../../controllers/confController");

//matches with "/api/conferences"
router.route("/")
    .get(confController.findAll)
    .post(confController.create);
//console.log()

//matches with "/api/conferences/:id"
router
    .route("/:id")
    .get(confController.findById)
    .put(confController.update)
    .delete(confController.remove);

module.exports = router;