import React, { useEffect, useState } from 'react'
import './cardonsearch.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Cardonsearch({items}) {
  return (
    <div>
      <div className="mycontainer">
        <h2>Most Recent feeds</h2>
      {items.map((item)=>[
        <div class="blog-slider">
        <div class="blog-slider__wrp swiper-wrapper">
          <div class="blog-slider__item swiper-slide">
            <div class="blog-slider__img">
              
              <img src={`http://localhost:5000/users/${item.proimage}`} alt=""/>
            </div>
            <div class="blog-slider__content">
              <div class="blog-slider__title">{item.proname}</div>
              <span class="price"><h3>&#8377;56000</h3> <s>&#8377;34000</s></span> 
              <div class="blog-slider__text">{item.PropertyDescription} </div>
              <Link to= {`/showproperty/${item._id}`} class="blog-slider__button">Show More</Link>
              <span class="blog-slider__code">{item.postedDate}</span>
            </div>
          </div>
        </div>
        <div class="blog-slider__pagination"></div>
      </div>
      ])}
</div>
    </div>
  )
}
