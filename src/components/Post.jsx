import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../css/post.scss'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';

const Post = (props) => {

    return (
        <section className="postSection">
            <div className="postHeader">
                <AccountCircleIcon className="avatarIconPost"/>
                <div className="postName">
                    <p>Ghazal</p>
                    <p>2 minutes ago</p>
                </div>                
            </div>
            <div className="postMain">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio sequi maiores minima, expedita tempore unde ducimus quam incidunt iste omnis atque dolorem,</p>
                <img src="https://www.eschoolnews.com/files/2021/02/coding-platform-STEM-code.jpg" alt="" />
            </div>
            <div className="postFooter">
                < ThumbUpAltIcon /> 
                <p>2 likes</p>
                <CommentIcon />
                <p>0 comment</p>
            </div>

        </section>
    )
}

export default Post 