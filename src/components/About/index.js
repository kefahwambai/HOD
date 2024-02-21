import React from 'react'
import { useEffect } from 'react';
import "./about.css"


export default function About() {

    var slideIndex = 1;

    useEffect(() => {
      showSlides(slideIndex);
  
      const intervalId = setInterval(() => {
        plusSlides(1);
      }, 4000);
  
      return () => clearInterval(intervalId);
    }, []); 
  
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
  
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
  
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (slides.length === 0 || dots.length === 0) {
        return; // Ensure elements are found before proceeding
      }
  
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
    

  return (
    <div className='abt'>
      <section id="abthead">
        <div className='abth1'>
            <h1> About US </h1>
        </div>
      </section>
      <section id="abtwelc">
        <div>
            <img className='abtwelcke' src='https://images.unsplash.com/photo-1604702433171-33756f3f3825?q=80&w=2005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        </div>       
        <div className="abtwelcnt">
            <h2 className="abtweltitle">House of Dotty, a premier catering and event planning company in Nairobi, Kenya.</h2>
            <div className="abtweltxt">
            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside…</p>
            </div>
        </div>
    </section>
      <section id="abtstory">
        <div className='abtstorycont'>
            <div className="abtcard">
                <img src="https://demo2.wpopal.com/grenda2/wp-content/uploads/2022/08/about_img3.jpg" class="card-img-top" alt="..." />               
            </div>
            <div className="abtcnta">
                <div>
                    <div className="mySlides">
                        <h1>
                            1999
                        </h1>
                        <h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        
                    </div>

                    <div className="mySlides">
                        <h1>
                            2000
                        </h1>
                        <h3>
                        Lorem ipsum. 
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        
                    </div>

                    <div className="mySlides">
                        <h1>
                            2001
                        </h1>
                        <h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        
                    </div>
                </div>          
          </div>
          <div className="dot-container">
            <span className="dot" onClick={() => currentSlide(1)}></span>
            <span className="dot" onClick={() => currentSlide(2)}></span>
            <span className="dot" onClick={() => currentSlide(3)}></span>
          </div>
        </div>      
      </section>
      <section id="booksec">
        <div className='booksecont'>
            <h6 style={{ fontWeight: "800"}}>
                 UPCOMING EVENTS? BOOK NOW
            </h6>
            <h1 style={{ fontSize: "4rem"}}>
                 Let Us Make Your Events Flawless
            </h1>
            <div class="conta">
                <a href="#" class="button type--A">
                    <div class="button__line"></div>
                    <div class="button__line"></div>
                    <span class="button__text">ENTRY</span>
                    <div class="button__drow1"></div>
                    <div class="button__drow2"></div>
                </a>
                </div>
        </div>
      </section>
    </div>
  )
}
