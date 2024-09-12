import React from 'react';
import {Link} from "react-router-dom";


const AddUser = () => {
    return (
        <div className='addUser'>
            <Link to={"/"}>Back</Link>
            <h3>Add new user</h3>
            <form>
                <div className='inputGroup'>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="text" id='name' name='name' autoComplete='off' placeholder="Name"/>
                    <label htmlFor="pass">
                        Password
                    </label>
                    <input type="password" id='pass' name='pass' autoComplete='off' placeholder="Password"/>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" id='email' name='email' autoComplete='off' placeholder="Email"/>
                    <label htmlFor="salary">
                        Salary
                    </label>
                    <input type="text" id='salary' name='salary' autoComplete='off' placeholder="Salary"/>
                    <label htmlFor="role">
                        Role
                    </label>
                    <input type="text" id='role' name='role' autoComplete='off' placeholder="Role"/>
                </div>
            </form>
        </div>
    )
}

export default AddUser
