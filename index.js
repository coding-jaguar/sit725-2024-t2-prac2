import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/add", (req, res) => {
  const { a, b } = req.body;
  console.log(req.body);
  res.status(200).json({ result: parseFloat(a) + parseFloat(b), msg: "jello" });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
