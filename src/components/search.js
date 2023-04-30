import React, { useEffect } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
export default function Search(props) {
    const navigate = useNavigate();
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 500 || window.scrollY > 500) {
            document.getElementById("navbar").style.backgroundColor = "#26282B";
          } else {
            document.getElementById("navbar").style.backgroundColor = "transparent";
          }
        };
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div>
      <nav id="navbar">
                <div className="flex" style={{width:'100%'}}>
                <button className="hamburger" onClick={()=>{props.toggler()}}><i className="fa fa-bars fa-xl"></i></button>
                <form >
                <div className="search">
                    {/* <i className=""></i> */}
                    <input type="text" name="" id="" placeholder="Search" onChange={(e)=>props.setsearch(e.target.value)}/>
                    <button type='submit' className='fa fa-search' onClick={(e)=>{
                      e.preventDefault();
                      props.finditems();
                    }}></button>
                </div>
                </form>
            </div>
                <div className="auth-info">
                    <div className="add">
                        <i className="fa fa-plus-circle fa-lg"></i>
                        <Link className='addlnk' to="/addproperty">Add</Link>
                    </div>
                    <div className="button-div">
                        <button class="signup-button">Signup</button>
                        <button onClick={()=>{navigate("/login")}} class="login-button">Login</button>
                        </div>
                    <div className="notify">
                        <i className="fas fa-bell fa-lg"></i>
                    </div>

                    <div className="user-account" onClick={props.modetoggle}>
                        <i className={`fas fa-${props.mode?'moon':'sun'}`}></i>
                    </div>
                </div>
                </nav>
    </div>
  )
}
