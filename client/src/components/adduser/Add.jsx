import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./add.css";
import toast from 'react-hot-toast';

const Add = () => {

  // Define the initial state for the form
  const initialUserState = {
    name: '',
    email: '',
    password: '',
    salary: '',
    role: ''
  };

  const [user, setUser] = useState(initialUserState);
  const navigate = useNavigate();

  // Input handler for form elements
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Form submission handler
  const submitForm = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await axios.post("http://localhost:7000/user/create", user);
      toast.success('New user added successfully!', { position: "top-right" });
      navigate("/"); // Redirect to home after successful submission
    } catch (error) {
      console.error(error);
      toast.error('Failed to add user', { position: "top-right" });
    }
  };

  return (
    <div className='addUser'>
      <Link to={"/"}>Back</Link>
      <h3>Add New User</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        {/* Input for Name */}
        <div className="inputGroup">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={user.name}
            onChange={inputHandler}
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Enter name"
            required
          />
        </div>

        {/* Input for Email */}
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={user.email}
            onChange={inputHandler}
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter email"
            required
          />
        </div>

        {/* Input for Password */}
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={user.password}
            onChange={inputHandler}
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter password"
            required
          />
        </div>

        {/* Input for Salary */}
        <div className="inputGroup">
          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            value={user.salary}
            onChange={inputHandler}
            id="salary"
            name="salary"
            autoComplete="off"
            placeholder="Enter salary"
            required
          />
        </div>

        {/* Input for Role */}
        <div className="inputGroup">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            value={user.role}
            onChange={inputHandler}
            id="role"
            name="role"
            autoComplete="off"
            placeholder="Enter role"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="inputGroup">
          <button type="submit">ADD USER</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
