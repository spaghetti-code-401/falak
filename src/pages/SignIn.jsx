import React from 'react'
import './signin_signup.scss'
import { Button,TextField  } from '@material-ui/core'

export default function SignIn() {
    return (

        // <div className="signIn">
        //     <div className='signInWrapper glass'>

        //         <div className="signInLeft ">
        //             <h1>
        //                 Lorem ipsum
        //             </h1>
        //             <p>
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum facere quasi ipsum culpa quae pariatur quia recusandae omnis
        //             </p>
        //         </div>
        //         <div className="signInRight glass2">
        //             <form className="form">
        //                 <TextField label="Username" variant="outlined" size="small" className="input" type="text"   />
        //                 <TextField label="password" variant="outlined" size="small" className="input" type="password"   />
        //                 <Button variant="contained" color="primary" className='button glass2'>
        //                     Log In
        //                 </Button>
        //                 <p>Don't have an account?</p>
        //                 <Button variant="contained" color="secondary" className='newAccountButton glass2' >
        //                     Create a new account
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
                       <input  placeholder='Username'   className="input glass2" type="text"   />
                       <input  placeholder='Password'  className="input glass2" type="password"   />
                       <hr className='hr' />

                       <button variant="contained" color="primary" className='button glass2 loginButton'>
                           Log In
                       </button>
                       <p>Don't have an account?</p>
                       <button variant="contained" color="secondary" className='newAccountButton glass2' >
                           Create a new account
                       </button>
                   </form>
               </div>
           </div>
       </div>
    )
}
