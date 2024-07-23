import React from 'react'
import "./About.css"
import SideImage from "../../Components/Assets/About_Side Image.png"
import IconShop from "../../Components/Assets/icon_shop.png"
import IndivImage from "../../Components/Assets/image 46.png"
function About() {
    return (
        <div className='about'>
            <div className="story">
                <div className="text">
                    <h1>Our Story</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestiae earum, in magnam, et magni saepe vero quaerat accusantium optio ipsum maiores repellendus dolorem amet illo consectetur ipsam voluptatum corrupti.</p>
                </div>
                <img src={SideImage} alt="" />
            </div>
            <div className="counter">
                <div className="stat">
                    <div className="icon-stat">
                        <div className="icon">
                            <img src={IconShop} alt="" />
                        </div>
                        <div className="desc">
                            <h3>10.5k</h3>
                            <p>Sellers Active at Our Site</p>
                        </div>
                    </div>




                </div>
                <div className="stat">
                    <div className="icon-stat">
                        <div className="icon">
                            <img src={IconShop} alt="" />
                        </div>
                        <div className="desc">
                            <h3>10.5k</h3>
                            <p>Sellers Active at Our Site</p>
                        </div>
                    </div>




                </div>
                <div className="stat">
                    <div className="icon-stat">
                        <div className="icon">
                            <img src={IconShop} alt="" />
                        </div>
                        <div className="desc">
                            <h3>10.5k</h3>
                            <p>Sellers Active at Our Site</p>
                        </div>
                    </div>




                </div>
                <div className="stat">
                    <div className="icon-stat">
                        <div className="icon">
                            <img src={IconShop} alt="" />
                        </div>
                        <div className="desc">
                            <h3>10.5k</h3>
                            <p>Sellers Active at Our Site</p>
                        </div>
                    </div>




                </div>


            </div>
            <div className="persona">
                <div className="indiv">
                    <div className="indiv-img">
                        <img src={IndivImage} alt="" />
                    </div>
                    <div className="indiv-desc">
                        <div className="name">
                            <h3>Henok Tarekegn</h3>
                            <p>Founder</p>
                        </div>

                    </div>
                </div>
                <div className="indiv">
                    <div className="indiv-img">
                        <img src={IndivImage} alt="" />
                    </div>
                    <div className="indiv-desc">
                        <div className="name">
                            <h3>Henok Tarekegn</h3>
                            <p>Founder</p>
                        </div>

                    </div>
                </div>
                <div className="indiv">
                    <div className="indiv-img">
                        <img src={IndivImage} alt="" />
                    </div>
                    <div className="indiv-desc">
                        <div className="name">
                            <h3>Henok Tarekegn</h3>
                            <p>Founder</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About