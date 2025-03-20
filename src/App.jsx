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
//hooks
import useALXContext from './hooks/use-alx-context';

function App() {
    const {researchTopics, signedIn} = useALXContext();
    const renderedResearchTopics = researchTopics.map((topic) => {
        return (
            <Route path={`/research/${topic.id}`} key={topic.id}>
                <ResearchTopic name={topic.name} description={topic.description} />
            </Route>
        )
    });

    return (
        <main className="app">
            <Header />
            <Route path="/">
                <Home />
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
            {renderedResearchTopics}
            {signedIn && <SideBar />}
            {signedIn && <BottomBar />}
        </main>
    )
}

export default App;
