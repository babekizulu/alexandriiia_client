//components
import Header from './components/Header';
import Route from './components/Route';
//pages
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';

function App() {
    return (
        <main className="app">
            <Header />
            <Route path="/">
                <Home />
            </Route>
            <Route path="/signup">
                <SignUp />
            </Route>
        </main>
    )
}

export default App;
