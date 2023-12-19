const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// Replace this with your actual database connection
// For demonstration purposes, using a simple in-memory data structure
const enrolledUsers = [];

app.use(cors());
app.use(bodyParser.json());

app.post("/api/enroll", async (req, res) => {
  try {
    const { name, age, batch } = req.body;

    console.log("Received enrollment request:", { name, age, batch });

    // Validate data
    if (!name || !age || !batch) {
      console.log("Validation failed: Missing required fields!");
      return res.status(400).json({
        success: false,
        message: "Missing required fields!",
      });
    }

    if (age < 18 || age > 65) {
      console.log("Validation failed: Age must be between 18 and 65.");
      return res.status(400).json({
        success: false,
        message: "Age must be between 18 and 65.",
      });
    }

    // Mock payment call
    const paymentSuccess = await mockPayment(name, 500); // REPLACE with real payment call

    if (!paymentSuccess) {
      console.log("Payment failed!");
      return res.status(500).json({
        success: false,
        message: "Payment failed!",
      });
    }

    // Store enrollment data in the in-memory data structure
    enrolledUsers.push({ name, age, batch });

    console.log("Enrollment successful!");
    console.log("Enrolled Users:", enrolledUsers);

    res.json({ success: true });
  } catch (error) {
    console.error("Error processing enrollment:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

function mockPayment(name, amount) {
  // Simulate successful payment
  return Promise.resolve(true);
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
