import React, { useEffect, useState } from 'react';
import Post from './Post';
import Share from './Share';
import './feed.scss';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import useAPI from '../hooks/useAPI'

export default function Feed({ username, profile }) {
  const { glass } = useTheme();
  const { user } = useAuth();
  const [posts, setPosts] = useState();
  const API = useAPI()

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(
            `${API}posts/profile/${username}`
          )
        : await axios.get(
            `${API}posts/timeline/${user._id}`
          );
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id, API]);
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
