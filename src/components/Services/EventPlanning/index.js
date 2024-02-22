import React from 'react'
import "../Corporate/corporate.css"
import { Link } from 'react-router-dom'


export default function EventPlanning() {
  return (
    <div>
    <section id="abthead">
        <div className='abth1'>
            <h1> EventPlanning </h1>
            <p> &gt; </p>

        </div>
    </section>
    <section id="corpoverview">
    <div className='plaHead'>
          <h1 style={{fontSize: '3rem'}}>
            OverView
          </h1>
          <hr style={{color: 'darkgrey', width: "65vw"}}/>
          <p style={{ width: "63vw", fontSize: '1.2rem', marginTop: '2rem', marginBottom: '3rem'}}>
          Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside… , the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.
          </p>
          <div style={{ width: '15vw', float: 'right', marginTop: '-13rem'}}>
            <ul className="corpservice" >
                <p style={{listStyle: 'none', fontSize: '2rem', color: 'black'}} className="">Services</p>
                <hr style={{marginLeft: '-1rem'}}/>
                <li  style={{fontWeight: '700', cursor: 'pointer'}} className=""><Link style={{color: 'black', textDecoration: 'none'}} to="/corporate">CORPORATE</Link></li>
                <hr style={{marginLeft: '-1rem'}}/>
                <li style={{cursor: 'pointer'}} className="">WEDDINGS</li>
                <hr style={{marginLeft: '-1rem'}}/>
                <li style={{cursor: 'pointer'}} className="">EVENT PLANNING</li>
                <hr style={{marginLeft: '-1rem'}}/>
                <li style={{cursor: 'pointer'}} className="">PARTIES</li>
                <hr style={{marginLeft: '-1rem'}}/>
            </ul>
          </div>
          <img src="https://demo2.wpopal.com/grenda2/wp-content/uploads/2022/08/services-4.jpeg"/>
          <div>
            <h1 style={{ marginTop: '3rem', fontSize: '2.3rem'}}>
                Our Services Including
            </h1>
            <hr style={{color: 'black', width: "59vw"}}/>

            <div id="acle">
                <div >
                    <h2  style={{fontSize: '5rem'}} >
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        01. Creating Memorable Events
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div style={{ marginLeft: '2rem'}} class="accordion-body">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside…</div>
                    </div>
                </div>
                <hr style={{marginLeft: '-1rem', width: "60vw"}}/>
                <div >
                    <h2 >
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        02. Financial investment counseling
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div style={{ marginLeft: '2rem'}}  class="accordion-body">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside…</div>
                    </div>
                </div>
                <hr style={{marginLeft: '-1rem', width: "60vw"}}/>
                <div>
                    <h2>
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        03. Buy and Sell agreements
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div style={{ marginLeft: '2rem'}}  class="accordion-body">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside…</div>
                    </div>
                </div>
                </div>
          </div>

        <h1 style={{fontSize: '3rem', marginTop: '4rem'}}>
            Our Packages
        </h1>
        <hr style={{color: 'black', width: "59vw"}}/>
        <div id="servcard" className='row'>
            <div className='col-md-3'>
                <div class="servicecard" style={{width: "18rem", border: '2px', borderStyle: 'solid'}}>
                    <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..."/>
                    <div class="card-body" style={{ color: 'black', marginLeft: '-2rem'}}>
                        <ul>
                            <li style={{marginTop:'3rem', marginBottom: ''}}> Briadal Bouquests </li>
                            <hr style={{ width: "12vw", marginLeft: '2.5rem'}}/>
                            <li> Bridesmaids' Bouquests </li>
                            <hr style={{ width: "12vw", marginLeft: '2.5rem'}}/>
                            <li> Corsages </li>
                            <hr style={{ width: "12vw", marginLeft: '2.5rem'}}/>
                            <li> Boutonnieres </li>
                        </ul>
                        <h2 style={{ marginTop:"2rem", marginLeft: '2rem'}}> from </h2>  
                        <h3 style={{marginLeft: '2rem'}}> Ksh 50,0000/- </h3>                     
                        <a style={{marginBottom: '2rem', marginLeft: '2rem', marginTop: '4rem', borderRadius: "20px", padding:'0.8rem'}} href="#" class="btn btn-primary">Contact Now</a>
                    </div>
                </div>
            </div>            
            <div className='col-md-3'>
                <div class="servicecard" style={{width: "18rem", border: '2px', borderStyle: 'solid'}}>
                    <img src="https://images.unsplash.com/photo-1481070414801-51fd732d7184?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..."/>                    
                    <div class="card-body" style={{ color: 'black', marginLeft: '-2rem'}}>
                        <ul>
                            <li style={{marginTop:'3rem', marginBottom: ''}}> Briadal Bouquests </li>
                            <hr style={{ width: "12vw", marginLeft: '2.5rem'}}/>
                            <li> Bridesmaids' Bouquests </li>
                            <hr style={{ width: "12vw", marginLeft: '2.5rem'}}/>
                            <li> Corsages </li>
                            <hr style={{ width: "12vw", marginLeft: '2.5rem'}}/>
                            <li> Boutonnieres </li>
                        </ul>
                        <h2 style={{ marginTop:"2rem", marginLeft: '2rem'}}> from </h2>  
                        <h3 style={{marginLeft: '2rem'}}> Ksh 50,0000/- </h3>                     
                        <a style={{marginBottom: '2rem', marginLeft: '2rem', marginTop: '4rem', borderRadius: "20px", padding:'0.8rem'}} href="#" class="btn btn-primary">Contact Now</a>
                    </div>
                </div>
            </div>    
            <div className='col-md-2'>
                <div class="servicecard" style={{width: "18rem", border: '2px', borderStyle: 'solid'}}>
                    <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..."/>
                    <div class="card-body" style={{ color: 'black', marginLeft: '-2rem'}}>
                        <ul>
                            <li style={{marginTop:'3rem', marginBottom: ''}}> Briadal Bouquests </li>
                            <hr style={{ width: "12vw", marginLeft: '2.5rem'}}/>
                            <li> Bridesmaids' Bouquests </li>
                            <hr style={{ width: "12vw", marginLeft: '2.5rem'}}/>
                            <li> Corsages </li>
                            <hr style={{ width: "12vw", marginLeft: '2.5rem'}}/>
                            <li> Boutonnieres </li>
                        </ul>
                        <h2 style={{ marginTop:"2rem", marginLeft: '2rem'}}> from </h2>  
                        <h3 style={{marginLeft: '2rem'}}> Ksh 50,0000/- </h3>                     
                        <a style={{marginBottom: '2rem', marginLeft: '2rem', marginTop: '4rem', borderRadius: "20px", padding:'0.8rem'}} href="#" class="btn btn-primary">Contact Now</a>
                    </div>
                </div>
            </div>    
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
                    <span class="button__text">SEND REQUEST</span>
                    <div class="button__drow1"></div>
                    <div class="button__drow2"></div>
                </a>
                </div>
        </div>
      </section>

    </div>
  )
}
