//components
import Link from './Link';

function SideBar() {
  return (
    <article className="side-bar">
      <nav>
        <ul>
          <li>
            <Link href='/dashboard' className='nav-item'>Dashboard</Link>
          </li>
          <li>
            <Link href="/profile" className='nav-item'>Profile</Link>
          </li>
          <li>
            <Link href="/sources" className='nav-item'>Sources</Link>
          </li>
          <li>
            <Link href="/analysis" className='nav-item'>Analysis</Link>
          </li>
          <li>
            <Link href="/weave" className='nav-item'>Weave</Link>
          </li>
          <li>
            <Link href="/timelines" className='nav-item'>Timelines</Link>
          </li>
          <li>
            <Link href="/delphii" className='nav-item'>DELPHiii</Link>
          </li>
        </ul>
      </nav>
    </article>
  );
};

export default SideBar;
