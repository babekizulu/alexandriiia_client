//components
import NavBar from './NavBar';
import SearchBar from './SearchBar';

function BottomBar() {
  return (
    <article className="bottom-bar">
        <NavBar />
        <SearchBar />
        <button>X</button>
    </article>
  );
};

export default BottomBar;
