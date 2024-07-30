//server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(
  "mongodb://kavya:kavya-mongo-123@localhost:27017/posts?authSource=admin",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongo connection established successfully");
});

const itemRouter = require("./routes/items");
app.use("/items", itemRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
