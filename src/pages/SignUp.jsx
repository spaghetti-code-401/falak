import React from 'react'
import './signin_signup.scss'
import { Button,TextField  } from '@material-ui/core'

export default function SignUp() {
    return (

        // <div className="signIn">
        //     <div className='signInWrapper'>

        //         <div className="signInLeft">
        //             <h1>
        //                 Lorem ipsum
        //             </h1>
        //             <p>
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum facere quasi ipsum culpa quae pariatur quia recusandae omnis
        //             </p>
        //         </div>
        //         <div className="signInRight">
        //             <form className="form">
        //                 <TextField label="Username" variant="outlined" size="small" className="input" type="text"   />
        //                 <TextField label="Email" variant="outlined" size="small" className="input" type="text"   />
        //                 <TextField label="Password" variant="outlined" size="small" className="input" type="text"   />
        //                 <TextField label="Password Again" variant="outlined" size="small" className="input" type="password"   />
        //                 <Button variant="contained" color="primary" className='button'>
        //                     Sign Up
        //                 </Button>
        //                 <p>Already have an account?</p>
        //                 <Button variant="contained" color="secondary" className='newAccountButton' >
        //                     log In
        //                 </Button>
        //             </form>
        //         </div>
        //     </div>
        // </div>
        <div className="signIn">
            <div className='signInWrapper glass'>

                <div className="signInLeft">
                    <h1>
                        Lorem ipsum
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum facere quasi ipsum culpa quae pariatur quia recusandae omnis
                    </p>
                </div>
                <div className="signInRight glass2">
                    <form className="form">
                        <input placeholder="Username"  className="input glass2" type="text"   />
                        <input placeholder="Email"  className="input glass2" type="text"   />
                        <input placeholder="Password"  className="input glass2" type="password"   />
                        <input placeholder="Password Again"  className="input glass2" type="password"   />
                        <hr className='hr' />
                        <button  className='button glass2 signUpButton'>
                            Sign Up
                        </button>
                        <p>Already have an account?</p>
                        <button  className='newAccountButton glass2' >
                            log In
                        </button>
                    </form>
                </div>
            </div>
        </div>         
    )
}
