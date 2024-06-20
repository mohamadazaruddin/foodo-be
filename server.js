const express = require("express");
const sequelize = require("./src/config/db_config");
// const User = require("./src/models")(sequelize);
// const Recipe = require("./src/models")(sequelize);
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

// sequelize
//   .sync()
//   .then(() => {
//     console.log("Database synced");
//   })
//   .catch((err) => console.error("Error syncing database: ", err));

app.use(express.json());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// app.post("/register", async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({
//       username,
//       email,
//       password: hashedPassword,
//     });
//     res.status(201).json({ message: "User Registered Successfully", user });
//   } catch (error) {
//     console.error("Error registering user", error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ where: { email } });
//     if (!user) {
//       return res.status(400).json({ message: "Invalid Credentials" });
//     }
//     const isPasswordMatch = await bcrypt.compare(password, user.password);
//     if (!isPasswordMatch) {
//       return res.status(400).json({ message: "Invalid Credentials" });
//     }
//     const token = jwt.sign({ userId: user.id }, "LMkML6Wshdy7", {
//       expiresIn: "1h",
//     });
//     res.json({ token });
//   } catch (error) {
//     console.error("Error logging in: ", error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// function verifyToken(req, res, next) {
//   const authHeader = req.header("Authorization");
//   if (!authHeader) {
//     return res.status(401).json({ message: "Access Denied" });
//   }
//   const token = authHeader.split(" ")[1];
//   try {
//     const decoded = jwt.verify(token, "LMkML6Wshdy7");
//     req.user = decoded;
//     next();
//   } catch (error) {
//     console.error("Error verifying token: ", error);
//     res.status(401).json({ message: "Invalid Token" });
//   }
// }

// app.get("/userInfo", verifyToken, async (req, res) => {
//   try {
//     const user = await User.findByPk(req.user.userId);
//     if (!user) {
//       return res.status(404).json({ message: "User Not found" });
//     }
//     res.json({ user });
//   } catch (error) {
//     console.error("Error fetching user info: ", error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// app.get("/recipe", verifyToken, async (req, res) => {
//   try {
//     const recipies = await Recipe.find();
//     if (!recipies) {
//       return res.status(404).json({ message: "Recipe Not found" });
//     }
//     res.json({ recipies });
//   } catch (error) {
//     console.error("Error fetching user info: ", error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });
