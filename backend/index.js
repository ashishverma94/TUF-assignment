const cors = require("cors");
const express = require("express");
// const connectDatabase = require("./db/Database.js");
 
// require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
 
app.get("/test", (req, res) => {
  res.end("Hello test!");
});

// Routes
// const user = require("./controller/codeController.js");
// app.use("/api/v1/code", user);

// connectDatabase();
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
