<h1>User Management System</h1>
<h3>By, Subhadip Maity</h3>

<p>This project is a simple <strong>User Management System</strong> built with a React frontend and Express backend. The system allows users to perform basic CRUD (Create, Read, Update, Delete) operations on user data including <code>name</code>, <code>email</code>, <code>password</code>, <code>salary</code>, and <code>role</code>.</p>

<h2>Features</h2>
<ul>
  <li>Add new users with details such as name, email, password, salary, and role.</li>
  <li>Update user information.</li>
  <li>Delete users from the system.</li>
  <li>Retrieve and display a list of all users.</li>
  <li>Show detailed information for a single user.</li>
  <li>Toast notifications for success and error messages.</li>
</ul>

<h2>Tech Stack</h2>

<h3>Frontend</h3>
<ul>
  <li><strong>React</strong>: For building the UI and handling user interactions.</li>
  <li><strong>React Router</strong>: For navigating between pages.</li>
  <li><strong>Axios</strong>: For making HTTP requests to the backend.</li>
  <li><strong>React Hot Toast</strong>: For displaying success and error notifications.</li>
  <li><strong>CSS</strong>: For basic styling of the form and layout.</li>
</ul>

<h3>Backend</h3>
<ul>
  <li><strong>Node.js</strong>: As the runtime environment for the server.</li>
  <li><strong>Express.js</strong>: For building the API endpoints.</li>
  <li><strong>MongoDB</strong>: As the database to store user information.</li>
  <li><strong>Mongoose</strong>: For modeling MongoDB data and interacting with the database.</li>
</ul>

<h2>Prerequisites</h2>
<ul>
  <li><strong>Node.js</strong> (v12+)</li>
  <li><strong>MongoDB</strong>: You can set up MongoDB locally or use a cloud service like MongoDB Atlas.</li>
  <li><strong>npm</strong> or <strong>yarn</strong>: For managing project dependencies.</li>
</ul>

<h2>Installation</h2>
<ol>
  <li><strong>Clone the repository</strong>:
    <pre><code>git clone https://github.com/yourusername/user-management-system.git
cd user-management-system
    </code></pre>
  </li>

  <li><strong>Install the dependencies</strong>:
    <p>For the backend:</p>
    <pre><code>cd backend
npm install
    </code></pre>
    <p>For the frontend:</p>
    <pre><code>cd frontend
npm install
    </code></pre>
  </li>

  <li><strong>Setup environment variables</strong>:
    <p>In the <code>backend</code> folder, create a <code>.env</code> file and set the following environment variables:</p>
    <pre><code>MONGO_URI=mongodb://localhost:27017/usermanagementdb
PORT=7000
    </code></pre>
  </li>

  <li><strong>Run the backend</strong>:
    <pre><code>cd backend
npm start
    </code></pre>
  </li>

  <li><strong>Run the frontend</strong>:
    <pre><code>cd frontend
npm start
    </code></pre>
  </li>

  <li><strong>Access the application</strong>:
    <p>The React frontend will be available at <code>http://localhost:3000</code>, and the backend API will run on <code>http://localhost:7000</code>.</p>
  </li>
</ol>

<h2>API Endpoints</h2>
<p>The following API endpoints are available:</p>
<ul>
  <li><strong>POST</strong> <code>/user/create</code>: Create a new user.</li>
  <li><strong>GET</strong> <code>/user/getAll</code>: Get a list of all users.</li>
  <li><strong>GET</strong> <code>/user/getUser/:id</code>: Get a specific user by their ID.</li>
  <li><strong>PUT</strong> <code>/user/update/:id</code>: Update a user's details.</li>
  <li><strong>DELETE</strong> <code>/user/delete/:id</code>: Delete a user by their ID.</li>
</ul>

<h2>Project Structure</h2>
<pre><code>/backend                 # Node.js and Express backend
  /models                # Mongoose models (e.g., User.js)
  /routes                # Express routes (e.g., userRoutes.js)
  server.js              # Main entry point for backend server

/frontend                # React frontend
  /src
    /components          # React components (AddUser, EditUser, etc.)
    App.js               # Main React component
    index.js             # Main entry point for frontend

README.md                # Project documentation
</code></pre>

<h2>Screenshots</h2>

<h3>1. Add User Form</h3>
<img src="https://via.placeholder.com/500x300" alt="Add User Form" />

<h3>2. User List View</h3>
<img src="https://via.placeholder.com/500x300" alt="User List View" />

<h2>Running Tests</h2>
<p>No tests are currently set up for this project.</p>

<h2>Future Enhancements</h2>
<ul>
  <li>Add pagination for large datasets.</li>
  <li>Implement user authentication and authorization.</li>
  <li>Add search and filtering functionality.</li>
  <li>Improve UI with more responsive and modern design.</li>
</ul>

<h2>License</h2>
<p>This project is licensed under the MIT License - see the <code>LICENSE</code> file for details.</p>
