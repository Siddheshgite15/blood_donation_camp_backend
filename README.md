# Blood Donation Camp Backend

A REST API backend service for a blood donation platform that allows users to register as blood donors. Built with **Node.js**, **Express**, and **MongoDB**.

## 🚀 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Documentation**: Swagger UI

## 📁 Project Structure

Blood_donation_camp_backend/
├── src/
│   ├── config/
│   │   └── db.js              # MongoDB connection configuration
│   ├── controller/
│   │   └── donorController.js # Request handlers
│   ├── entities/
│   │   └── donor.js           # Mongoose schema/model
│   ├── repository/
│   │   └── donorRepo.js       # Database operations
│   ├── routes/
│   │   └── donorRoutes.js     # API route definitions
│   ├── services/
│   │   └── donorServices.js   # Business logic & validation
│   ├── app.js                 # Express app configuration
│   ├── server.js              # Server entry point
│   └── swagger.js             # Swagger API documentation
├── .env                       # Environment variables
├── package.json
└── README.md

## ⚙️ Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)


### Run the server
   npm start

   The server will start at `http://localhost:5000`

## 📖 API Documentation

Interactive API documentation is available at:

http://localhost:5000/api-docs

## 🔗 API Endpoints

### Register a New Donor
POST /api/donors


**Request Body:**
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

**Success Response (200):**
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

## ✅ Validation Rules
(All Field required)

`bloodGroup`- Must be one of: A+, A-, B+, B-, AB+, AB-, O+, O- "Enter valid Blood Group!".
`age`- Must be 18 or above "Age must be 18 or above it.". 
`contact`- Must be 10 digits "Contact number is not valid!".

## 🛠️ Error Responses

**Validation Error (400):**
{
  "success": false,
  "message": "Age must be 18 or above it."
}

**Server Error (500):**
{
  "success": false,
  "message": "Server Error!"
}


## 📝 Donor Schema

{
  fullName: String,        // Required
  bloodGroup: String,      // Required (A+, A-, B+, B-, AB+, AB-, O+, O-)
  age: Number,             // Required (minimum 18)
  city: String,            // Required
  contact: String,         // Required (10 digits)
  lastDonationDate: Date,  // Required
}

## 🧪 Testing with cURL

**Register a donor:**

POST http://localhost:5000/api/donors 
    {
        "fullName":"John Doe",
        "bloodGroup":"O+",
        "age":25",
        city":"Mumbai",
        "contact":"9876543210",
        "lastDonationDate":"2025-06-01"
    }

**Get all donors:**
http://localhost:5000/api/donors

