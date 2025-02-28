//components
import AuthBtn from '../buttons/AuthBtn';
import Link from '../Link';

function SignIn({setIsLoggedIn}) {
  return (
    <section className="page">
      <Link href='/' className='button'>Back</Link>
      <h1>Sign In</h1>
      <p>Sign in to your account to continue</p>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <AuthBtn href="/dashboard" setIsLoggedIn={setIsLoggedIn}>Sign In</AuthBtn>
      </form>
      <p>Don't have an account? <Link href="/signup">Sign Up</Link></p>
    </section>
  )
}

export default SignIn;
