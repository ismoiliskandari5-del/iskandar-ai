const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Iskandar AI server is running",
    status: "ok"
  });
});

app.post("/ask", (req, res) => {
  const question = req.body.question || "No question";
  res.json({
    answer: "You asked: " + question
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
