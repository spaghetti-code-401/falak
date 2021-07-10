import './css/app.scss'

import Header from './components/Header';
import Share from './components/Share';
import Profile from './components/Profile'
import Post from './components/Post'


import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">

     {/* <Header /> */}

     {/* <Share /> */}
     {/* <Profile /> */}
     <Post />

     <Share />

     <SideBar/>


    </div>
  );
}

export default App;
