const router = require("express").Router();
const confController = require("../../controllers/confController");

//matches with "/api/conferences"
router.route("/")
.get(confController.findAll);
// .post(confController.create);

//matches with "/api/conferences/schedule"
router
.route("/schedule")
.get(confController.findById);
// .put(confController.update)
// .delete(confController.remove);

module.exports = router;