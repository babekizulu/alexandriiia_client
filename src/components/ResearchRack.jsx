//components
import Link from './Link';

function ResearchRack({ topics}) {
    const renderedTopics = topics.map((topic) => {
        return (
            <li key={topic.id}>
                <Link href={`/research/${topic.id}`}>
                <div className="topic-metadata">
                    <h3>{topic.name}</h3>
                    <p>Started: {topic.started}</p>
                    <p>Last Updated: {topic.updated}</p>
                    <p>Status: {topic.status}</p>
                </div>
                <div className='thumbnail-container'>
                        <img src={topic.thumbnail} alt={topic.name} />
                    </div>
                </Link>
            </li>
        )
    });

    return (
        <section className="research-rack">
            <nav>
                <ul>
                    {renderedTopics}
                </ul>
            </nav>
        </section>
    )
}

export default ResearchRack;
