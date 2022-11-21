import React, { Component } from 'react'
import biologo from './public/image/biopicimg.jpg'

class About extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                    <h1>About Me</h1> 

                    <img src={biologo} width="180" height="180" alt="abtimg"/>
                    <p>I am a graduate from the university of Pretoria and have completed my
                       degree in Bsc Computer Science. I am passionate about system
                       development and looking forward to furthering my knowledge. I have
                       recently completed the AZ 900 certificate and also Certified testing i
                       broaden my capabilities and skills
                    </p>
                
            </section>
        )
    }
}

export default About
