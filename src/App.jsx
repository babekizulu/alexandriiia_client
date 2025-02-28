//libs
import {useState} from 'react';
//components
import Header from './components/Header';
import Route from './components/Route';
import SideBar from './components/SideBar';
import BottomBar from './components/BottomBar';
//pages
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Dashboard from './components/pages/Dashboard';
import Profile from './components/pages/Profile';
import Sources from './components/pages/Sources';
import Analysis from './components/pages/Analysis';
import Weave from './components/pages/Weave';
import Timelines from './components/pages/Timelines';
import DELPHiii from './components/pages/DELPHiii';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sources, setSources] = useState([
    {
      id: 1,
      name: 'Source 1',
      format: 'csv',
      data: 'This is the data for Source 1'
    },
    {
      id: 2,
      name: 'Source 2',
      format: 'csv',
      data: 'This is the data for Source 2'
    },
    {
      id: 3,
      name: 'Source 3',
      format: 'csv',
      data: 'This is the data for Source 3'
    },
  ]);
 
  console.log(isLoggedIn);

  return (
    <main className='app'>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      {isLoggedIn?<SideBar />:''}
      <Route path='/'>
        <Home />
      </Route>
      <Route path='/signin'>
        <SignIn setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
      </Route>
      <Route path='/signup'>
        <SignUp setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
      </Route>
      <Route path='/dashboard'>
        <Dashboard isLoggedIn={isLoggedIn}/>
      </Route>
      <Route path='/profile'>
        <Profile />
      </Route>
      <Route path='/sources'>
        <Sources sources={sources} setSources={setSources}/>
      </Route>
      <Route path='/analysis'>
        <Analysis sources={sources} />
      </Route>
      <Route path='/weave'>
        <Weave />
      </Route>
      <Route path='/timelines'>
        <Timelines />
      </Route>
      <Route path='/delphii'>
        <DELPHiii />
      </Route>
      {isLoggedIn?<BottomBar />:''}
    </main>
  );
};

export default App;
