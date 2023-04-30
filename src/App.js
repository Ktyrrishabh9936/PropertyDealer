// import logo from './logo.svg';
import './App.css';
/* The following line can be included in your src/index.js or App.js file */
import Home from './components/home/home';
import Properties from './components/property/properties';
import Login from './components/login/login';
import Signup from './components/login/signup';
import Search from './components/search';
import Navbar from './components/Navbar';
import Showcarddetails from './components/cardproperty/card';
import Cardonsearch from './components/cardproperty/cardonsearch';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function App() {
  const [Side, setSide] = useState(false);
  const [searchtext,setsearch] = useState();
  const [items,setItems] = useState([]);
  let togglesidebar = () => {
    setSide(!Side);
    console.log(Side);
  }

  const [mode,setmode]=useState(true);
  const modetoggle=()=>{
    setmode(!mode);
  }

  const finditems =()=>{
    axios.get(`http://localhost:5000/users/searchtext/${searchtext}`).then((response)=>{
      setItems(response.data);
    }).catch((err)=>console.log(err));
  }
  return (
    <>
      <div className={`website ${mode?'light':''} flex`}>
        <div className="web-template ">
          <Router>
            <Routes>
            <Route exact path='/login' element={<Login />}></Route>
            </Routes>
            <div className={`sidebar ${Side === true ? 'sideopen' : ''}`}>
              <Navbar Side={Side} toggler={togglesidebar} />
            </div>
            <div className="web-body">
              <Search toggler={togglesidebar} mode={mode} modetoggle={modetoggle} setsearch={setsearch} finditems={finditems}/>
              <Routes>
                <Route exact path='/addproperty' element={<Properties />}></Route>
                <Route exact path='/' element={<Home toggler={togglesidebar} />}></Route>
                
                <Route exact path='/signup' element={<Signup />}></Route>
                <Route exact path='/searchbytext' element={<Cardonsearch items={items}/>}></Route>
                <Route exact path='/showproperty/:id' element={<Showcarddetails />}></Route>
              </Routes>
            </div>
          </Router>
        </div>
      </div>
    </>
  );
}
export default App;
