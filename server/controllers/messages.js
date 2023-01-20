const Message = require("../models/Message");
// const asyncWrapper = require('../middleware/async')
// const { createCustomError } = require('../errors/custom-error')
const getAllMessages = async (req, res) => {
  const messages = await Message.find({});
  res.status(200).json({ messages });
};

const createMessage = async (req, res) => {
  const message = await Message.create(req.body);
  res.status(201).json({ message });
};

const getMessage = async (req, res, next) => {
  const { id: MessageID } = req.params;
  const message = await Message.findOne({ _id: MessageID });
  // if (!message) {
  //   return next(createCustomError(`No Message with id : ${MessageID}`, 404))
  // }

  res.status(200).json({ message });
};

module.exports = {
  getAllMessages,
  createMessage,
  getMessage,
};
