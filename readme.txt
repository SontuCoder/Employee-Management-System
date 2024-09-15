User Management System
By, Subhadip Maity 
This project is a simple User Management System built with a React frontend and Express backend. The system allows users to perform basic CRUD (Create, Read, Update, Delete) operations on user data including name, email, password, salary, and role.

Features
Add new users with details such as name, email, password, salary, and role.
Update user information.
Delete users from the system.
Retrieve and display a list of all users.
Show detailed information for a single user.
Toast notifications for success and error messages.

Tech Stack

Frontend
React: For building the UI and handling user interactions.
React Router: For navigating between pages.
Axios: For making HTTP requests to the backend.
React Hot Toast: For displaying success and error notifications.
CSS: For basic styling of the form and layout.

Backend
Node.js: As the runtime environment for the server.
Express.js: For building the API endpoints.
MongoDB: As the database to store user information.
Mongoose: For modeling MongoDB data and interacting with the database.
Prerequisites
Node.js (v12+)
MongoDB: You can set up MongoDB locally or use a cloud service like MongoDB Atlas.
npm or yarn: For managing project dependencies.

Installation:

Install the dependencies:

For the backend:
cd backend
npm install

For the frontend:
cd frontend
npm install

Setup environment variables:
In the backend folder, create a .env file and set the following environment variables:
MONGO_URI=mongodb://localhost:27017/usermanagementdb
PORT=7000
Replace the MongoDB URI with your own if using a cloud service.

Run the backend:
cd backend
npm start

Run the frontend:
cd frontend
npm start
Access the application: The React frontend will be available at http://localhost:3000, and the backend API will run on http://localhost:7000.

API Endpoints
The following API endpoints are available:

POST /user/create: Create a new user.
GET /user/getAll: Get a list of all users.
GET /user/getUser/:id: Get a specific user by their ID.
PUT /user/update/:id: Update a user's details.
DELETE /user/delete/:id: Delete a user by their ID.
Project Structure
bash
Copy code
/backend                 # Node.js and Express backend
  /models                # Mongoose models (e.g., User.js)
  /routes                # Express routes (e.g., userRoutes.js)
  server.js              # Main entry point for backend server

/frontend                # React frontend
  /src
    /components          # React components (AddUser, EditUser, etc.)
    App.js               # Main React component
    index.js             # Main entry point for frontend

README.md                # Project documentation

Future Enhancements
Add pagination for large datasets.
Implement user authentication and authorization.
Add search and filtering functionality.
Improve UI with more responsive and modern design.
