import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Login.css"
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleUserSignIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate("/shop")
    }
    return (
        <div>

            <div className="form-container">
                <form onSubmit={handleUserSignIn}>
                    <h2>Login</h2>
                    <div className="input-group">
                        <label htmlFor='Email'>
                            Email:
                        </label>
                        <input onBlur={handleEmailBlur} type="email" name='email' placeholder='email' id='' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>
                            Password:
                        </label>
                        <input onBlur={handlePassword} type="password" email="password"
                            placeholder='password' id='' required />
                    </div>

                    <input className='form-submit' type="submit" value="login" />

                    <p> New to ema-john? <Link className='form-link' to="/signup"> Create an account</Link></p>

                    <p>
                        {error?.message}
                    </p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <button id='google'>Continue with Google</button>
                </form>
            </div>
        </div>
    );
};

export default Login;