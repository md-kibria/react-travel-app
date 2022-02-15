import React from 'react'
import './footer.css'

function Foooter() {
    return (
        <div className='footer'>
            <h4>Join the Adventure newsletter to receive our best vacation deal</h4>
            <div className="subs">
                <p>You can unsubscribe any time</p>
                <div className="subsFields">
                    <input type="text" className="subsText" placeholder="yourmail@example.com" />
                    <button className="subsBtn">Subscribe</button>
                </div>
                <div className="footerNavs">
                    <div className="aboutUsSection sce">
                        <h5>About US</h5>
                        <ul>
                            <li>
                                <a>How it works</a>
                            </li>
                            <li>
                                <a>Testimonial</a>
                            </li>
                            <li>
                                <a>Carars</a>
                            </li>
                            <li>
                                <a>Investors</a>
                            </li>
                            <li>
                                <a>Terms of Services</a>
                            </li>
                        </ul>
                    </div>
                    <div className="contctUsSection sce">
                        <h5>Contact Us</h5>
                        <ul>
                            <li>
                                <a>Contact</a>
                            </li>
                            <li>
                                <a>Support</a>
                            </li>
                            <li>
                                <a>Destinations</a>
                            </li>
                            <li>
                                <a>Sponsorship</a>
                            </li>
                        </ul>
                    </div>
                    <div className="videoSection sce">
                        <h5>Videos</h5>
                        <ul>
                            <li>
                                <a>Submit Video</a>
                            </li>
                            <li>
                                <a>Ambassadors</a>
                            </li>
                            <li>
                                <a>Agency</a>
                            </li>
                            <li>
                                <a>Influencer</a>
                            </li>
                        </ul>
                    </div>
                    <div className="socialMediaSection sce">
                        <h5>Social Media</h5>
                        <ul>
                            <li>
                                <a>Instagram</a>
                            </li>
                            <li>
                                <a>Facebook</a>
                            </li>
                            <li>
                                <a>Youtube</a>
                            </li>
                            <li>
                                <a>Twitter</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footerBottom">
                    <h3 className="logo">Travel</h3>
                    <p className="copyRight">&copy;travel2020</p>
                    <div className="social">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-instagram"></i>
                        <i className="fa fa-youtube-play"></i>
                        <i className="fa fa-twitter"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Foooter
