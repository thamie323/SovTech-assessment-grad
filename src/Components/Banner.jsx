import React, { Component } from 'react'
import logo from '../Components/public/image/thami.jpeg';
import cse from '../Components/public/image/yt1.png';



class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img id="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></a>
                    <h1> Welcome I'm Thamsanqa Dineka </h1>


                    
            </section>
        )
    }
}

export default Banner


