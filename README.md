# Blood Donation Camp Backend

### A REST API backend service for a blood donation platform that allows users to register as blood donors. Built with Node.js, Express, and MongoDB.

## 🚀 Tech Stack

Runtime: Node.js
Framework: Express.js
Database: MongoDB with Mongoose
Documentation: Swagger UI

## 🔗 GitHub Repository
https://github.com/Siddheshgite15/blood_donation_camp_backend

## 🌍 Live Deployment (Render)
Base URL:
https://blood-donation-camp-backend.onrender.com/

## 📁 Project Structure

### src/controller/
HTTP layer.
donorController.js handles requests, extracts data, calls services, returns JSON responses. No DB access.

### src/entities/
Data definitions.
donor.js defines the Mongoose schema: fields, types, constraints, collection structure.

### src/repository/
Database access layer.
donorRepo.js performs MongoDB queries using models. No HTTP or Express awareness.

### src/services/
Business logic layer.
donorServices.js validates data, applies rules, decides outcomes, calls repository methods.

### src/routes/
Routing only.
donorRoutes.js maps URLs and HTTP methods to controller functions. No logic.

### src/app.js
Express configuration.
Initializes app, registers middleware, routes, Swagger. Does not start the server.

### src/server.js
Application entry point.
Loads env vars, connects DB, starts server, listens on port.

### src/swagger.js
API documentation only.
Defines Swagger/OpenAPI config and exposes /api-docs. No runtime logic.

### .env
Environment configuration.
Stores secrets like MongoDB URI and port. Never committed.

## 📖 API Documentation
Local : http://localhost:5000/api-docs
Live (Render) : https://blood-donation-camp-backend.onrender.com/api-docs

## 🔗 API Endpoints

### Register a New Donor

POST /api/donors
Live URL:
https://blood-donation-camp-backend.onrender.com/api/donors
Request Body:
{
"fullName": "John Doe",
"bloodGroup": "O+",
"age": 25,
"city": "Mumbai",
"contact": "9876543210",
"lastDonationDate": "2025-06-01"
}

### Get All Donors

GET /api/donors
Live URL:
https://blood-donation-camp-backend.onrender.com/api/donors

Success Response (200):
{
"success": true,
"data": [
{
"_id": "...",
"fullName": "John Doe",
"bloodGroup": "O+",
"age": 25,
"city": "Mumbai",
"contact": "9876543210",
"lastDonationDate": "2025-06-01T00:00:00.000Z"
}
]
}

### Health Check API

GET /api/health
Live URL:
https://blood-donation-camp-backend.onrender.com/api/health

## ✅ Validation Rules

(All fields required)

bloodGroup – Must be one of: A+, A-, B+, B-, AB+, AB-, O+, O-
Error: "Enter valid Blood Group!"

age – Must be 18 or above
Error: "Age must be 18 or above it."

contact – Must be exactly 10 digits
Error: "Contact number is not valid!"

## 🛠️ Error Responses

### Validation Error (400):
{
"success": false,
"message": "Age must be 18 or above it."
}

### Server Error (500):
{
"success": false,
"message": "Server Error!"
}

## 📝 Donor Schema

{
fullName: String,
bloodGroup: String,
age: Number,
city: String,
contact: String,
lastDonationDate: Date
}

## 🧪 Testing with cURL
Register a Donor

POST https://blood-donation-camp-backend.onrender.com/api/donors

{
"fullName": "Sid gite",
"bloodGroup": "O+",
"age": 26,
"city": "Nashik",
"contact": "9876534210",
"lastDonationDate": "2025-09-06T00:00:00.000Z",
}

## Get All Donors
GET https://blood-donation-camp-backend.onrender.com/api/donors
