const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { appRouter } = require("./routes/apps.route");

const PORT = 3000;
const DB_NAME = "Password-Manager";
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(appRouter);

mongoose
  .connect(`mongodb://localhost:27017/${DB_NAME}`)
  .catch((error) => console.log("connection error: " + error));
mongoose.connection.on("open", () => {
  console.log("mongodb connected");
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
