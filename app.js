const express = require("express");
const db = require("./src/models/index");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const userRoutes = require("./src/routes/user.route");
const recipeRoutes = require("./src/routes/recipe.route");
app.use(bodyParser.json());
db.sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.error("Error syncing database: ", err));

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/user", userRoutes);
app.use("/recipe", recipeRoutes);

module.exports = app;
