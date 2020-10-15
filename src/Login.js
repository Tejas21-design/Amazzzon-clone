import React, { useState } from 'react'
import './Login.css';
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase";
function Login() {
     const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signin= e=>{
        e.preventDefault()
           auth 
           .signInWithEmailAndPassword(email, password)
           .then(auth=>{
               history.push('/')
           })
           .catch(error=>alert(error.messsage))
        //some fancy firebase 
    }

    const register = e=>{
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error =>alert(error.message))
           
        
        //fancy firebase 
    }
    return (

        <div className="login">
            <Link to='/'>
            <img className="login__logo" src ="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-500x200.png"/>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={e=> setEmail(e.target.value)} type="text"/>
                    <h5>Password</h5>
                    <input value={password} onChange={e=> setPassword(e.target.value)} type="password"/>
                    <button type='submit' className="login__signinbutton" onClick={signin}>Sign In</button>
                </form>
                <p>By Signing In you agree to Amazon's Terms and Conditions of Use & Sale. </p>
                <button onClick={register} className="login__registerbutton">Create Amazon Account</button>
            </div>
        </div>
    )
}

export default Login 
