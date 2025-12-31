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

Blood_donation_camp_backend/
├── src/
│ ├── config/
│ │ └── db.js # MongoDB connection configuration
│ ├── controller/
│ │ └── donorController.js # Request handlers
│ ├── entities/
│ │ └── donor.js # Mongoose schema/model
│ ├── repository/
│ │ └── donorRepo.js # Database operations
│ ├── routes/
│ │ └── donorRoutes.js # API route definitions
│ ├── services/
│ │ └── donorServices.js # Business logic & validation
│ ├── app.js # Express app configuration
│ ├── server.js # Server entry point
│ └── swagger.js # Swagger API documentation
├── .env # Environment variables
├── package.json
└── README.md

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
