// import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import Properties from './components/property/properties';
import Login from './components/login/login';
import Signup from './components/login/signup';
import Search from './components/search';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [Side, setSide] = useState(false);
  let togglesidebar = () => {
    setSide(!Side);
    console.log(Side);
  }
  return (
    <>
      <div className="website flex">
        <div className="web-template ">
          <Router>
            <Routes>
            <Route exact path='/login' element={<Login />}></Route>
            </Routes>
            <div className={`sidebar ${Side === true ? 'sideopen' : ''}`}>
              <Navbar Side={Side} toggler={togglesidebar} />
            </div>
            <div className="web-body">
              <Search toggler={togglesidebar} />
              <Routes>
                <Route exact path='/addproperty' element={<Properties />}></Route>
                <Route exact path='/' element={<Home toggler={togglesidebar} />}></Route>
                
                <Route exact path='/signup' element={<Signup />}></Route>
                {/* <Route exact path='/postproperty' element={<Signup/>}></Route> */}
              </Routes>
            </div>
          </Router>
        </div>
      </div>
    </>
  );
}
export default App;
