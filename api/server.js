const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const companyRouter = require("./routes/company");

const PORT = process.env.PORT || 5500;

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/company", companyRouter);

mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => {
    console.log("mongoDB connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(PORT, () => {
  console.log("server connected to port " + PORT);
});
