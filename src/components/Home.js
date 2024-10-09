import React, { useEffect } from "react";
import "./Home.css";
import RollingReviews from "./RollingReviews";
/*
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faVideo,
    faCamera,
    faBook,
    faHeart,
    faBaby,
} from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";
*/

import LiveStreamImg from "../assets/live_stream.jpg";
import PhotoBoothImg from "../assets/photobooth.jpg";  
import AlbumImg from "../assets/album.jpg";
import WeddingImg from "../assets/weddings.jpg";
import NewBornImg from "../assets/newborn.jpg";

const servicesData = [
    {
        //icon: faVideo,
        title: "Live Streams",
        description:
            "We offer professional live streaming services for weddings, events, and more, ensuring every moment is captured in real time for your guests.",
        equipment: "HD Cameras, Streaming Software, Stabilizers",
        products: "Live Stream Video, Recorded Footage",
        packages: [
            "Basic Package: Single Camera Setup",
            "Standard Package: Multi-Camera Setup",
            "Premium Package: Multi-Camera Setup + Drone Footage",
        ],
        image: LiveStreamImg,
    },
    {
        //icon: faCamera,
        title: "Photo Booth",
        description:
            "Our photo booths are a fun and interactive way to capture the moments during your events.",
        equipment: "Photo Booth, Props, Backdrops",
        products: "Instant Prints, Digital Copies",
        packages: [
            "Standard Booth",
            "Booth with Props",
            "Customizable Backdrops",
        ],
        image: PhotoBoothImg,
    },
    {
        //icon: faBook,
        title: "Albums",
        description:
            "We create beautifully crafted albums that tell the story of your event, with a range of options to suit your style and budget.",
        equipment: "Professional Cameras, Lighting, Editing Software",
        products: "Photo Albums, Digital Albums",
        packages: [
            "Standard Album",
            "Premium Leather Album",
            "Custom Album",
        ],
        image: AlbumImg,
    },
    {
        //icon: faHeart,
        title: "Weddings",
        description: 
            "Our wedding photography and videography services are designed to capture the special moments of your big day in stunning detail.",
        equipment: "Professional Cameras, Lighting equipment, Drones",
        products: "Photos, Videos, Highlight Reels",
        packages: [
            "Basic Package: Photos",
            "Standard Package: Photos + Videos",
            "Premium Package: Photos + Videos + Album",
        ],
        image: WeddingImg,    
    },
    {
        //icon: faBaby,
        title: "New Born",
        description:
            "Our newborn photography services capture the precious early moments of your child's life with gentle and professional care.",
        equipment: "Soft Lighting, Props, Cozy setups",
        products: "Prints, Digital Images, Birth Announcements",
        packages: [
            "In Studio Session",
            "At Home Session",
            "Family Session",
        ],
        image: NewBornImg,
    }
];

const Home = () => {
    useEffect(() => {
        // useEffect hook for scroll animation
        const services = document.querySelectorAll(".service-item");
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        } 

        const observerCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "translateY(0)";
                    observer.unobserve(entry.target);
                }
            })
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        services.forEach((service) => {
            observer.observe(service);
        });

    }, []);
    return (
        <div className="home">
            <h1>Featured Photos and Videos</h1>
            <div className="featured-container">
                <div className="featured-item">
                    <img src="https://via.placeholder.com/150" alt="Featured" />
                    <p>Category: Events</p>
                    <p>Details: Event Details go here.</p>
                </div>
                <div className="featured-item">
                    <img src="https://via.placeholder.com/150" alt="Featured" />
                    <p>Category: Weddings</p>
                    <p>Details: Wedding Details go here.</p>
                </div>
            </div>

            {/* Services Section */}
            <section className="services-section">
                <h2 className="services-title">Our Services</h2>
                {servicesData.map((service, index) => (
                    <div 
                        key = {index}
                        className={`service-item ${
                            index % 2 == 0 ? "left" : "right"
                        }`}
                    >
                        <div className="service-content">
                            <div className="icon-title-wrapper">
                                <div className="icon-wrapper">
                                    {/*<FontAwesomeIcon icon={service.icon} className="service-icon" />*/}
                                </div>
                                <h3>{service.title}</h3>
                            </div>
                            <p>{service.description}</p>

                            {/* New Details */}
                            <div className="service-details">
                                <h4>Equipment Used:</h4>
                                <p>{service.equipment}</p>

                                <h4>Products Offered:</h4>
                                <p>{service.products}</p>

                                <h4>Package Options:</h4>
                                <ul>
                                    {service.packages.map((packageOption, idx) => (
                                        <li key={idx}>{packageOption}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="service-image">
                            <img src={service.image} alt={service.title} />
                        </div>
                    </div>
                ))}
            </section>

            <RollingReviews />

        </div>

    );

};

export default Home;