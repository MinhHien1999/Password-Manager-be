const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { appRouter } = require("./routes/apps.route");
const dotenv = require("dotenv").config();

const PORT = 3000;
const DB_NAME = "Password-Manager";
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(appRouter);
// console.log(process.env.MONGO_URI);
mongoose
  .connect(`${process.env.MONGO_URI}`)
  .catch((error) => console.log("connection error: " + error));
mongoose.connection.on("open", () => {
  console.log("mongodb connected");
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
