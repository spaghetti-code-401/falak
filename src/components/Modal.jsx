import './modal.scss'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height:500
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    // display: 'flex',
    // flexDirection: 'row',
  },
}));

function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{display: 'flex'}}>
      <AccountCircleIcon className="avatarIconShare" />
                <form noValidate autoComplete="off">
                    <TextField id="standard-basic" label="star a post"  onClick={handleOpen}  />
                </form>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}  style={{height: 250, width: 400}}>
            <div className={`${classes.paper} modalCard`}>
                      <h3>create a post</h3>
                      <AccountCircleIcon className="avatarIconShare" />
                      <textarea type="text" placeholder="What do you want to share" className="searchHeaderInput" />
                      <Button
                       variant="contained" 
                       color="primary">Post
                      </Button>

            </div>
        </Fade>
      </Modal>
    </div>
  );
}


export default TransitionsModal