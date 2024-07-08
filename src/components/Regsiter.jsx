import React, { useState } from 'react'
import axios from '../api';
import { useNavigate } from 'react-router-dom';
const Regsiter = () => {
    const [userObj, setUserobj] = useState({ username: '', password: '', first_name: '', last_name: '', email: '' });
    const [group, setGrup] = useState('');

    const navigate=useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('/user/student-register/', {
                user: userObj, group
            });
            console.log(response.data); 
            navigate('/login')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="container-reg">
            <form className="form" onSubmit={handleRegister}>
                <h2>Register</h2>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" onChange={e => setUserobj((prevUserObj) => ({
                        ...prevUserObj,
                        username: e.target.value
                    }))} id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" onChange={e => setUserobj((prevUserObj) => ({
                        ...prevUserObj,
                        password: e.target.value
                    }))} id="password" name="password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" onChange={e => setUserobj((prevUserObj) => ({
                        ...prevUserObj,
                        first_name: e.target.value
                    }))} id="firstname" name="firstname" required />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" onChange={e => setUserobj((prevUserObj) => ({
                        ...prevUserObj,
                        last_name: e.target.value
                    }))} id="lastname" name="lastname" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" onChange={e => setUserobj((prevUserObj) => ({
                        ...prevUserObj,
                        email: e.target.value
                    }))} id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="group">Group:</label>
                    <input type="text" onChange={e => setGrup(e.target.value)} id="group" name="group" required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Regsiter