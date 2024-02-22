import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import "./contact.css"

export default function Contact() {
    useEffect(() => {
        const sendLetter = document.getElementById('sendLetter');
        const addClass = () => {
            document.body.classList.add('sent');
        };

        sendLetter.addEventListener('click', addClass);

        return () => {
            sendLetter.removeEventListener('click', addClass);
        };
    }, []);
return (
<div>
    <section id="abthead">
        <div className='abth1'>
            <h1> Contact </h1>
            <br/>
            <a><Link to="/">Home</Link>   &gt;  About </a>     
        </div>
    </section>
    <section id="contactsec">
        <div style={{ textAlign: 'center', marginTop: '8rem', color: 'black'}}>
            <h3>GET IN TOUCH</h3>
            <h1> Feel Free To Contact Us</h1>
        </div>
        <div style={{ marginTop: '5rem', width: '50vw'}} class="wrapper centered">         
            <article className="letter" style={{ width: '50vw'}}>
                <div class="side">
                    <h1 style={{ fontSize: '2rem', fontFamily: 'Dancing Script' }}>Contact us</h1>
                    <p style={{ marginTop: '2rem'}}>
                        <textarea placeholder="Your message"></textarea>
                    </p>
                </div>
                <div class="side">
                    <p style={{ marginTop: '2rem'}}>
                        <input type="text" placeholder="Your name" />
                    </p>
                    <p>
                        <input type="email" placeholder="Your email" />
                    </p>
                    <p>
                        <button id="sendLetter">Send</button>
                    </p>
                </div>
            </article>
            <div class="envelope front"></div>
            <div class="envelope back"></div>
            </div>

            <p class="result-message centered">Thank you for your message</p>

    </section>


</div>
)
}
