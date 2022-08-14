require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const workoutRoutes = require("./routes/workouts");
const userRouts = require("./routes/user");
const cors = require("cors");


//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(cors());

//Routes

app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRouts);
app.use("*", (req, res) => {
  res.send("deploy success");
});

// connect to db
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(` connecting to db & listning on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
