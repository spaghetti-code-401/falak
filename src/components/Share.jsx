import './share.scss';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useTheme } from '../context/ThemeContext';
import Button from '@material-ui/core/Button';
import ImageIcon from '@material-ui/icons/Image';
import { useAuth } from '../context/AuthContext';
import usePF from '../hooks/usePF';
import { useRef, useState } from 'react';
import axios from 'axios';
import { Cancel } from '@material-ui/icons';

const Share = (props) => {
  const { user } = useAuth();
  const { glass2, lightText } = useTheme();
  const PF = usePF();
  const postDesc = useRef();
  const [file, setFile] = useState(null);

  console.log(file);

  async function submitHandler(e) {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: postDesc.current.value
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append('file', file);
      data.append('name', fileName);

      newPost.img = fileName;
    }

    try {
      await axios.post(
        'https://api-social-mern.herokuapp.com/api/posts',
        newPost
      );
      // instead of reloading window, update post state
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <section className="share">
      <div className={`shareWrapper ${glass2}`}>
        <div className="shareHeader">
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + 'person/noAvatar.png'
            }
            alt=""
            className="shareImg"
          />
          <input
            placeholder={`What's on your mind ${user.username}?`}
            className={`shareInput ${lightText}`}
            ref={postDesc}
          />

          {/* <form noValidate autoComplete="off">
            <textarea
              placeholder={"What's on your mind " + user.username}
              className={`shareTextField ${glass2}`}
              id=""
              cols="56.5"
              rows="57"></textarea>
          </form> */}
        </div>

        {file && (
          <div className="shareFileContainer">
            <img src={URL.createObjectURL(file)} alt="" className="shareFile" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}

        <form className="shareBottom" onSubmit={submitHandler}>
          <label htmlFor="file-upload" className={`shareImageLabel ${lightText}`}>
            <ImageIcon type="file" className={`shareImageIcon ${lightText}`} />
            Choose file
            <input
              style={{ display: 'none' }}
              type="file"
              id="file-upload"
              accept=".png,.jpeg,.jpg,.gif"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
          <Button
            type="submit"
            className={`btnPost ${glass2} ${lightText}`}
            variant="contained"
            style={{borderRadius: '10px'}}
            color="default">
            Share
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Share;
