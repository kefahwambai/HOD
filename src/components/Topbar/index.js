import React from 'react'
import { Link } from 'react-router-dom'
import "./topbar.css"

export default function Topbar() {
  return (
    <div>
        <nav className='topclass'>              
           <div className='row'>
                <div className='col-md-3' style={{color: 'white', fontWeight: '700', paddingLeft: '5rem'}}>
                    <p> 23455 Biziness Lane </p>
                    <p style={{ marginTop: '-1rem'}}> Nairobi, Kenya </p>
                </div>    
                <div className='col-md-3' style={{color: 'white', fontWeight: '700', paddingLeft: '5rem'}}>
                    <p> Office Hours: </p>
                    <p style={{ marginTop: '-1rem'}}> 0900Hrs - 1700Hrs </p>
                </div>  
                <div className='col-md-3' style={{color: 'white', fontWeight: '700', paddingLeft: '5rem'}}>
                    <p> Support </p>
                    <p style={{ marginTop: '-1rem'}}> +254 - 712345678 </p>
                </div>
                <div className='col-md-3'>
                <a style={{borderRadius: "20px", padding:'0.8rem'}} href="#" class="btn btn-primary">Request a Quote</a>  
                </div>             
            </div>        
          </nav>
      </div>
  )
}
