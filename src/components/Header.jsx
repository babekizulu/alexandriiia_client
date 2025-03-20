//components
import Logo from './Logo';
import Link from './Link';

//hooks
import useALXContext from '../hooks/use-alx-context';

function Header() {
    const {signedIn} = useALXContext();
    return (
        <header className="header">
            <Logo />
            {signedIn ? (
                <Link href='/' className='sign-out-button'>
                    sign out
                </Link>
            ) : ''}
        </header>
    )
}

export default Header;