//libs
import { useState } from 'react';

//components
import WeaveRack from '../WeaveRack';

function Profile() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    sourcesAnalyzed: 100,
    narrativesGenerated: 100,
    weavesCreated: 100,
    followers: 100,
    following: 100,
    weaves: [
      {
        id: 1,
        title: 'Weave 1',
        description: 'Weave 1 description',
        createdAt: '2025-02-28',
        updatedAt: '2025-02-28',
        tags: ['tag1', 'tag2', 'tag3'],
      },
      {
        id: 2,
        title: 'Weave 2',
        description: 'Weave 2 description',
        createdAt: '2025-02-28',
        updatedAt: '2025-02-28',
        tags: ['tag1', 'tag2', 'tag3'],
      },
      {
        id: 3,
        title: 'Weave 3',
        description: 'Weave 3 description',
        createdAt: '2025-02-28',
        updatedAt: '2025-02-28',
        tags: ['tag1', 'tag2', 'tag3'],
      },
    ],
  });

  //handlers


  return (
    <section className="page">
      <article className='profile-picture-container'>
        <img src='https://picsum.photos/200' alt="profile" />
      </article>
      <article className='profile-info-container'>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </article>
      <article className='profile-metrics-container'>
        <p>Sources Analyzed: {user.sourcesAnalyzed}</p>
        <p>Narratives Generated: {user.narrativesGenerated}</p>
        <p>Weaves Created: {user.weavesCreated}</p>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
      </article>
      <WeaveRack weaves={user.weaves} />
    </section>
  );
};

export default Profile;
