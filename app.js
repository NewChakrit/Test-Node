const express = require("express");
const cors = require("cors");
const resultRoute = require("./routes/resultRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/result", resultRoute);

app.get("/", async (req, res) => {
  res.status(200).json("Success");
});

app.listen(8001, () => {
  console.log("server run on port " + 8001);
});

const db = require("./models");

// db.sequelize.sync().then(() => {
//   console.log("Database is sync");
// });
