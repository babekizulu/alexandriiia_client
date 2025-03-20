//libs
import {useState} from 'react';
import axios from 'axios';
//components
import Link from '../Link';
//videos
import video from '../videos/ALEXANDRiiiA.mp4';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const validatePassword = (password) => { 
        return password.length >= 8;
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
        if (isEmailValid && isPasswordValid) {
            try {
                const response = await axios.post('http://localhost:3000/signin', {
                    email,
                    password
                });
                if (response.status === 200) {
                    setSignedIn(true);
                    handleNavigation();
                } else {
                    setError('An error occurred while signing in. Please try again.');
                }
            } catch (error) {
                console.error('Error signing in:', error);
                setError('An error occurred while signing in. Please try again.');  
            }
        }
    }

    const handleNavigation = () => {
        window.history.pushState({}, '', '/confirm-email');
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <section className="page signin">
            <video className="home-video" src={video} autoPlay muted loop />
            <Link href='/' className='button back-button'>back</Link>
            <article className='registration-header-container'>
                <h1>sign in</h1>
                <p>welcome back! please sign in to continue</p>
            </article>
            <article className='registration-form-container'>
                <form onSubmit={handleSubmit}>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='email' />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='password' />
                    <button type='submit' className='button'>sign in</button>
                </form>
            </article>
        </section>
    )
}

export default SignIn;
