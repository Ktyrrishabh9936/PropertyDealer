import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
export default function signup() {
    let loadfile = (event)=>{
        let can = document.getElementById('candidate');
        can.src = URL.createObjectURL(event.target.files[0]);
    };
  return (
    <div>
      <div className="Register-page">
        <div className="login-panel">
            <div className="login">
                <h1>SignUp Into Property Dealer</h1>
                <form action="/api/auth/uploadphoto" enctype="multipart/form-data" method="post"> 
                    <div className="propic">
                        <label htmlFor="profile" >
                            <div className="piclabel">
                                <img src='img/cam.png' alt="" height="20"/>
                                <span>Change Picture</span>
                            </div>
                            <img src='img/candiate.jpg' alt="" id="candidate"/>
                        </label>
                        <input type="file" id = "profile" name ="imageinput" onChange={loadfile}/>
                    </div>
                    <div className="take">
                    <input type="text" placeholder="First Name" name="fname"/>
                    <input type="text" placeholder="Second Name" name="lname"/>
                    <input type="tel" placeholder="Moblie Number" name="mb"/>
                    <input type="email" placeholder="Enter your email" name="emailid"/>
                    <input type="password" placeholder="Password" name="password"/>
                    <input type="text" placeholder="Address" name="homeAdd"/>
                </div>
                <button type="submit">Submit</button>
                </form>
                <div className="otherdetails">
                    <p>Alredy have an Account <Link to="/login">Login Here</Link> </p>
                    <a href="">Resend OTP</a>
                </div>
                <div className="follow">
                    <a href="https://github.com/Ktyrrishabh9936"><i className="fa fa-github-alt fa-2x"></i></a><a href="https://www.facebook.com/rishabh.ktyr"><i className="fa fa-facebook-official fa-2x"></i></a><a href="http://"><i className="fa fa-instagram fa-2x"></i></a>
                    <a href="linkedin.com/in/rishabh-katiyar-79593a218"><i className="fa fa-linkedin-square fa-2x"></i> </a><a href="https://twitter.com/Rishabh27132841"><i className="fa fa-twitter fa-2x"></i></a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
