//components
import Link from '../Link';
import Footer from '../Footer';
function Home() {
  return (
    <section className="home">
      <article className='hero'>
        <h1>let's go to the future,</h1>
        <h1>or the past,</h1>
        <h1>or where ever you want to go.</h1>
      </article>
      <article className='registration-buttons-container'>
        <Link href='/signup' className='button'>Sign Up</Link>
        <Link href='/signin' className='button'>Sign In</Link>
      </article>
      <Footer />
    </section>
  )
}

export default Home;
