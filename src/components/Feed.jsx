import React, { useEffect, useState } from 'react';
import Post from './Post';
import Share from './Share';
import './feed.scss';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

export default function Feed({ username, profile }) {
  const { glass } = useTheme();
  const { user } = useAuth();
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(
            `https://api-social-mern.herokuapp.com/api/posts/profile/${username}`
          )
        : await axios.get(
            `https://api-social-mern.herokuapp.com/api/posts/timeline/${user._id}`
          );
      console.log(res.data);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);
  return (
    // profileFeed class to fix a scrolling issue
    <div className={profile ? 'feed profileFeed' : `feed ${glass}`}>
      {(!username || username === user.username) && (
        <>
          <Share />
          <hr className="feedHr" />
        </>
      )}
      {posts && posts.map((p) => <Post key={p._id} post={p} />)}
    </div>
  );
}
