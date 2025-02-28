//components
import AuthBtn from '../buttons/AuthBtn';
import Link from '../Link';

function SignUp({setIsLoggedIn}) {
  return (
    <section className="page">
      <Link href='/' className='button'>Back</Link>
      <h1>Sign Up</h1>
      <p>Create an account to get started</p>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <AuthBtn href="/dashboard" setIsLoggedIn={setIsLoggedIn}>Sign Up</AuthBtn>
      </form>
      <p>Already have an account? <Link href="/signin">Sign In</Link></p>
    </section>
  )
}

export default SignUp;
