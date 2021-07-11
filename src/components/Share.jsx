import './share.scss';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useTheme } from '../context/ThemeContext';
import Button from '@material-ui/core/Button';
import ImageIcon from '@material-ui/icons/Image';
import { useAuth } from '../context/AuthContext';
import usePF from '../hooks/usePF';

const Share = (props) => {
  const {user} = useAuth()
  const {glass2} = useTheme()
  const PF = usePF()
  return (
    <section className="share">
      <div className={`shareWrapper ${glass2}`}>

          <div className="shareHeader">
              <img src={PF+user.profilePicture} alt="" className="shareImg" />
              <form noValidate autoComplete="off">
                <textarea placeholder={"What's on your mind "+user.username}  className={`shareTextField ${glass2}`} id="" cols="56.5" rows="57"></textarea>
              </form>
          </div>

          <div className="shareBottom">
             
              <label htmlFor="file-upload" className="shareImageLabel"> <ImageIcon  type="file" className="shareImageIcon"/>choose img</label>
              <input type="file"  id="file-upload"/>
              <Button className="btnPost glass2" variant="contained" color="default">
                Post
              </Button>
          </div>

      </div>
    </section>
  );
};

export default Share;
