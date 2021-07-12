import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './post.scss';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import { useTheme } from '../context/ThemeContext';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import usePF from '../hooks/usePF';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import useAPI from '../hooks/useAPI';

const Post = ({ post }) => {
  const { glass2, lightText } = useTheme();
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useAuth();
  const PF = usePF();
  const API = useAPI();

  async function likeHandler() {
    try {
      await axios.put(`${API}posts/${post._id}/like`, {
        userId: currentUser._id
      });
    } catch (err) {
      console.log(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${API}users?userId=${post.userId}`);
      // console.log(res.data);
      setUser(res.data);
    };
    fetchUser();
  }, [API, post.userId]);

  return (
    <section className={`postSection ${glass2}`}>
      <div className="postLeft">
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + 'person/noAvatar.png'
            }
            alt=""
            className="postUserImg"
          />
        </Link>
      </div>
      <div className="postRight">
        <div className="postHeader">
          {/* <AccountCircleIcon className="avatarIconPost" /> */}
          <div className="postHeaderInfo">
            <Link to={`/profile/${user.username}`}>
              <p className={`postHeaderUsername ${lightText}`}>
                {user.username}
              </p>
            </Link>
            <p className={`postHeaderDate ${lightText}`}>
              {format(post.createdAt)}
            </p>
          </div>
        </div>
        <div className="postMain">
          <p className={lightText}>{post?.desc}</p>
          {post?.img && <img className={glass2} src={PF + post?.img} alt="" />}
        </div>
        <div className="postFooter">
          <ThumbUpAltIcon
            className={`postFooterIcon ${lightText}`}
            onClick={likeHandler}
          />
          <p className={lightText}>{like}</p>
          {/* <CommentIcon className={`postFooterIcon ${lightText}`} />
          <p className={lightText}>0 comment</p> */}
        </div>
      </div>
    </section>
  );
};

export default Post;
