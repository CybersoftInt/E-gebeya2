import React from 'react'
import "./About.css"
import SideImage from "../../Components/Assets/About_Side Image.png"
import IconShop from "../../Components/Assets/icon_shop.png"
function About() {
    return (
        <div>
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
        </div>
    )
}

export default About