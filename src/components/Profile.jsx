import '../css/profile.scss'
import Share from './Share'


const Profile = (props) => {

    return (
        <section className="profile">
            <div className="coverAndProfile">
                <img className="coverImage" src="https://tipsmake.com/data1/thumbs/how-to-extract-img-files-in-windows-10-thumb-bzxI4IDgg.jpg" alt="" />
                <img className="profileImage" src="https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="" />
                {/* <AccountCircleIcon className="profileImage"/> */}
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
            <Share className="profileShare" />
        </section>

    )
}

export default Profile 