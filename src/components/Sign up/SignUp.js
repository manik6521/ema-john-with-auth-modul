import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
    ] = useCreateUserWithEmailAndPassword(auth)
    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }

    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value)
    }
    if (user) {
        navigate('/shop')
    }
    const handleCreateUser = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("your two password ")
            return
        }
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div>
            <div className="form-container">
                <form onSubmit={handleCreateUser}>
                    <h2>Sign Up</h2>
                    <div className="input-group">
                        <label htmlFor='Email'>
                            Email:
                        </label>
                        <input type="email" name='email' placeholder='email' onBlur={handleEmailBlur} id='' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>
                            Password:
                        </label>
                        <input type="password" name='password' placeholder='password' onBlur={handlePasswordBlur} id='' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='confirm-password'>
                            Confirm Password:
                        </label>
                        <input type="password" name='confirm-password' onBlur={handleConfirmPasswordBlur} placeholder='confirm-password' id='' required />
                    </div>

                    <input className='form-submit' type="submit" value="Sign Up" />

                    <p> Already have  an account? <Link className='form-link' to="/Login"> Log in</Link></p>

                    <p style={{ color: 'white' }}>{error}</p>
                    <button id='google'>Continue with Google</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;