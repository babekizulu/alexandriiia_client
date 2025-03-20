//components
import ResearchRack from '../ResearchRack';
//hooks
import useALXContext from '../../hooks/use-alx-context';

function Research() {
    const {researchTopics} = useALXContext();
    return (
        <section className="page split-page">
            <article className='page-header'>
                <h1>Research</h1>
            </article>
            <article className='gallery-header'>
                <h1>Research Topics</h1>
            </article>
            <ResearchRack topics={researchTopics} />
        </section>
    )
}

export default Research;
