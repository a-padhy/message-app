const express = require("express");
const app = express();
const mongoose = require("mongoose");
const messages = require("./routes/messages");
const connectDB = require("./db/connect");
const cors = require("cors");
require("dotenv").config();
// const notFound = require("./middleware/not-found");
// const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware

app.use(express.static("../client/public"));
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// routes

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use("/api/v1/messages", messages);
// app.use(notFound);
// app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoose.set("strictQuery", false);
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
