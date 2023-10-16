import express from "express";
import cors from "cors";

const app = express();

//  server will allow cross-origin requests
// app.use(cors());

app.get("/getData", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => console.log("app is running"));
