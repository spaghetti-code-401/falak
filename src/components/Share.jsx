import './share.scss'
import TransitionsModal from './Modal';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const Share = (props) => {

    return (
        <section className="share" >
            <div className="shareWrapper glass2" >
                <TransitionsModal />
            </div>    
        </section>
    )
}

export default Share 