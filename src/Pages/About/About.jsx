import React from 'react';
import './About.css';
import SideImage from '../../Components/Assets/About_Side Image.png';
import IconShop from '../../Components/Assets/icon_shop.png';
import IndivImage from '../../Components/Assets/image 46.png';
import DeliveryIcon from "../../Components/Assets/icon-delivery.png";
import EmmaWatson from '../../Components/Assets/About_Side Image.png'; // Replace with actual path
import TomCruise from '../../Components/Assets/About_Side Image.png'; // Replace with actual path
import moneyBag from "../../Components/Assets/Icon-Moneybag.png"
import saleIcon from "../../Components/Assets/Icon-Sale.png"
import shoopingBag from "../../Components/Assets/Icon-Shopping bag.png"
import customerSupport from "../../Components/Assets/Icon-Customer service.png"
import secure from "../../Components/Assets/Icon-secure.png"

function About() {
    // Benefits Array
    const benefits = [
        {
            title: "24/7 Customer Service",
            description: "Friendly 24/7 customer support",
            icon: DeliveryIcon,
        },
        {
            title: "Money Back Guarantee",
            description: "We reurn money within 30 days",
            icon: customerSupport,
        },
        {
            title: "FREE AND FAST DELIVERY",
            description: "Free Delivery For all Orders",
            icon: secure,
        }
    ];

    // Persona Array
    const personas = [
        {
            name: "Emma Watson",
            role: "Customer Support Specialist",
            img: EmmaWatson,
        },
        {
            name: "Tom Cruise",
            role: "Personalized Support Specialist",
            img: TomCruise,
        }
    ];
    const counters = [
        {
            title: "10.5k",
            description: "Sellers Active at Our Site",
            icon: IconShop
        },
        {
            title: "33k",
            description: "Monthly Product Sale",
            icon: saleIcon
        },
        {
            title: "45.5k",
            description: "Customers Active on Our Site",
            icon: shoopingBag
        },
        {
            title: "25k",
            description: "Annual Gross Sale on Our Site",
            icon: moneyBag
        }
    ];

    return (
        <div className="about-container">
            <div className="story">
                <div className="text">
                    <h1>Our Story</h1>
                    <p>Launced in 2024, Exclusive is Ethiopia’s premier online shopping makterplace with an active presense in Adiss Ababa. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                <img src={SideImage} alt="Our Story Side Image" />
            </div>
            <div className="counter">
            {counters.map((counter, index) => (
                    <div className="stat" key={index}>
                        <div className="icon-stat">
                            <div className="icon">
                                <img src={counter.icon} alt="Shop Icon" />
                            </div>
                            <div className="desc">
                                <h3>{counter.title}</h3>
                                <p>{counter.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="persona">
                {personas.map((persona, index) => (
                    <div className="indiv" key={index}>
                        <div className="indiv-img">
                            <img src={persona.img} alt={persona.name} />
                        </div>
                        <div className="indiv-desc">
                            <div className="name">
                                <h3>{persona.name}</h3>
                                <p>{persona.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="benefits">
                {benefits.map((benefit, index) => (
                    <div className="benefit" key={index}>
                        <div className="benefit-icon">
                            <img src={benefit.icon} alt={benefit.title} />
                        </div>
                        <div className="benefit-desc">
                            <div className="ben">
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;
