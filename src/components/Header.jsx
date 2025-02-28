//components
import Logo from './Logo';
import AuthBtn from './buttons/AuthBtn';
function Header({isLoggedIn, setIsLoggedIn}) {
  return (
    <header className="header">
      <Logo isLoggedIn={isLoggedIn}/>
      {isLoggedIn?<AuthBtn href='/' className='button' setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}>Sign Out</AuthBtn>:''}
    </header>
  )
}

export default Header;
