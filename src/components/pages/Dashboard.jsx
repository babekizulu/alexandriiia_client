//components
import ResearchRack from '../ResearchRack';
import WeaveRack from '../WeaveRack';
//hooks
import useALXContext from '../../hooks/use-alx-context';

function Dashboard() {
    const {researchTopics, weaves, user} = useALXContext();
    return (
        <section className="page dashboard">
            <article className="profile-picture-container">
                <img src={user.profilePicture} alt="profile" />
            </article>
            <article className="profile-name-container">
                <h2>{user.name}</h2>
                <p>{user.handle}</p>
            </article>

            <article className='gallery-header'>
                <h1>Research Topics</h1>
            </article>
            <ResearchRack topics={researchTopics} />
            <article className='gallery-header'>
                <h1>Weaves</h1>
            </article>
            <WeaveRack weaves={weaves} />
        </section>
    )
}

export default Dashboard;
