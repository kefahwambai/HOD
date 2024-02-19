import React, { useEffect } from 'react';
import "./header.css"
import Typewriter from "typewriter-effect";


export default function Header() {
  useEffect(() => {
    var myIndex = 0;
    carousel();

    function carousel() {
        var x = document.getElementsByClassName("mySlides");
  
        if (x.length > 0) {
          for (var i = 0; i < x.length; i++) {
            x[i].style.display = "none";
          }
  
          myIndex++;
          if (myIndex > x.length) {
            myIndex = 1;
          }
  
          x[myIndex - 1].style.display = "block";
  
          x[myIndex - 1].classList.add('zoom-out');
  
          setTimeout(() => {
            x[myIndex - 1].classList.remove('zoom-out');
          }, 350);
  
          setTimeout(carousel, 7100);
        }
      }
    }, []);

  return (
    <div>
      <section>
        <div className='header-container'>
          <div className="headerTitles">
            <Typewriter
              options={{
                strings: [
                 "Corporate Events",
                  "Parties",   
                  "Weddings",               
                  
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 300
            }}
          />
          <span className="headerTitleLg">Let's plan your next event together</span>
          </div>
          <div className="slidez w3-content w3-section" style={{}}>
            <img className="mySlides" src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{ width: "100%", height: "100vh" }}  />
            <img className="mySlides" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{ width: "100%",  height: "100vh" }} />
            <img className="mySlides" src="https://images.unsplash.com/photo-1513623935135-c896b59073c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{ width: "100%",  height: "100vh" }}  />
            <img className="mySlides" src="https://img.freepik.com/free-photo/bright-classy-wedding-table-serving_8353-10179.jpg?w=1060&t=st=1708344932~exp=1708345532~hmac=c47d1edb17b5362b4c86aab442b35036611668a310c47aa62a60f18b2490d0b5" style={{ width: "100%",  height: "100vh" }}  />
            <img className="mySlides" src="https://images.unsplash.com/photo-1513623935135-c896b59073c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{ width: "100%",  height: "100vh" }}  />
          </div>
        </div>
      </section>
      <section id="about">
          <div className="main">
            <ul className="cards">
              <li className="cards_item">
                <div className="card">
                  <div className="card_image"><img src="https://images.unsplash.com/photo-1515962187632-cc5c908fd2ca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Garden setting."/></div>
                  <div className="card_content">
                    <h2 className="card_title">House of Dotty, a premier catering and event planning company in Nairobi, Kenya.</h2>
                    <div className="card_text">
                      <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside…</p>
                      <br/>
                      <a href='#' style={{cursor: 'pointer'}}> <p> Read Full Story </p></a>                     
                    </div>
                  </div>
                </div>                
              </li>         
            </ul>
          </div>
      </section>
    </div>

    

  );
}