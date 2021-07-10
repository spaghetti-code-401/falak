import React from 'react';
import './onlineFriends.scss';

export default function OnlineFriends() {
  return (
    <div className="onlineFriends">
      <h3 className="onlineFriendsHeader">Online Friends:</h3>

      <div className="onlineFriend">
        <img
          className="onlineFriendPic"
          src="/images/test.jpg"
          alt=""
        />
        <div className="greenDot"></div>
        <p className="userName">username</p>
      </div>
    </div>
  );
}
