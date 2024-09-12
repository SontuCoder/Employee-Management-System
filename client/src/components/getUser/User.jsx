import React from 'react';
import { Link } from 'react-router-dom';
import "./User.css";

const User = () => {
    return (
        <div className='userTable'>
            <Link to={"/add"} id='addButton'>Add User</Link>
            <table className='table' border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>S.No.</th> 
                        <th>Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>Sontu</td>
                        <td>sontu@gmail.com</td>
                        <td>12000</td>
                        <td>Manager</td>
                        <td>
                            <button id='deleteButton'>Delete</button>
                            <Link id="editButton" to={"/edit"}>Edit</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default User
