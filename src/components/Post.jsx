import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './post.scss';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';

const Post = ({ postImg }) => {
  return (
    <section className="postSection glass2">
      <div className="postLeft">
        <img src="/images/test.jpg" alt="" className="postUserImg" />
      </div>
      <div className="postRight">
        <div className="postHeader">
          {/* <AccountCircleIcon className="avatarIconPost" /> */}
          <div className="postHeaderInfo">
            <p className="postHeaderUsername">Ghazal Familyname</p>
            <p className="postHeaderDate">2 minutes ago</p>
          </div>
        </div>
        <div className="postMain">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            distinctio sequi maiores minima, expedita tempore unde ducimus quam
            incidunt iste omnis atque dolorem,
          </p>
          {postImg && <img className="glass2" src={postImg} alt="" />}
        </div>
        <div className="postFooter">
          <ThumbUpAltIcon className="postFooterIcon" />
          <p>2 likes</p>
          <CommentIcon className="postFooterIcon" />
          <p>0 comment</p>
        </div>
      </div>
    </section>
  );
};

export default Post;
