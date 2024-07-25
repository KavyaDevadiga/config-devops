import express from "express";
const app = express();

app.get("/", (request, response) => {
  response.send("Welcome to node application");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
