const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Foodo BE",
    version: "1.0.0",
    description: "API documentation For Foodo",
  },
  servers: [
    {
      url: process.env.PORT || "http://localhost:4000", // Update with your server URL
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["server.js"], // Path to your API routes files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
