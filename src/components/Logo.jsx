//components
import Link from './Link';

function Logo({isLoggedIn}) {
  return (
    <Link href={isLoggedIn ? '/dashboard' : '/'} className="logo">
      ALEXANDRiiiA
    </Link>
  )
}   

export default Logo;
