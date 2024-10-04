import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faCamera, faBook, faHeart, faBaby } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

const servicesData = [
    {
        icon: faVideo,
        title: "Live Streams",
        description: "We offer professional live streaming services for weddings, events, and more, ensuring every moment is captured in real time for your guests."
    },
    {
        icon: faCamera,
        title: "Photo Booth",
        description: "Our photo booths are a fun and interactive way to capture the moments during your events."
    },
    {
        icon: faBook,
        title: "Albums",
        description: "We create beautifully crafted albums that tell the story of your event, with a range of options to suit your style and budget."
    },
    {
        icon: faHeart,
        title: "Weddings",
        description: "Our wedding photography and videography services are designed to capture the special moments of your big day in stunning detail."
    },
    {
        icon: faBaby,
        title: "New Born",
        description: "Our newborn photography services capture the precious early moments of your childs life with gentle and professional care."
    },
];

const Services = () => {
    return (
        <div className="services">
            <h1 className="services-title">Our Services</h1>
            <div className="services-container">
                {servicesData.map((service, index) => (
                    <div key={index} className="service-section">
                        <FontAwesomeIcon icon={service.icon} className="service-icon" />
                        <div className="service-details">
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;