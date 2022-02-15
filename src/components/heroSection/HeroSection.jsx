import React from 'react'
import './heroSection.css'

function HeroSection() {
    return (
        <div className='heroSection'>
            <img src="./img/bg.jpg" alt=""/>
            {/* <video src="./img/bg2.mp4" loop autoPlay muted /> */}
            <div className="heroContainer">
                <h1>Welcome To My Website!</h1>
                <p>Hey, this is my website. Are you belive it?</p>
                <div className="heroBtns">
                    <button><i className="fa fa-edit"></i>Read more</button>
                    <button><i className="fa fa-play-circle"></i> Watch video</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
