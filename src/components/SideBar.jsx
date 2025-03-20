//components
import Link from './Link';

function SideBar() {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li>
                        <Link href='/dashboard' className='sidebar-link'>
                            dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href='/profile' className='sidebar-link'>
                            profile
                        </Link>
                    </li>
                    <li>
                        <Link href='/pool' className='sidebar-link'>
                            pool
                        </Link>
                    </li>
                    <li>
                        <Link href='/research' className='sidebar-link'>
                            research
                        </Link>
                    </li>
                    <li>
                        <Link href='/weaver' className='sidebar-link'>
                            weaver
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default SideBar;
