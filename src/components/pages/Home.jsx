//components
import Link from '../Link';
//videos
import video from '../videos/ALEXANDRiiiA.mp4';
function Home() {
    return (
        <section className="page home">
            <video className="home-video" src={video} autoPlay muted loop />
            <article className="hero-text">
                <h1>let's go to the past,</h1>
                <h1>or the future...</h1>
                <h1>or where ever you want.</h1>
            </article>
            <article className='coming-soon'>
                <h1>coming soon</h1>
            </article>
            {/* <article className="registration-container">
                <Link href='/signup' className='button'>sign up</Link>
                <Link href='/signin' className='button'>sign in</Link>
            </article> */}
        </section>
    )
}

export default Home;