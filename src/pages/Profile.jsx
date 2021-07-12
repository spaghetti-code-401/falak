import Home from './Home';
import Header from '../components/Header';
import Feed from '../components/Feed';
import Post from '../components/Post';

import './profile.scss';
import Share from '../components/Share';
import SideBar from '../components/SideBar';
import usePF from '../hooks/usePF';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
import { useTheme } from '../context/ThemeContext';

const Profile = (props) => {
  const PF = usePF();
  const [user, setUser] = useState();
  const {glass, glass2, lightText} = useTheme()

  // take username from params (we defined it as /:username)
  const { username } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `https://api-social-mern.herokuapp.com/api/users?username=${username}`
      );
      setUser(res.data);
    };
    fetchUser();
  }, [username]);
  return (
    <>
      <Header />

      <div className="profileContainer">
        <div className={`profileLeft ${glass}`}>
          <section className="profile ">
            <div className="coverAndProfileImgs">
              <img
                className="coverImage"
                src="https://tipsmake.com/data1/thumbs/how-to-extract-img-files-in-windows-10-thumb-bzxI4IDgg.jpg"
                alt=""
              />
              <img
                className="profileImage"
                src="https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg"
                alt=""
              />
            </div>
            <div className="profileNameAndBio">
              <p className={`profileUserName ${lightText}`}>qais </p>
              <p className={`profileUserBio ${lightText}`}>Developer saffaaaaaa7</p>
            </div>
            <div className={`profileUserInfo ${glass2}`}>
              <p className={`${lightText}`}>City: Norway</p>
              <p className={`${lightText}`}>From: Philadelphia</p>
              <p className={`${lightText}`}>Relationship: -</p>
            </div>
          </section>
          <hr className="profileHr" />
          <Feed profile username={username} />
        </div>
        <SideBar user={user} />
      </div>
    </>
  );
};

//   return (
//     <>
//       <section className="profile">
//         <div className="coverAndProfile">
//           <img
//             className="coverImage"
//             src="https://tipsmake.com/data1/thumbs/how-to-extract-img-files-in-windows-10-thumb-bzxI4IDgg.jpg"
//             alt=""
//           />
//           <img
//             className="profileImage"
//             src="https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg"
//             alt=""
//           />
//           {/* <AccountCircleIcon className="profileImage"/> */}
//         </div>
//         <div className="profileName">
//           <p className="name">qais </p>
//           <p className="nickName">qais waleed ata</p>
//         </div>
//         <div className="profileDescription">
//           <p>city : Norway </p>
//           <p>relationships : lllll </p>
//           <p>more .... </p>
//         </div>
//         <Share className="profileShare" />
//       </section>
//       <SideBar user={user} />
//     </>
//   );
// };

export default Profile;
