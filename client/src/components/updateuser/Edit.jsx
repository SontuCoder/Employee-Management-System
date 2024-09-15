import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import "../adduser/add.css";
import toast from 'react-hot-toast';

const Edit = () => {

 const initialUserState = {
    name:"",
    email: "",
    salary:"",
    role:""
 };

 const { id } = useParams();
 const navigate = useNavigate();
 const [user, setUser] = useState(initialUserState);

 // Handle input changes
 const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
 };

 // Fetch user data by ID when the component mounts
 useEffect(() => {
    axios.get(`http://localhost:7000/user/getUser/${id}`)  // Use the correct path here
    .then((response) => {
        setUser(response.data);
    })
    .catch((error) => {
        console.log(error);
        toast.error("Error fetching user data", { position: "top-right" });
    });
 }, [id]);

 // Submit updated user data
 const submitForm = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:7000/user/update/${id}`, user)
    .then((response) => {
       toast.success(response.data.msg, { position: "top-right" });
       navigate("/");  // Redirect to the home page after successful update
    })
    .catch(error => {
        console.log(error);
        toast.error("Error updating user", { position: "top-right" });
    });
 };

  return (
    <div className='addUser'>
        <Link to={"/"}>Back</Link>
        <h3>Update user</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="fname">First name</label>
                <input type="text" value={user.name || ""} onChange={inputChangeHandler} id="name" name="name" autoComplete='off' placeholder='Name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input type="email" value={user.email || ""} onChange={inputChangeHandler} id="email" name="email" autoComplete='off' placeholder='Email' />
            </div>
            <div className="inputGroup">
                <label htmlFor="salary">Salary</label>
                <input type="number" value={user.salary || ""} onChange={inputChangeHandler} id="salary" name="salary" autoComplete='off' placeholder='Salary' />
            </div>
            <div className="inputGroup">
                <label htmlFor="role">Role</label>
                <input type="text" value={user.role || ""} onChange={inputChangeHandler} id="role" name="role" autoComplete='off' placeholder='Role' />
            </div>
            <div className="inputGroup">
                <button type="submit">UPDATE USER</button>
            </div>
        </form>
    </div>
  );
};

export default Edit;
