import React from 'react'
import './About.css'
import SideImage from '../../Components/Assets/About_Side Image.png'
import IconShop from '../../Components/Assets/icon_shop.png'
import IndivImage from '../../Components/Assets/image 46.png'
import DeliveryIcon from "../../Components/Assets/icon-delivery.png"

function About() {
    return (
        <div className="about-container">
            <div className="story">
                <div className="text">
                    <h1>Our Story</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestiae earum, in magnam, et magni saepe vero quaerat accusantium optio ipsum maiores repellendus dolorem amet illo consectetur ipsam voluptatum corrupti.</p>
                </div>
                <img src={SideImage} alt="Our Story Side Image" />
            </div>
            <div className="counter">
                {[...Array(4)].map((_, index) => (
                    <div className="stat" key={index}>
                        <div className="icon-stat">
                            <div className="icon">
                                <img src={IconShop} alt="Shop Icon" />
                            </div>
                            <div className="desc">
                                <h3>10.5k</h3>
                                <p>Sellers Active at Our Site</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="persona">
                {[...Array(3)].map((_, index) => (
                    <div className="indiv" key={index}>
                        <div className="indiv-img">
                            <img src={IndivImage} alt="Individual" />
                        </div>
                        <div className="indiv-desc">
                            <div className="name">
                                <h3>Henok Tarekegn</h3>
                                <p>Founder</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="benefits">
                {[...Array(3)].map((_, index) => (
                    <div className="benefit" key={index}>
                        <div className="benefit-icon">
                            <img src={DeliveryIcon} alt="Individual" />
                        </div>
                        <div className="benefit-desc">
                            <div className="ben">
                                <h3>FREE AND FAST DELIVERY</h3>
                                <p>Free Delivery For all Orders</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;