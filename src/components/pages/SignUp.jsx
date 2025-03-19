//libs
import {useState, useEffect} from 'react';
import axios from 'axios';
//videos
import video from '../videos/ALEXANDRiiiA.mp4';

function SignUp() {
    //state management
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validated, setValidated] = useState(false);

    //validation
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
      
    const validateName = (name) => {
        const nameRegex = /^[A-Za-z]{2,}$/; // At least 2 letters, no numbers or special characters
        return nameRegex.test(name);
    };
      
    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return passwordRegex.test(password);
    };
      
    //handlers
    const handleSubmit = (e) => {
        e.preventDefault();
        const isEmailValid = validateEmail(email);
        const isNameValid = validateName(firstName) && validateName(lastName);
        const isPasswordValid = validatePassword(password) && password === confirmPassword;
        setValidated(isEmailValid && isNameValid && isPasswordValid);
        
        if (isEmailValid && isNameValid && isPasswordValid) {
            handleNavigation();
        }
    }

    const handleNavigation = () => {
        window.history.pushState({}, '', '/confirm-email');
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <section className="page signup">
            <video className="home-video" src={video} autoPlay muted loop />
            <article className='registration-header-container'>
                <h1>sign up</h1>
                <p>create an account to get started</p>
            </article>
            <article className='registration-form-container'>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='first name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <input type='text' placeholder='last name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type='password' placeholder='confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <button type='submit' className='button'>sign up</button>
                </form>
            </article>
        </section>
    )
}

export default SignUp;
