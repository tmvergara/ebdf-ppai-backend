require("dotenv").config();
const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const cors = require("cors");

const app = express();

// Middleware and routes will be added here
app.use(cors());
app.use(express.json());

// Rutas
const userRouter = require("./routes/user.router");
app.use("/users", userRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
