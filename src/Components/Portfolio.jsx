import React, { Component } from 'react'
import pybot from '../Components/public/image/pybot.png';
import Opencv from '../Components/public/image/Snapshot.png';
import NightMares from '../Components/public/image/menu3.png';
import RecorderMaintainer from '../Components/public/image/de.png';
import WordPress from '../Components/public/image/blog.png';
import Password from '../Components/public/image/bute.png';




class Portfolio extends Component {
    render() {
        return (
            
         <section className="container-about">
                  <h1 id='Portfolio'>Why SovTech</h1>
                  <p>These are a one of many reasons why I chose SovTech.</p>
                    <br></br>
                    <ul>
                    <li> SovTech is dedicated to upskilling young graduates such as me and giving them a chance to establish themselves.</li>
                    <li>The Spex that the company enforces seem to resonate with individuals and they are key to a great success</li>
                    <li>The skill distribution is broad enough for one to learn new things and also master what you already know.</li>
                    </ul>
                       
        </section>
        )
    }
}

export default Portfolio


