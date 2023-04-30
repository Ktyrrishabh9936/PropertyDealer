import React, { useEffect, useState } from 'react'
import './card.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function Card() {
  const [card,setcard] = useState({});
  const params = useParams();
  useEffect(()=>{
    const imgs = document.querySelectorAll('.img-select a');
    const imgBtns = [...imgs];
    let imgId = 1;

    imgBtns.forEach((imgItem) => {
        imgItem.addEventListener('click', (event) => {
            event.preventDefault();
            imgId = imgItem.dataset.id;
            slideImage();
        });
    });

    function slideImage(){
        const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

        document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    }

    window.addEventListener('resize', slideImage);


    axios.get(`http://localhost:5000/users/singleproperty/${params.id}`,{'Access-Control-Allow-Origin': '*',        
    'Accept': 'application/json',
    'Content-Type': 'application/json'}).then((res)=>{setcard(res.data)}).catch((err)=>{console.log(err)});
  })
  return (
    <div>    
    <div class = "card-wrapper">
      <div class = "sellcard">
        <div className="head">
        <h3 class = "product-title">{card.proname}</h3>
        </div>
        <div class = "product-imgs">
          <div class = "img-display">
            <div class = "img-showcase">
              <img src = {`http://localhost:5000/users/${card.proimage}`} alt = "shoe image"/>
              <img src = "shoes_images/shoe_2.jpg" alt = "shoe image"/>
              <img src = "shoes_images/shoe_3.jpg" alt = "shoe image"/>
              <img src = "shoes_images/shoe_4.jpg" alt = "shoe image"/>
            </div>
          </div>
          <div class = "img-select">
            <div class = "img-item">
              <a href = "#" data-id = "1">
                <img src = "shoes_images/shoe_1.jpg" alt = "shoe image"/>
              </a>
            </div>
            <div class = "img-item">
              <a href = "#" data-id = "2">
                <img src = "shoes_images/shoe_2.jpg" alt = "shoe image"/>
              </a>
            </div>
            <div class = "img-item">
              <a href = "#" data-id = "3">
                <img src = "shoes_images/shoe_3.jpg" alt = "shoe image"/>
              </a>
            </div>
            <div class = "img-item">
              <a href = "#" data-id = "4">
                <img src = "shoes_images/shoe_4.jpg" alt = "shoe image"/>
              </a>
            </div>
          </div>
          </div>

        <div class = "product-content">
          <a href = "#" class = "product-link">visit nike store</a>
          <div class = "product-rating">
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star-half-alt"></i>
            <span>4.7(21)</span>
          </div>

          <div class = "product-price">
            {/* <p class = "last-price">Old Price: <span>$257.00</span></p> */}
            <p class = "new-price">New Price: <span>$249.00 (5%)</span></p>
          </div>

          <div class = "product-detail">
            <ul>
              <li>Color: <span>Black</span></li>
              <li>Category: <span>{card.protype}</span></li>

              <li>place:<span>{card.place}</span></li>
            </ul>
          </div>

          <div class = "purchase-info">
            <button type = "button" class = "btn">
              Add to Cart <i class = "fas fa-shopping-cart"></i>
            </button>
            <button type = "button" class = "btn">Contact to Owner</button>
          </div>


          <div class = "social-links">
            <a href = "#">
              <i class = "fab fa-facebook-f"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-twitter"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-instagram"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-whatsapp"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-pinterest"></i>
            </a>
          </div>
        </div>
        <div className="aboutitem">
        <h2>About this item: </h2>
            <p>{card.PropertyDescription}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>

            <form className='mailForm'>
            
            <h3>Send Mail to owner</h3>
            <div className="sendmail">
            <div class="pseudo-search">
                <input type="text" placeholder="Search..." autofocus required/>

            </div>
                <button  type="submit">Send Mail</button>

            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
