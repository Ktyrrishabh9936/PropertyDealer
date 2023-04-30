import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './loginsignup.css'
import axios from 'axios';

export default function Login() {
    const [logcred,setlogcred] = useState({emailid:"",password:""});
    const navigate = useNavigate();
    const inputchange=(e)=>{
        setlogcred({...logcred,[e.target.name]:e.target.value});
    }

    useEffect(()=>{
        axios.post('http://localhost:5000/api/auth/login',logcred,{'Access-Control-Allow-Origin': '*',        
        'Accept': 'application/json',
        'Content-Type': 'application/json'}).then((resp)=> {localStorage.setItem('loggedUser',resp.data.loggeduser); navigate('/')}).catch((err)=>{console.log(err)})
    })
    return (
    <>
            <div class="Register-page ht-100">
                <div class="login-panel">
                    <div class="login">
                        <h1>Login Property Dealer</h1>
                        <form action="/api/auth/login" method="post">
                            <div class="take" style={{display: 'grid',gridTemplateColumns: '1fr'}}>
                                <input type="email"     onChange={inputchange}  placeholder="Enter your email" name="emailid"/>
                                    <input type="password" placeholder="password"
                                    onChange={inputchange}
                                    name="password"/>
                                    </div>
                                    <button type="submit">Submit</button>
                                </form>
                                <div class="otherdetails">
                                    <p>Don't have any Account <Link to="/signup">signup Here</Link> </p>
                                </div>
                                <div class="follow">
                                    <a href="https://github.com/Ktyrrishabh9936"><i class="fa fa-github-alt fa-2x"></i></a><a href="https://www.facebook.com/rishabh.ktyr"><i class="fa fa-facebook-official fa-2x"></i></a><a href="http://"><i class="fa fa-instagram fa-2x"></i></a>
                                    <a href="linkedin.com/in/rishabh-katiyar-79593a218"><i class="fa fa-linkedin-square fa-2x"></i> </a><a href="https://twitter.com/Rishabh27132841"><i class="fa fa-twitter fa-2x"></i></a>
                                </div>
                            </div>

                    </div>
                </div>
            </>
            )
}
