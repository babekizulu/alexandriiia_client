function AuthBtn({href, setIsLoggedIn, isLoggedIn, children}) {

    //handlers
    const onClickHandler = (e) => {
        if(e.metaKey || e.ctrlKey) {
            return true;
        }
      
        e.preventDefault();

        setIsLoggedIn(!isLoggedIn);

        window.history.pushState({}, '', href);
    
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
  return (
    <a href={href} onClick={onClickHandler}>{children}</a>
  )
}

export default AuthBtn;
