Yoga Admission Form
This project is a simple admission form for Yoga classes, built as part of a coding assignment. It allows individuals to enroll for monthly classes, with specific requirements and payment details.

#Features
Age Limit: Only individuals aged 18-65 are eligible to enroll.
Monthly Fees: Participants pay the monthly fee of 500 INR.
Batch Selection: Choose from four batches: 6-7AM, 7-8AM, 8-9AM, and 5-6PM.
Batch Flexibility: Participants can switch batches each month.
Payment Processing: Basic payment processing with a mock function.

#Tech Stack
Frontend: React
Backend: Node

Project Structure

#frontend: Contains the React frontend code.
Yoga Admission Form - Frontend
This is a simple React application for handling enrollment in monthly yoga classes.
## Features
- Accepts user details for enrollment.
- Validates user input for name, age, and batch selection.
- Submits enrollment data to the backend API for processing.
- Provides feedback to the user based on the API response.
- Allows the user to choose a batch for the monthly yoga classes.
## Technologies Used
- React: A JavaScript library for building user interfaces.
- Fetch API: Used for making asynchronous requests to the backend API.
## Getting Started
Follow these steps to run the application locally:
1. Clone the repository:

   ```bash
   git clone https://github.com/trisha2082/yoga-admission-form.git

#backend: Contains the backend code for processing admission forms and payments.
Yoga Admission Form Backend
This backend application is part of the Yoga Admission Form project. It's responsible for handling enrollment requests, validating data, and simulating payment processing.

## Tech Stack
- **Express**: Web framework for Node.js
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing
- **Body Parser**: Middleware for parsing JSON in request bodies
  
## Features
- **Enrollment Endpoint**: Accepts POST requests at `/api/enroll` for enrolling participants.
- **Data Validation**: Validates user data, including name, age, and selected batch.
- **Mock Payment**: Simulates a successful payment process.
- **In-Memory Database**: Stores enrolled user data in an in-memory data structure.

## How to Run
1. Clone the repository:

   ```bash
   git clone https://github.com/trisha2082/yoga-admission-form.git
   
How to Run
Clone the repository:

bash
Copy code
git clone https://github.com/trisha2082/yoga-admission-form.git

#API Endpoints
Enroll Participant
Endpoint: /api/enroll
Method: POST

Request Body:
{
  "name": "Participant Name",
  "age": 25,
  "batch": "7-8AM"
}
Response:
{
  "success": true
}
