import React from 'react'
import { Link, useLocation } from 'react-router-dom'
export default function Navbar(props) {
    let location = useLocation();
  return (
    <div>
      {/* <div className={`sidebar ${props.Side===true?'sideopen':''}`}> */}
                <span className='sideclose' onClick={()=>{props.toggler()}}><i className="fa fa-close fa-xl"></i></span>
            <div className="mainlogo">
                <i className="fa-solid fa-house-laptop fa-2x"></i>
                <p>Property Dealer</p>
            </div>

            <hr/>
            <div className="menu-item">
                <ul>
                    <li className={`${location.pathname==='/'?'active':''}`}> <Link to='/' className='router'>Dashboard </Link></li>
                    <li> 
                        {/* <Link to='customer'>  */}
                        Customer 
                        {/* </Link> */}
                    </li>
                    <li>
                         {/* <Link to='properties'>  */}
                         Properties 
                         {/* </Link> */}
                    </li>
                    <li>
                        {/* <Link to='Orders'> */}
                             Orders
                        {/* </Link> */}
                    </li>
                    <li>
                         {/* <Link to='CallBack'>  */}
                         CallBack 
                         {/* </Link> */}
                    </li>
                    <li>
                         {/* <Link to='Payment'> */}
                             Payment
                         {/* </Link> */}
                    </li>
                </ul>
            </div>
           <p className="botouter"> <span className="bot"><i className="fa fa-reddit-alien fa-4x vert-move"></i></span> </p>
        </div>
    // </div>
  )
}
