import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css'; 

function Signin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); 

        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        const data = await response.json();

        if (data.token) {
            localStorage.setItem('token', data.token);
            navigate('/');
        } else {
            alert('Login failed!');
        }
    };

    return (
        <div className="signin-container">
            <form className="signin-form" onSubmit={handleLogin}>
                <p className='signin-label'> Sign In</p>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default Signin;
