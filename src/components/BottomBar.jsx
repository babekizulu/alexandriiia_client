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
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href='/explore'>
                            <FaCompass className='icon'/>
                            Explore
                        </Link>
                    </li>
                    <li>
                        <Link href='/sources'>
                            <FaBook className='icon'/>
                            Sources
                        </Link>
                    </li>
                    <li>
                        <Link href='/help'>
                            <FaQuestion className='icon'/>
                            Help
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default BottomBar;
