const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blood Donor API",
      version: "1.0.0",
      description: "API for registering and fetching blood donors"
    },
    servers: [
      {
        url: "http://localhost:5000"
      },
      {
        url: "https://blood-donation-camp-backend.onrender.com"
      }
    ]
  },
  apis: ["./src/routes/*.js"] // where swagger comments will be
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
