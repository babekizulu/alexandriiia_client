//components
import Link from './Link';

function NavBar() {
  return (
    <article className="top-bar">
        <nav>
            <ul>
                <li>
                    <Link href="/">File</Link>
                </li>
                <li>
                    <Link href="/">Edit</Link>
                </li>
                <li>
                    <Link href="/">View</Link>
                </li>
                <li>
                    <Link href="/">Help</Link>
                </li>
            </ul>
        </nav>
    </article>
  );
};

export default NavBar;
