import React from 'react'
import "./menus.css"


export default function Venues() {
  return (
    <div>
    <section id="abthead">
        <div className='abth1'>
            <h1> Venues </h1>
            <p> &gt; </p>
        </div>
    </section>
    <section id="food">
        <div style={{textAlign: 'center', padding: '15rem', fontSize: '2.5rem', color: 'black'}}>
        <h1 >
        We offer our expertise in the area of choosing the perfect site having had the privilege to cater and plan magnificent events at some of Kenya's most beautiful public and private venues over the past 35 years.
        </h1>
        </div>       
        <div className='row' style={{ marginLeft: '10rem', marginTop: '-10rem'}}>
        <div className='col-md-6' style={{marginTop: '2rem'}}>
            <div class="menucard" style={{width: "30rem"}}>
                <img src="https://images.unsplash.com/photo-1545447859-096b1442cd4b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top venueimg" alt="..."/>               
            </div>
            <div style={{ color: 'black', marginTop: '5rem', marginLeft: '5rem'}}>
            <h1 style={{ fontSize: "2rem"}}> North Forbes Pavillion </h1>
            <p style={{ marginLeft: '4rem'}} >Forbes Park, Makati City</p>
            </div>
            
        </div>
        <div className='col-md-6' style={{marginTop: '2rem'}}>
        <div class="menucard" style={{width: "30rem"}}>
                <img src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top venueimg" alt="..."/>       
                         
                </div>
            <div style={{ color: 'black', marginTop: '5rem', marginLeft: '5rem'}}>
            <h1 style={{ fontSize: "2rem"}}> North Forbes Pavillion </h1>
            <p style={{ marginLeft: '4rem'}} >Forbes Park, Makati City</p>
            </div>
        </div> 
        <div className='col-md-6' style={{marginTop: '5rem'}}>
            <div class="menucard" style={{width: "30rem"}}>
                <img src="https://images.unsplash.com/photo-1604329756574-bda1f2cada6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top venueimg" alt="..."/>        

                </div>
            <div style={{ color: 'black', marginTop: '5rem', marginLeft: '5rem'}}>
            <h1 style={{ fontSize: "2rem"}}> North Forbes Pavillion </h1>
            <p style={{ marginLeft: '4rem'}} >Forbes Park, Makati City</p>
            </div>
        </div> 
        <div className='col-md-6' style={{marginTop: '5rem'}}>
            <div class="menucard" style={{width: "30rem"}}>
                <img src="https://images.unsplash.com/photo-1578687388049-079580e6eb2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top venueimg" alt="..."/>
           
                </div>
            <div style={{ color: 'black', marginTop: '5rem', marginLeft: '5rem'}}>
            <h1 style={{ fontSize: "2rem"}}> North Forbes Pavillion </h1>
            <p style={{ marginLeft: '4rem'}} >Forbes Park, Makati City</p>
            </div>
        </div> 
        <div className='col-md-6' style={{marginTop: '5rem'}}>
            <div class="menucard" style={{width: "30rem"}}>
                <img src="https://images.unsplash.com/photo-1554306297-0c86e837d24b?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top venueimg" alt="..."/>   
           
                </div>
            <div style={{ color: 'black', marginTop: '5rem', marginLeft: '5rem'}}>
            <h1 style={{ fontSize: "2rem"}}> North Forbes Pavillion </h1>
            <p style={{ marginLeft: '4rem'}} >Forbes Park, Makati City</p>
            </div>
            
        </div> 
        <div className='col-md-6' style={{marginTop: '5rem'}}>
            <div class="menucard" style={{width: "30rem"}}>
                <img src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top venueimg" alt="..."/> 
             
                </div>
            <div style={{ color: 'black', marginTop: '5rem', marginLeft: '5rem'}}>
            <h1 style={{ fontSize: "2rem"}}> North Forbes Pavillion </h1>
            <p style={{ marginLeft: '4rem'}} >Forbes Park, Makati City</p>
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
