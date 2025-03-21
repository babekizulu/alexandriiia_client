//components
import Header from './components/Header';
import Route from './components/Route';
import SideBar from './components/SideBar';
import BottomBar from './components/BottomBar';
import ResearchTopic from './components/ResearchTopic';
//pages
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Dashboard from './components/pages/Dashboard';
import Research from './components/pages/Research';
import Explore from './components/pages/Explore';
import MechanicalInventions from './components/pages/MechanicalInventions';
import Sources from './components/pages/Sources';
import Help from './components/pages/Help';

function App() {
    return (
        <main className="app">
            <Header />
            <Route path="/">
                <Home />
            </Route>
            <Route path="/explore">
                <Explore />
            </Route>
            <Route path="/mechanical-inventions">
                <MechanicalInventions />
            </Route>
            <Route path="/sources">
                <Sources />
            </Route>
            <Route path="/help">
                <Help />
            </Route>
            <Route path="/signup">
                <SignUp />
            </Route>
            <Route path="/signin">
                <SignIn />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route path="/research">
                <Research />
            </Route>
            <BottomBar />
        </main>
    )
}

export default App;
