import React, { useEffect,useState } from 'react'
import './postproperty.css'
import axios from 'axios';
export default function Properties() {
  const [propertype,setpropertype] = useState('');
  const [loc,setloc] = useState('');
  const [image,setimage] = useState();
  const [tit,settit] = useState('');
  const [des,setdes] = useState('');
  function ptypechange(e){
    setpropertype(e.target.value);
  }
  function changeloc(e){
    setloc(e.target.value);
  }
  function changetitle(e){
    settit(e.target.value);
  }
  function changedes(e){
    setdes(e.target.value);
  }
  const handleformdata = (e)=>{
    e.preventDefault();
    console.log(propertype,loc,image,tit,des);
    const formdata = new FormData();
  formdata.append("ptype",propertype);
  formdata.append("ptitle",tit);
  formdata.append("pdes",des);
  formdata.append("ploc",loc);
  formdata.append("image",image);

  axios.post('http://localhost:5000/users/postcards',formdata).then((res)=>console.log(res.data
  )).catch((err)=>{console.log(err)});
  }
  let mybox;
  let fileInput;
  let previewImg;
  let ogImageRatio;
  let loadfile = (e)=>{
    var file = e.target.files[0]; 
    if(!file) return;
    previewImg.src = URL.createObjectURL(file); 
    previewImg.addEventListener("load", () => { 
        ogImageRatio = previewImg.naturalWidth / previewImg.naturalHeight;
        document.querySelector(".postform").classList.add("jadu");
        setimage(file);
    });
  }

  return (
    <>
    <div className="mysite">
    <div class="postform">
        <h1>Post Your Property</h1>
        <form  method="post">
      <div class="upload-box" ref={(e)=>{mybox=e}} onClick={()=>fileInput.click()}>
        <input type="file"  accept="image/*" id="postinp" ref={(e)=>{fileInput=e}} onChange={loadfile} hidden/>
        <img src="https://www.codingnepalweb.com/demos/resize-and-compress-image-javascript/upload-icon.svg" alt="" id="postimage" ref={(e)=>{previewImg=e}} />
        <p>Browse File to Upload</p>
      </div>
      <div class="content">
        <div class="rose sizes">
          <div class="mycol width">
            <label>Property Type</label>
            <input type="text" name="ptype" onChange={ptypechange}/>
          </div>
          <div class="mycol height">
            <label>Location</label>
            <input type="text" name="ploc" onChange={changeloc}/>
          </div>
        </div>
        <div class="textareashow">
        <div class="mycol ">
            <label>Property Title</label>
            <input type="text" name="ptitle" onChange={changetitle}/>
        </div>
        <div class="mycol height">
          <label>Property Description</label>
          <textarea class="descrip" type="text" cols="60" name="pdes" style={{padding: '15px'}} onChange={changedes}></textarea>
        </div>
        </div>
        {/* <div class="rose checkboxes">
          <div class="mycol ratio">
            <input type="checkbox" id="ratio" checked/>
            <label htmlFor="ratio">Are you Sure</label>
          </div>
        </div> */}
        <button class="submit-btn" onClick={handleformdata} > Submit</button>
      </div>
    </form>
    </div>
    </div>
    </>

  )
}
