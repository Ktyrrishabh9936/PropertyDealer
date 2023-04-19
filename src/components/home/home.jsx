import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './home.css';
import Feature from '../features/feature';
import Showcarusel1 from './showcarusel1';
export default function Home(props) {
    const [states,setstates] = useState([]);
    const [city,setcity] = useState([]);
    // const [products,setproduct] = useState([]);
    useEffect(()=>{
    //   axios({
    //     url: "https://www.universal-tutorial.com/api/states/india/",
    //     method: "GET",
    //     headers: {
    //       Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJoYXJzaG5vdGE3OTRAZ21haWwuY29tIiwiYXBpX3Rva2VuIjoiR2ZQazl1QzZTcnhTRHBKa1ppdHBUc0Y3V1VLaDVsVVRrWDNiMGdmNmdIOWZ4Qkg0Uy1NUVNTc09UcUlodTNodkp0dyJ9LCJleHAiOjE2ODE5MDMxMTZ9.2HT8lN19atkNcyyIAabKr9bd7IlTXmsC5vtLBDELgDw",
    //   Accept: "application/json"
    //     }
    //   }).then(response => {
    //     setstates(response.data);
    //     console.log(states);
    //  }) 
    //  .catch(err => {
    //     console.log(err);
    //  });

    //  axios({url:'http://localhost:5000/homeproduct',method: "GET",headers: {Accept: "application/json"
    //       }}).then(response=>{
    //   console.log(response);
  // })

    // axios.get('http://localhost:5000/homeproduct',{'Access-Control-Allow-Origin': '*',        
    // 'Accept': 'application/json',
    // 'Content-Type': 'application/json'}).then(response=>{
    //   setproduct(response.data);
    // }).catch(err=>{
    //   console.log(err);
    // })
    },[])

    const cityfinder = (e)=>{
      axios({
        url: `https://www.universal-tutorial.com/api/cities/${e.target.value}`,
        method: "GET",
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJoYXJzaG5vdGE3OTRAZ21haWwuY29tIiwiYXBpX3Rva2VuIjoiR2ZQazl1QzZTcnhTRHBKa1ppdHBUc0Y3V1VLaDVsVVRrWDNiMGdmNmdIOWZ4Qkg0Uy1NUVNTc09UcUlodTNodkp0dyJ9LCJleHAiOjE2ODE5MDMxMTZ9.2HT8lN19atkNcyyIAabKr9bd7IlTXmsC5vtLBDELgDw",
      Accept: "application/json"
        }
      }).then(response => {
        setcity(response.data);
        console.log(city);
     }) 
     .catch(err => {
        console.log(err);
     });
    }
  return (
    <div> 
    <div className="web-main" style={{background:'url(img/house3.jpg)'}}>
      </div>
        <div className="searchbox">
          <form >
        <div className="selectsearch">

      <select name="selectprice" id="" className='selectprice'  onChange={cityfinder}>
        <option value="">--Select city--</option>
      {states.map((st)=>{
              return <option value= {`${st.state_name}`}>{st.state_name}</option>
            })}
          </select>
          <input type="text" list="PopularPlaces" name='selectplace' className='inputplace' placeholder='Enter city name' />
          <datalist id="PopularPlaces" className='listplace'>
          {city.map((ct)=>{
              return <option value= {`${ct.city_name}`}/>
            })}
          </datalist>
        </div>
        </form>
        <button className='search-button'>Submit</button>
      </div>
      <Showcarusel1/>
                <section className = "main-section">
                    <p> <strong> Hii Kartik | </strong> Welcome Back</p>
                    <div className="card">
                    <div className="customers maininfo">
                        <i className="fa fa-users fa-xl" ></i>
                        <div className="details">Number of Customers</div>
                        <p>700</p>
                    </div>
                    <div className="properties maininfo">
                        <i className="fas fa-user-check fa-xl" ></i>
                        <div className="details">Active Properties</div>
                        <p>400</p>
                    </div>
                    <div className="procus maininfo">
                        <i className="fas fa-user-tag fa-xl" ></i>
                        <div className="details">Principles/Customers</div>
                        <p>300</p>
                    </div>
                    <div className="appdownload maininfo">
                        <i className="fa-solid fa-download fa-xl" ></i>
                        <div className="details">App Downloads</div>
                        <p>200</p>
                    </div>
                </div>
                </section>
                <section className="main-panel">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner rounded">
                      <div className="carousel-item active" data-bs-interval="100000">
                        <div className="carauselsuggestion  car1 d-flex justify-content-evenly align-items-center">
                            <div className="carauselProductDetails">
                                <h1>Antali House</h1>
                                <p>fully fleshed cleaned furnish house availble in property Dealer </p>
                            </div>
                            <img src="/img/house2.jpg"  height ="270px" alt=""/>
                        </div>
                      </div>
                      <div className="carousel-item rounded" data-bs-interval="100000">
                        <div className="carauselsuggestion  car2 d-flex justify-content-evenly align-items-center">
                            <div className="carauselProductDetails">
                                <h1>Antali House</h1>
                                <p>fully fleshed cleaned furnish house availble in property Dealer </p>
                            </div>
                            <img src="img/modern-House2.png"  height ="270px" alt=""/>
                        </div>
                      </div>
                      <div className="carousel-item rounded" data-bs-interval="111000">
                        <div className="carauselsuggestion rounded car3 d-flex justify-content-evenly align-items-center">
                            <div className="carauselProductDetails">
                                <h1>Antali House</h1>
                                <p>fully fleshed cleaned furnish house availble in property Dealer </p>
                            </div>
                            <img src="img/Modern-House1.png"  height ="270px" alt=""/>
                        </div>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                  </section>


                  <Feature/>
                  {/* <section className="gridofproperty"  >
                    <h1 className="gpdheading"> Properties</h1>
                    <div className="gridcontainer"  >
                    {products.map((property)=>{ 
                        <div className="gridcard" >
                            <div className="imageproperty"  >
                                <span style={{backgroundImage: url(`${getallproperties/property.proimage}`)}}></span>
                            </div>
                            <div className="details" >
                                <div className="prohead"> <strong > {property.proname.substring(0,25)+"..."}</strong></div>
                                <p>{property.PropertyDescription.substring(0,130)+"--"}
                                </p>
                            </div>
                            <span style="text-align: right; font-size:0.8rem; color:teal">
                              posted on <%=property.postedDate.toString().substring(3,15)%>
                              </span>
                            <button></button>
                            </div>
                         })
                    } 
                    </div>
                  </section>
                   <footer className="propertyfooter">
                    <div className="row">
                        <div className="col about1">
                            <img src="/img/mypropertylogo.png" alt="" height="45"/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium facere omnis consequuntur vero aspernatur laudantium libero, eos praesentium voluptate. Corporis eius dolorem minus eligendi veritatis praesentium, quidem iste nulla dolor nihil architecto, reprehenderit eaque dolore deleniti hic! Magnam, ipsa dolorum.</p>
                        </div>
                        <div className="col about2">
                            <h3>I.K Gujral Punjab Technical Unversity</h3>
                            <p>kapurthala Highway,Ibban </p>
                            <p>Pin Code- 144360</p>
                            <a href = "mailto: ktyrrishabh99361032@gmail.com">Email : ktyrrishabh99361032@gmail.com</a>
                        </div>
                        <div className="col">
                            <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href=".about">About</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="contactUs">contactUs</a></li>
                            </ul>
                        </div>
                        <div className="col follow">
                            <h3>Follow Us On </h3>
                            <p className="flex flex-wrap">
                            <span><i className="fa fa-facebook fa-xl"></i></span>
                            <span><i className="fa fa-instagram fa-xl"></i></span>
                            <span><i className="fa fa-github fa-xl"></i></span>
                            <span><i className="fa fa-twitter fa-xl"></i></span>
                            <span><i className="fa fa-youtube-play fa-xl"></i></span>
                        </p>
                        </div>
                    </div>
                </footer>  */}
            </div>
  )
}
