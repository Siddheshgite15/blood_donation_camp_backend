const express=require("express");
const donorRoutes=require("../src/routes/donorRoutes");
const swaggerUi= require("swagger-ui-express");
const swaggerSpec=require("./swagger")

const app=express();

app.use(express.json());
app.use("/api",donorRoutes);

app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports=app;