//components
import ExploreGrid from '../ExploreGrid';

function Explore() {
    return (
        <section className='page explore'>
            <article className='page-header'>
                <h1>Welcome to the Explore Page</h1>
                <p>Select a data category to begin exploring the data.</p>
            </article>
            <ExploreGrid />
        </section>
    );
}

export default Explore;
