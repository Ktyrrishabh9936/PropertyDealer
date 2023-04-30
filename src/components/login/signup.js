import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Signup() {
    let loadfile = (event)=>{
        let can = document.getElementById('candidate');
        can.src = URL.createObjectURL(event.target.files[0]);
        setregister({...register,[event.target.name]:event.target.files[0]})

        // console.log(event.target.files[0]);
    }

    const [register,setregister] = useState({fname:"",lname:"",mb:"",emailid:"",password:"",homeAdd:"",imageinput:""});
    
    const handleform = (e)=>{
        e.preventDefault();
        console.log(register);
        const formdata = new FormData();
      formdata.append("fname",register.fname);
      formdata.append("lname",register.fname);
      formdata.append("mb",register.mb);
      formdata.append("emailid",register.emailid);
      formdata.append("password",register.password);
      formdata.append("homeAdd",register.homeAdd);
      formdata.append("imageinput",register.imageinput);
      axios.post('http://localhost:5000/api/auth/signup',formdata).then((res)=>console.log(res.data
      )).catch((err)=>{console.log(err)});
      }
    // const navigate = useNavigate();
    const signupchange=(e)=>{
        setregister({...register,[e.target.name]:e.target.value});
    }

    // useEffect(()=>{
    //     axios.post('http://localhost:5000/api/auth/uploadphoto',register,{'Access-Control-Allow-Origin': '*',        
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'}).then((resp)=> {console.log(resp.data); navigate('/login')}).catch((err)=>{console.log(err)})
    // })
  return (
    <div>
      <div className="Register-page">
        <div className="login-panel">
            <div className="login">
                <h1>SignUp Into Property Dealer</h1>
                <form  enctype="multipart/form-data" method="post"> 
                    <div className="propic">
                        <label htmlFor="profile" >
                            <div className="piclabel">
                                <img src='img/cam.png' alt="" height="20"/>
                                <span>Change Picture</span>
                            </div>
                            <img src='img/candiate.jpg' alt="" id="candidate"/>
                        </label>
                        <input type="file" id = "profile" name ="imageinput" onChange={loadfile} />
                    </div>
                    <div className="take">
                    <input type="text" placeholder="First Name" name="fname" onChange={signupchange}/>
                    <input type="text" placeholder="Second Name" name="lname" onChange={signupchange}/>
                    <input type="tel" placeholder="Moblie Number" name="mb" onChange={signupchange}/>
                    <input type="email" placeholder="Enter your email" name="emailid" onChange={signupchange}/>
                    <input type="password" placeholder="Password" name="password" onChange={signupchange}/>
                    <input type="text" placeholder="Address" name="homeAdd" onChange={signupchange}/>
                </div>
                <button onClick={handleform}>Submit</button>
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
