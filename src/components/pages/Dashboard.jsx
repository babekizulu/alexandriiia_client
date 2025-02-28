//components
import Link from '../Link';

function Dashboard() {
  return (
    <section className="page">
      <article className='hero'>
      <h1>Welcome to ALEXANDRiiiA</h1>
      <p>
        ALEXANDRiiiA is an historians toolbox.
      </p>
      <p>Our tools are designed to help historians analyze sources, weave narratives, and create a cohesive narrative.</p>
      <Link href='/analysis' className='button'>Get Started</Link>
      </article>
    </section>
  )
}

export default Dashboard;
