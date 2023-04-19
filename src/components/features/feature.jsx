import React from 'react';
import './feature.css';
export default function feature() {
  return (
    <div>
      <section class="about" id="about">
    <div class="con">

      <figure class="about-banner">
        <img src="../images/about-banner-1.png" alt="House interior"/>

        <img src="../images/about-banner-2.jpg" alt="House interior" class="abs-img"/>
      </figure>

      <div class="about-content">

        <p class="section-subtitle">About Us</p>

        <h2 class="h2 section-title">The Leading Real Estate Rental Marketplace.</h2>

        <p class="about-text">
          Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage,
          combined with
          specialist services
        </p>

        <ul class="about-list">

          <li class="about-item">
            <div class="about-item-icon">
              <ion-icon name="home-outline"></ion-icon>
            </div>

            <p class="about-item-text">Smart Home Design</p>
          </li>

          <li class="about-item">
            <div class="about-item-icon">
              <ion-icon name="leaf-outline"></ion-icon>
            </div>

            <p class="about-item-text">Beautiful Scene Around</p>
          </li>

          <li class="about-item">
            <div class="about-item-icon">
              <ion-icon name="wine-outline"></ion-icon>
            </div>

            <p class="about-item-text">Exceptional Lifestyle</p>
          </li>

          <li class="about-item">
            <div class="about-item-icon">
              <ion-icon name="shield-checkmark-outline"></ion-icon>
            </div>

            <p class="about-item-text">Complete 24/7 Security</p>
          </li>

        </ul>

        <p class="callout">
          "Enimad minim veniam quis nostrud exercitation
          llamco laboris. Lorem ipsum dolor sit amet"
        </p>

        <a href="#service" class="btn">Our Services</a>

      </div>

    </div>
  </section>





  {/* <!-- 
    - #SERVICE
  --> */}

  <section class="service" id="service">
    <div class="con">

      <p class="section-subtitle">Our Services</p>

      <h2 class="h2 section-title">Our Main Focus</h2>

      <ul class="service-list">

        <li>
          <div class="service-card">

            <div class="card-icon">
              <img src="../images/service-1.png" alt="Service icon"/>
            </div>

            <h3 class="h3 card-title">
              <a href="#">Buy a home</a>
            </h3>

            <p class="card-text">
              over 1 million+ homes for sale available on the website, we can match you with a house you will want
              to call home.
            </p>

            <a href="buyproperty.html" class="card-link">
              <span>Find A Home</span>

              <ion-icon name="arrow-forward-outline"></ion-icon>
            </a>

          </div>
        </li>

        <li>
          <div class="service-card">

            <div class="card-icon">
              <img src="../images/service-2.png" alt="Service icon"/>
            </div>

            <h3 class="h3 card-title">
              <a href="#">Rent a home</a>
            </h3>

            <p class="card-text">
              over 1 million+ homes for sale available on the website, we can match you with a house you will want
              to call home.
            </p>

            <a href="renthome.html" class="card-link">
              <span>Rent a property</span>

              <ion-icon name="arrow-forward-outline"></ion-icon>
            </a>

          </div>
        </li>

        <li>
          <div class="service-card">

            <div class="card-icon">
              <img src="../images/service-3.png" alt="Service icon"/>
            </div>

            <h3 class="h3 card-title">
              <a href="#">Sell a home</a>
            </h3>

            <p class="card-text">
              over 1 million+ homes for sale available on the website, we can match you with a house you will want
              to call home.
            </p>

            <a href="sellhome.html" class="card-link">
              <span>Sell property</span>

              <ion-icon name="arrow-forward-outline"></ion-icon>
            </a>

          </div>
        </li>

      </ul>

    </div>
  </section>



{/* 

  <!-- 
    - #PROPERTY
  --> */}

  <section class="property" id="property">
    <div class="con">

      <p class="section-subtitle">Properties</p>

      <h2 class="h2 section-title">Featured Listings</h2>

      <ul class="property-list has-scrollbar">

        <li>
          <div class="property-card">

            <figure class="card-banner">

              <a href="#">
                <img src="../images/property-1.jpg" alt="New Apartment Nice View" class="w-100"/>
              </a>

              <div class="card-badge green">For Rent</div>

              <div class="banner-actions">

                <button class="banner-actions-btn">
                  <ion-icon name="location"></ion-icon>

                  <address>Gaya Prasad,Noida</address>
                </button>

                <button class="banner-actions-btn">
                  <ion-icon name="camera"></ion-icon>

                  <span>4</span>
                </button>

                <button class="banner-actions-btn">
                  <ion-icon name="film"></ion-icon>

                  <span>2</span>
                </button>

              </div>

            </figure>

            <div class="card-content">

              <div class="card-price">
                <strong>4,34,900</strong>/Month
              </div>

              <h3 class="h3 card-title">
                <a href="#">New Apartment Nice View</a>
              </h3>

              <p class="card-text">
                Beautiful Huge 1 Family House In Heart Of Main garden. Newly Renovated With New Wood
              </p>

              <ul class="card-list">

                <li class="card-item">
                  <strong>3</strong>

                  <ion-icon name="bed-outline"></ion-icon>

                  <span>Bedrooms</span>
                </li>

                <li class="card-item">
                  <strong>2</strong>

                  <ion-icon name="man-outline"></ion-icon>

                  <span>Bathrooms</span>
                </li>

                <li class="card-item">
                  <strong>3450</strong>

                  <ion-icon name="square-outline"></ion-icon>

                  <span>Square Ft</span>
                </li>

              </ul>

            </div>

            <div class="card-footer">

              <div class="card-author">

                <figure class="author-avatar">
                  <img src="../images/author.jpg" alt="William Seklo" class="w-100"/>
                </figure>

                <div>
                  <p class="author-name">
                    <a href="#">Rishabh</a>
                  </p>

                  <p class="author-title">pep Agents</p>
                </div>

              </div>

              <div class="card-footer-actions">

                <button class="card-footer-actions-btn">
                  <ion-icon name="resize-outline"></ion-icon>
                </button>

                <button class="card-footer-actions-btn">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

                <button class="card-footer-actions-btn">
                  <ion-icon name="add-circle-outline"></ion-icon>
                </button>

              </div>

            </div>

          </div>
        </li>

        <li>
          <div class="property-card">

            <figure class="card-banner">

              <a href="#">
                <img src="../images/property-2.jpg" alt="Modern Apartments" class="w-100"/>
              </a>

              <div class="card-badge orange">For Sales</div>

              <div class="banner-actions">

                <button class="banner-actions-btn">
                  <ion-icon name="location"></ion-icon>

                  <address>Motee-jheel,kanpur</address>
                </button>

                <button class="banner-actions-btn">
                  <ion-icon name="camera"></ion-icon>

                  <span>4</span>
                </button>

                <button class="banner-actions-btn">
                  <ion-icon name="film"></ion-icon>

                  <span>2</span>
                </button>

              </div>

            </figure>

            <div class="card-content">

              <div class="card-price">
                <strong>444,900</strong>/Month
              </div>

              <h3 class="h3 card-title">
                <a href="#">Modern Apartments</a>
              </h3>

              <p class="card-text">
                Clear rooms with full flexed A.C and windows with safety. you can have metro available nearyby to your building.
              </p>

              <ul class="card-list">

                <li class="card-item">
                  <strong>3</strong>

                  <ion-icon name="bed-outline"></ion-icon>

                  <span>Bedrooms</span>
                </li>

                <li class="card-item">
                  <strong>2</strong>

                  <ion-icon name="man-outline"></ion-icon>

                  <span>Bathrooms</span>
                </li>

                <li class="card-item">
                  <strong>5000</strong>

                  <ion-icon name="square-outline"></ion-icon>

                  <span>Square Ft</span>
                </li>

              </ul>

            </div>

            <div class="card-footer">

              <div class="card-author">

                <figure class="author-avatar">
                  <img src="../images/author.jpg" alt="William Seklo" class="w-100"/>
                </figure>

                <div>
                  <p class="author-name">
                    <a href="#">naman</a>
                  </p>

                  <p class="author-title">Peed Agent</p>
                </div>

              </div>

              <div class="card-footer-actions">

                <button class="card-footer-actions-btn">
                  <ion-icon name="resize-outline"></ion-icon>
                </button>

                <button class="card-footer-actions-btn">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

                <button class="card-footer-actions-btn">
                  <ion-icon name="add-circle-outline"></ion-icon>
                </button>

              </div>

            </div>

          </div>
        </li>

        <li>
          <div class="property-card">

            <figure class="card-banner">

              <a href="#">
                <img src="../images/property-3.jpg" alt="Comfortable Apartment" class="w-100"/>
              </a>

              <div class="card-badge green">For Rent</div>

              <div class="banner-actions">

                <button class="banner-actions-btn">
                  <ion-icon name="location"></ion-icon>

                  <address>geetanagar ,Kanpur</address>
                </button>

                <button class="banner-actions-btn">
                  <ion-icon name="camera"></ion-icon>

                  <span>4</span>
                </button>

                <button class="banner-actions-btn">
                  <ion-icon name="film"></ion-icon>

                  <span>2</span>
                </button>

              </div>

            </figure>

            <div class="card-content">

              <div class="card-price">
                <strong>1,34,900</strong>/Month
              </div>

              <h3 class="h3 card-title">
                <a href="#">Comfortable Apartment</a>
              </h3>

              <p class="card-text">
                Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
              </p>

              <ul class="card-list">

                <li class="card-item">
                  <strong>3</strong>

                  <ion-icon name="bed-outline"></ion-icon>

                  <span>Bedrooms</span>
                </li>

                <li class="card-item">
                  <strong>2</strong>

                  <ion-icon name="man-outline"></ion-icon>

                  <span>Bathrooms</span>
                </li>

                <li class="card-item">
                  <strong>3450</strong>

                  <ion-icon name="square-outline"></ion-icon>

                  <span>Square Ft</span>
                </li>

              </ul>

            </div>

            <div class="card-footer">

              <div class="card-author">

                <figure class="author-avatar">
                  <img src="../images/author.jpg" alt="William Seklo" class="w-100" width='40px' height='40px'/>
                </figure>

                <div>
                  <p class="author-name">
                    <a href="#">Aniket katiyar</a>
                  </p>

                  <p class="author-title">prop Agent</p>
                </div>

              </div>

              <div class="card-footer-actions">

                <button class="card-footer-actions-btn">
                  <ion-icon name="resize-outline"></ion-icon>
                </button>

                <button class="card-footer-actions-btn">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

                <button class="card-footer-actions-btn">
                  <ion-icon name="add-circle-outline"></ion-icon>
                </button>

              </div>

            </div>

          </div>
        </li>

        <li>
          <div class="property-card">

            <figure class="card-banner">

              <a href="#">
                <img src="../images/property-4.png" alt="Luxury villa in Rego Park" class="w-100" width='40px' height='40px'/>
              </a>

              <div class="card-badge green">For Rent</div>

              <div class="banner-actions">

                <button class="banner-actions-btn">
                  <ion-icon name="location"></ion-icon>

                  <address>lal ganj,delhi</address>
                </button>

                <button class="banner-actions-btn">
                  <ion-icon name="camera"></ion-icon>

                  <span>4</span>
                </button>

                <button class="banner-actions-btn">
                  <ion-icon name="film"></ion-icon>

                  <span>2</span>
                </button>

              </div>

            </figure>

            <div class="card-content">

              <div class="card-price">
                <strong>44,900</strong>/Month
              </div>

              <h3 class="h3 card-title">
                <a href="#">Luxury villa in Park</a>
              </h3>

              <p class="card-text">
                Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
              </p>

              <ul class="card-list">

                <li class="card-item">
                  <strong>3</strong>

                  <ion-icon name="bed-outline"></ion-icon>

                  <span>Bedrooms</span>
                </li>

                <li class="card-item">
                  <strong>2</strong>

                  <ion-icon name="man-outline"></ion-icon>

                  <span>Bathrooms</span>
                </li>

                <li class="card-item">
                  <strong>3450</strong>

                  <ion-icon name="square-outline"></ion-icon>

                  <span>Square Ft</span>
                </li>

              </ul>

            </div>

            <div class="card-footer">

              <div class="card-author">

                <figure class="author-avatar">
                  <img src="../images/author.jpg" alt="William Seklo" class="w-100" width='40px' height='40px'/>
                </figure>

                <div>
                  <p class="author-name">
                    <a href="#">Manas</a>
                  </p>

                  <p class="author-title">Estate Agents</p>
                </div>

              </div>

              <div class="card-footer-actions">

                <button class="card-footer-actions-btn">
                  <ion-icon name="resize-outline"></ion-icon>
                </button>

                <button class="card-footer-actions-btn">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

                <button class="card-footer-actions-btn">
                  <ion-icon name="add-circle-outline"></ion-icon>
                </button>

              </div>

            </div>

          </div>
        </li>

      </ul>

    </div>
  </section>





  
{/* 
  <!-- 
    - #BLOG
  --> */}

  <section class="blog" id="blog">
    <div class="con">

      <p class="section-subtitle">News & Blogs</p>

      <h2 class="h2 section-title">Leatest News Feeds</h2>

      <ul class="blog-list has-scrollbar">

        <li>
          <div class="blog-card">

            <figure class="card-banner">
              <img src="../images/blog-1.png" alt="The Most Inspiring Interior Design Of 2021" class="w-100"/>
            </figure>

            <div class="blog-content">

              <div class="blog-content-top">

                <ul class="card-meta-list">

                  <li>
                    <a href="#" class="card-meta-link">
                      <ion-icon name="person"></ion-icon>

                      <span>by: Anand Schan</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" class="card-meta-link">
                      <ion-icon name="pricetags"></ion-icon>

                      <span>Interior</span>
                    </a>
                  </li>

                </ul>

                <h3 class="h3 blog-title">
                  <a href="#">The Most Inspiring Interior Design Of 2021</a>
                </h3>

              </div>

              <div class="blog-content-bottom">
                <div class="publish-date">
                  <ion-icon name="calendar"></ion-icon>

                  <time datetime="2022-27-04">Apr 27, 2022</time>
                </div>

                <a href="#" class="read-more-btn">Read More</a>
              </div>

            </div>

          </div>
        </li>

        <li>
          <div class="blog-card">

            <figure class="card-banner">
              <img src="../images/blog-2.jpg" alt="Recent Commercial Real Estate Transactions" class="w-100"/>
            </figure>

            <div class="blog-content">

              <div class="blog-content-top">

                <ul class="card-meta-list">

                  <li>
                    <a href="#" class="card-meta-link">
                      <ion-icon name="person"></ion-icon>

                      <span>by: Ganesh poori</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" class="card-meta-link">
                      <ion-icon name="pricetags"></ion-icon>

                      <span>Villa</span>
                    </a>
                  </li>

                </ul>

                <h3 class="h3 blog-title">
                  <a href="#">Recent Commercial Real Estate Transactions</a>
                </h3>

              </div>

              <div class="blog-content-bottom">
                <div class="publish-date">
                  <ion-icon name="calendar"></ion-icon>

                  <time datetime="2022-27-04">Apr 27, 2022</time>
                </div>

                <a href="#" class="read-more-btn">Read More</a>
              </div>

            </div>

          </div>
        </li>

        <li>
          <div class="blog-card">

            <figure class="card-banner">
              <img src="../images/blog-3.jpg" alt="Renovating a Living Room? Experts Share Their Secrets"
                class="w-100"/>
            </figure>

            <div class="blog-content">

              <div class="blog-content-top">

                <ul class="card-meta-list">

                  <li>
                    <a href="#" class="card-meta-link">
                      <ion-icon name="person"></ion-icon>

                      <span>by: Kusum taneja</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" class="card-meta-link">
                      <ion-icon name="pricetags"></ion-icon>

                      <span>Room</span>
                    </a>
                  </li>

                </ul>

                <h3 class="h3 blog-title">
                  <a href="#">Renovating a Living Room? Experts Share Their Secrets</a>
                </h3>

              </div>

              <div class="blog-content-bottom">
                <div class="publish-date">
                  <ion-icon name="calendar"></ion-icon>

                  <time datetime="2022-27-04">Apr 27, 2022</time>
                </div>

                <a href="#" class="read-more-btn">Read More</a>
              </div>

            </div>

          </div>
        </li>

      </ul>

    </div>
  </section>




{/* 
  <!-- 
    - #CTA
  --> */}

  <section class="cta">
    <div class="con">

      <div class="cta-card">
        <div class="card-content">
          <h2 class="h2 card-title">Looking for a dream home?</h2>

          <p class="card-text">We can help you realize your dream of a new home</p>
        </div>

        <button class="btn cta-btn">
          <span>Explore Properties</span>

          <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
      </div>

    </div>
  </section>
{/* 
</article>
// </main> */}





{/* <!-- 
- #FOOTER
--> */}

<footer class="footer">

<div class="footer-top">
  <div class="con">

    <div class="footer-brand">

      <a href="#" class="logo">
        <img src="../images/logo-light.png" alt="Homeverse logo" width='200px' height='45px'/>
      </a>

      <p class="section-text">
        Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.
      </p>

      <ul class="contact-list">

        <li>
          <a href="#" class="contact-link">
            <ion-icon name="location-outline"></ion-icon>

            <address>15/4,Geeta nagar,kanpur</address>
          </a>
        </li>

        <li>
          <a href="tel:+918299752170" class="contact-link">
            <ion-icon name="call-outline"></ion-icon>

            <span>8299752170</span>
          </a>
        </li>

        <li>
          <a href="mailto:contact@homeverse.com" class="contact-link">
            <ion-icon name="mail-outline"></ion-icon>

            <span>aniketkatiyar1298@gamil.com</span>
          </a>
        </li>

      </ul>

      <ul class="social-list">

        <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>

      </ul>

    </div>

    <div class="footer-link-box">

      <ul class="footer-list">

        <li>
          <p class="footer-list-title">Company</p>
        </li>

        <li>
          <a href="#" class="footer-link">About</a>
        </li>

        <li>
          <a href="#" class="footer-link">Blog</a>
        </li>

        <li>
          <a href="#" class="footer-link">All Products</a>
        </li>

        <li>
          <a href="#" class="footer-link">Locations Map</a>
        </li>

        <li>
          <a href="#" class="footer-link">FAQ</a>
        </li>

        <li>
          <a href="#" class="footer-link">Contact us</a>
        </li>

      </ul>

      <ul class="footer-list">

        <li>
          <p class="footer-list-title">Services</p>
        </li>

        <li>
          <a href="#" class="footer-link">Order tracking</a>
        </li>

        <li>
          <a href="#" class="footer-link">Wish List</a>
        </li>

        <li>
          <a href="#" class="footer-link">Login</a>
        </li>

        <li>
          <a href="#" class="footer-link">My account</a>
        </li>

        <li>
          <a href="#" class="footer-link">Terms & Conditions</a>
        </li>

        <li>
          <a href="#" class="footer-link">Promotional Offers</a>
        </li>

      </ul>

      <ul class="footer-list">

        <li>
          <p class="footer-list-title">Customer Care</p>
        </li>

        <li>
          <a href="#" class="footer-link">Login</a>
        </li>

        <li>
          <a href="#" class="footer-link">My account</a>
        </li>

        <li>
          <a href="#" class="footer-link">Wish List</a>
        </li>

        <li>
          <a href="#" class="footer-link">Order tracking</a>
        </li>

        <li>
          <a href="#" class="footer-link">FAQ</a>
        </li>

        <li>
          <a href="#" class="footer-link">Contact us</a>
        </li>

      </ul>

    </div>

  </div>
</div>

<div class="footer-bottom">
  <div class="con">

    <p class="copyright">
      &copy; 2022 <a href="#">Aniket Katiyar</a>. All Rights Reserved
    </p>

  </div>
</div>

</footer>



    </div>
  )
}
