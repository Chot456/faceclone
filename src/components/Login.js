import { Button } from '@material-ui/core'
import React from 'react'
import '../css/Login.css'
import  FbLogo from "../img/fb-logo.png"
import { auth, provider } from '../firebase'
import { actionTypes } from '../providers/Reducer'
import { useStateValue } from '../providers/StateProvider'


function Login() {
    console.log(useStateValue)
    // const [state] = useStateValue();

    const signIn = () => {
        /** sign in */
        auth.signInWithPopup(provider)
        .then(result => {

            /** push data to data layer */
            // dispatch({
            //     type: actionTypes.SET_USER,
            //     user: result.user,
            // })
            console.log(result)
        }).catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src={FbLogo} alt="" />
                <img src={'https://vectorlogo4u.com/wp-content/uploads/2019/11/Facebook-Vector-Logo.png'} alt="fblogo" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign in
            </Button>
        </div>
    )
}

export default Login
