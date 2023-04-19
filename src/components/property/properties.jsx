import React, { useEffect } from 'react'
import './postproperty.css'
export default function Properties() {
  useEffect(()=>{
    console.log("ewiurgfefdghiodusfigkh")
    const uploadBox = document.querySelector(".upload-box"),
previewImg = uploadBox.querySelector("#postimage"),
fileInput = uploadBox.querySelector("#postinp");
let ogImageRatio;
const loadFile = (e) => {
    const file = e.target.files[0]; // getting first user selected file
    if(!file) return; // return if user hasn't selected any file
    previewImg.src = URL.createObjectURL(file); // passing selected file url to preview img src
    previewImg.addEventListener("load", () => { // once img loaded
        ogImageRatio = previewImg.naturalWidth / previewImg.naturalHeight;
        document.querySelector(".postform").classList.add("jadu");
    });
  }
  fileInput.addEventListener("change", loadFile);
uploadBox.addEventListener("click", () => fileInput.click());
  },[])
  return (
    <>
    <div className="mysite">
    <div class="postform">
        <h1>Post Your Property</h1>
        <form action="users/postcards" encType="multipart/form-data" method="post">
      <div class="upload-box">
        <input type="file" name="postalfile" accept="image/*" id="postinp" hidden/>
        <img src="https://www.codingnepalweb.com/demos/resize-and-compress-image-javascript/upload-icon.svg" alt="" id="postimage" />
        <p>Browse File to Upload</p>
      </div>
      <div class="content">
        <div class="rose sizes">
          <div class="mycol width">
            <label>Property Type</label>
            <input type="text" name="ptype"/>
          </div>
          <div class="mycol height">
            <label>Location</label>
            <input type="text" name="ploc"/>
          </div>
        </div>
        <div class="textareashow">
        <div class="mycol ">
            <label>Property Title</label>
            <input type="text" name="ptitle"/>
        </div>
        <div class="mycol height">
          <label>Property Description</label>
          <textarea class="descrip" type="text" cols="60" name="pdes" style={{padding: '15px'}}></textarea>
        </div>
        </div>
        <div class="rose checkboxes">
          <div class="mycol ratio">
            <input type="checkbox" id="ratio" checked/>
            <label htmlFor="ratio">Are you Sure</label>
          </div>
        </div>
        <button type="submit" class="submit-btn"> Submit</button>
      </div>
    </form>
    </div>
    </div>
    </>

  )
}
