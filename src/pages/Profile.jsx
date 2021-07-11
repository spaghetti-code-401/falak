import './profile.scss'
import Share from '../components/Share'
import Home from './Home'
import Header from '../components/Header'
import Feed from '../components/Feed'
import SideBar from '../components/SideBar'
import Post from '../components/Post'

const Profile = (props) => {

    return (
        <>
        <Header />

        <div className="profileContainer ">
            <div className="heroImageAndSideBar">

                    <div className="heroImage glass">
                        <section className="profile ">
                            <div className="coverAndProfile">
                                <img className="coverImage" src="https://tipsmake.com/data1/thumbs/how-to-extract-img-files-in-windows-10-thumb-bzxI4IDgg.jpg" alt="" />
                                <img className="profileImage" src="https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="" />
                            </div>
                            <div className="profileName">
                                <p className="name">qais </p>
                                <p className="nickName">qais waleed ata</p>
                            </div>
                            <div className="profileDescription">
                                <p>city : Norway </p>
                                <p>relationships : lllll </p>
                                <p>more .... </p>
                            </div>
                            {/* <Share className="profileShare" /> */}
                        </section>
                    </div>
                    <div>
                            <SideBar />

                    </div>
            </div>
            
            <div className="shareAndPost">
                <Share/>
                <Post />

            </div>

        </div>
        </>
    )
}

export default Profile 