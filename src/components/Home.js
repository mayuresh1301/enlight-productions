import React from "react";
import "./Home.css";
import RollingReviews from "./RollingReviews";

const Home = () => {
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

            <RollingReviews />

        </div>

    );

};

export default Home;