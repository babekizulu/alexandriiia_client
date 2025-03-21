//components
import Link from './Link';
//icons
import logo from './icons/alexandriiia_58x58.svg';

function Logo() {
    return (
        <Link href="/" className="logo">
            <img src={logo} alt="logo" />
        </Link>
    )
}

export default Logo;