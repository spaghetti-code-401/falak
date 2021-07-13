import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import OnlineFriends from './OnlineFriends';
import './sideBar.scss';
import usePF from '../hooks/usePF';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { Add, Remove } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import useAPI from '../hooks/useAPI';

export default function SideBar({ user }) {
  const { glass, glass2, lightText } = useTheme();
  const PF = usePF();
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useAuth();
  const [followed, setFollowed] = useState(false);
  const API = useAPI();

  useEffect(() => {
    setFollowed(currentUser.following.includes(user?._id));
  }, [currentUser, user?._id]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get(
          `${API}users/friends/${user ? user?._id : currentUser._id}`
        );
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [API, currentUser._id, user]);

  const handleFollow = async (e) => {
    try {
      if (followed) {
        await axios.put(`${API}users/${user._id}/unfollow`, {
          userId: currentUser._id
        });
        dispatch({ type: 'UNFOLLOW', payload: user._id });
      } else {
        await axios.put(`${API}users/${user._id}/follow`, {
          userId: currentUser._id
        });
        dispatch({ type: 'FOLLOW', payload: user._id });
      }
    } catch (err) {
      console.log(err);
    }
    setFollowed(!followed);
  };

  function HomeSidebar() {
    console.log(friends);
    return (
      <>
        <h4 className={`sidebarTitle ${lightText}`}>Online Friends</h4>
        {!friends.length && (
          <p className={`sidebarNoFriendsHome ${lightText}`}>
            It's lonely in here 😢
          </p>
        )}
        <div className="sidebarFriendList">
          {friends.map((f) => (
            <OnlineFriends key={f._id} user={f} />
          ))}
        </div>
      </>
    );
  }

  function ProfileSidebar() {
    return (
      <>
        {user.username !== currentUser.username && (
          <button
            className={`sidebarFollowButton ${glass2} ${lightText}`}
            onClick={handleFollow}>
            {followed ? 'Unfollow' : 'Follow'}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        {/* <h4 className="sidebarTitle">User Info</h4>
        <div className="sidebarInfo">
          <div className="sidebarInfoItem">
            <p className="sidebarInfoKey">City: </p>
            <p className="sidebarInfoValue">{user.city}</p>
          </div>
          <div className="sidebarInfoItem">
            <p className="sidebarInfoKey">From: </p>
            <p className="sidebarInfoValue">{user.from}</p>
          </div>
          <div className="sidebarInfoItem">
            <p className="sidebarInfoKey">Relationship: </p>
            <p className="sidebarInfoValue">
              {user.relationship === 1
                ? 'Single'
                : user.relationship === 2
                ? 'In a relationship'
                : 'Complicated'}
            </p>
          </div>
        </div> */}
        <h4 className={`sidebarTitle ${lightText}`}>Following</h4>
        {!friends.length && (
          <p className={`sidebarNoFriends ${lightText}`}>
            It's lonely in here 😢
          </p>
        )}
        <div className="sidebarFollowing">
          {friends.map((f) => (
            <Link
              key={f._id}
              to={`/profile/${f.username}`}
              style={{ textDecoration: 'none' }}>
              <div className="sidebarFollowingPerson">
                <img
                  src={
                    f.profilePicture
                      ? PF + f.profilePicture
                      : PF + 'person/noAvatar.png'
                  }
                  alt=""
                  className="sidebarFollowingImg"
                />
                <p className={`sidebarFollowingName ${lightText}`}>{f.username}</p>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  }
  return (
    <div className={`sideBar ${glass}`}>
      {user ? <ProfileSidebar /> : <HomeSidebar />}
    </div>
  );
}
