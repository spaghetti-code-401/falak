import './app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Share from './components/Share';
import Post from './components/Post';

import SideBar from './components/SideBar';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Background from './components/Background';
import { useTheme } from './context/ThemeContext';
import Chat from './pages/Chat';
import { useAuth } from './context/AuthContext';

function App() {
  const { background } = useTheme();
  const {user} = useAuth()
  return (
    <>
      <div className={background}>

      </div>
      <Background />
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Redirect to="/signin" />}
          </Route>
          <Route exact path="/signin">
            {user ? <Redirect to="/" /> : <SignIn />}
          </Route>
          <Route exact path='/signup'>
            <SignUp />
          </Route>
          <Route exact path="/profile/:username">
            <Profile />
          </Route>
          <Route exact path="/chat">
            <Chat />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
