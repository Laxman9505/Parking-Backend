const express = require("express");
const router = express.Router();
const slotConroller = require("../Controllers/slotController");

router.route("/").post(slotConroller.addSlot).delete(slotConroller.deleteSlot);
module.exports = router;
