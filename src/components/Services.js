import React from "react";
import "./Services.css";

const Services = () => {
    return (
        <div className="services">
            <h1>Our Services</h1>

            <div className="service-section">
                <h2>Live Streams</h2>
                <p>We offer professional live streaming services for weddings, events, and more, ensuring every moment is captured in real time for your guests.</p>
            </div>

            <div className="service-section">
                <h2>Photo Booth</h2>
                <p>Our photo booths are a fun and interactive way to capture the moments during your events.</p>
            </div>

            <div className="service-section">
                <h2>Albums</h2>
                <p>We create beautifully crafted albums that tell the story of your event, with a range of options to suit your style and budget.</p>
            </div>

            <div className="service-section">
                <h2>Weddings</h2>
                <p>Our wedding photography and videography services are designed to capture the special moments of your big day in stunning detail.</p>
            </div>

            <div className="service-section">
                <h2>New Born</h2>
                <p>Our newborn photography services capture the precious early moments of your childs life with gentle and professional care.</p>
            </div>
        </div>
    );
}

export default Services;