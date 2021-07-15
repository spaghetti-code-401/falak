import Header from '../components/Header';
import Feed from '../components/Feed';

import './profile.scss';
import SideBar from '../components/SideBar';
import usePF from '../hooks/usePF';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
import { useTheme } from '../context/ThemeContext';
import useAPI from '../hooks/useAPI';

const Profile = (props) => {
  const PF = usePF();
  const [user, setUser] = useState();
  const { glass, glass2, lightText } = useTheme();
  const API = useAPI()

  // take username from params (we defined it as /:username)
  const { username } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `${API}users?username=${username}`
      );
      setUser(res.data);
    };
    fetchUser();
  }, [API, username]);
  return (
    <>
      <Header />

      <div className="profileContainer">
        <div className={`profileLeft ${glass}`}>
          <section className="profile ">
            <div className="coverAndProfileImgs">
              <img
                className="coverImage"
                src={
                  user?.coverPicture
                    ? PF + user.coverPicture
                    : PF + 'post/2.jpg'
                }
                alt=""
              />
              <img
                className="profileImage"
                src={
                  user?.profilePicture
                    ? PF + user.profilePicture
                    : PF + 'person/noAvatar.png'
                }
                alt=""
              />
            </div>
            <div className="profileNameAndBio">
              <p className={`profileUserName ${lightText}`}>{user?.username}</p>
              <p className={`profileUserBio ${lightText}`}>{user?.bio}</p>
            </div>
            <div className={`profileUserInfo ${glass2}`}>
              <p className={`${lightText}`}>City: {user?.city}</p>
              <p className={`${lightText}`}>From: {user?.from}</p>
              <p className={`${lightText}`}>
                Relationship:{' '}
                {user?.relationship === 1
                  ? 'Single'
                  : user?.relationship === 2
                  ? 'Married'
                  : '-'}
              </p>
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

export default Profile;
