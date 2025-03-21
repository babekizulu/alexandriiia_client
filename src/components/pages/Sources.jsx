//libs
import sources from '@alexandriiia/sources';
//components
import SourcesDataCard from '@components/datacards/SourcesDataCard';

function Sources() {
    //mapped data
    const renderedSources = sources.map(source => {
        return (
            <SourcesDataCard key={source.source_id} {...source} />
        );
    });
    return (
        <section className='page sources'>
            <article className='page-header'>
                <h1>Sources</h1>
                <p>
                    Here are the sources for the data used in the app.
                </p>
            </article>
            <article className='data-grid'>
                {renderedSources}
            </article>
        </section>
    )
}

export default Sources;
