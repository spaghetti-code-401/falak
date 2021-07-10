import './app.scss';

import Header from './components/Header';
import Home from './pages/Home';
import Share from './components/Share';
import Post from './components/Post';

import SideBar from './components/SideBar';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Background from './components/Background';
function App() {
  return (
    <>
      <Background />
      <Home />
      {/* <SignIn/> */}
      {/*<SignUp/> */}
      {/* <Profile /> */}
    </>
  );
}

export default App;
