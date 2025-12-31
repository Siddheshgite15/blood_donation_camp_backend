const express = require("express");
const router = express.Router();
const donorController = require("../controller/donorController");

/**
 * @swagger
 * /api/donors:
 *   post:
 *     summary: Register a new blood donor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - bloodGroup
 *               - age
 *               - city
 *               - contact
 *               - lastDonationDate
 *             properties:
 *               fullName:
 *                 type: string
 *               bloodGroup:
 *                 type: string
 *               age:
 *                 type: number
 *               city:
 *                 type: string
 *               contact:
 *                 type: string
 *               lastDonationDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Donor registered successfully
 *       400:
 *         description: Validation error
 */
router.post("/donors", donorController.createDonor);

/**
 * @swagger
 * /api/donors:
 *   get:
 *     summary: Get all donors
 *     responses:
 *       200:
 *         description: List of donors
 */
router.get("/donors", donorController.getDonors);

module.exports = router;
