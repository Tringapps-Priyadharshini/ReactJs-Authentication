import React, { useState } from 'react';
import './log.css';
import {useAuth} from './auth';
import { useNavigate } from 'react-router-dom';
export default function Login(){
    const auth = useAuth();
    const navigate = useNavigate();
let[username,setuser] = useState("");
const getInputValue = (event) =>{
    const user = event.target.value;
    console.log(user);
    setuser(user);

}
const handleSubmit = (e) => {
        e.preventDefault();
        console.log("you clicked submit",e.target[0].value);
        auth.signin(username);
        navigate('/');

}
    return(
        <div><p>Login to visit Home Page</p>
        <div className = "log">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        <input type = "text" name = "Name" onChange={getInputValue} placeholder="username"/><br/>
        <button type ="submit">submit</button>
        </form>
        </div>
        </div>
    );
}