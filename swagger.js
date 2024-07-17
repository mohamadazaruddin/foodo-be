const swaggerJSDoc = require("swagger-jsdoc");
const swaggerAutogen = require("swagger-autogen")();

// const outputFile = "./swagger_output.json";
// const endpointsFiles = ["./src/routes/recipe.route", "./src/routes/user.route"]; // Specify the path to your API routes

// swaggerAutogen(outputFile, endpointsFiles);
// const swaggerDefinition = {
//   openapi: "3.0.0",
//   info: {
//     title: "Foodo BE",
//     version: "1.0.0",
//     description: "API documentation For Foodo",
//   },
//   servers: [
//     {
//       url: process.env.PORT || "http://localhost:4000", // Update with your server URL
//     },
//   ],
// };
// const options = {
//   swaggerDefinition,
//   apis: ["./src/routes/*.js"], // Path to your API routes files
// };

// const swaggerSpec = swaggerJSDoc(options);

// module.exports = swaggerSpec;
