//components
import Link from './Link';

function WeaveRack({weaves}) {
    const renderedWeaves = weaves.map((weave) => {
        return (
            <li key={weave.id}>
                <Link href={`/weaves/${weave.id}`}>
                    <div className="weave-metadata">
                        <h3>{weave.name}</h3>
                        <p>Created: {weave.createdAt}</p>
                        <p>Updated: {weave.updatedAt}</p>
                </div>
                <div className="thumbnail-container">
                        <img src={weave.thumbnail} alt={weave.name} />
                    </div>
                </Link>
            </li>
        )
    })

    return (
        <section className="weave-rack">
            <nav>
                <ul>
                    {renderedWeaves}
                </ul>
            </nav>
        </section>
    )
}

export default WeaveRack;