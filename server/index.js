const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const projectRoutes = require("./routes/projectRoutes");

const app = express();

//db connection
dotenv.config({ path: "./.env" });

mongoose
  .connect(process.env.CONNECTION_URI, {
    dbName: "portfolio",
  })
  .then(() => console.log("Connection established"))
  .catch((err) => console.log(err));

//middleware setup
app.use(cors({ credentials: true, origin: "https://portfolio-backend-2-six.vercel.app", allowedHeaders:'Content-Type,Authorization', methods:'GET,HEAD,PUT,PATCH,POST,DELETE' }));
app.use(morgan("dev"));
// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api/v1/project", projectRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Connected to the server at PORT ${process.env.PORT}`);
});
