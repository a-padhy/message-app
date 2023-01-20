const express = require("express");
const router = express.Router();

const {
  getAllMessages,
  createMessage,
  getMessage,
} = require("../controllers/messages");

router.route("/").get(getAllMessages).post(createMessage);
router.route("/:id").get(getMessage);

module.exports = router;
