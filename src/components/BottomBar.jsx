//components
import Link from './Link';
import { FaCompass, FaBook, FaQuestion, FaHome } from 'react-icons/fa';

function BottomBar() {
    return (
        <footer className="bottom-bar">
            <nav>
                <ul>
                    <li>
                        <Link href='/'>
                            <FaHome className='icon'/>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/explore'>
                            <FaCompass className='icon'/>
                            <span>Explore</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/sources'>
                            <FaBook className='icon'/>
                            <span>Sources</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/help'>
                            <FaQuestion className='icon'/>
                            <span>Help</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default BottomBar;
