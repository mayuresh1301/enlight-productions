import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
//import "./RollingReviews.css";

const RollingReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [currentReview, setCurrentReview] = useState(0);

    useEffect(() => {
        const fetchFeaturedReviews = async () => {
            try {
                const q = query(collection(db, 'reviews'), where('featured', '==', true));
                const querySnapshot = await getDocs(q);
                if(!querySnapshot.empty) {
                    const reviewsData = querySnapshot.docs.map(doc => doc.data());
                    setReviews(reviewsData);
                } else {
                    console.log('No featured reviews available.');
                };
            } catch (error) {
                console.error('Error getting reviews:', error);
            };
        };
        fetchFeaturedReviews();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [reviews]);

    return (
        <div className="rolling-reviews">
            {reviews.length > 0 && reviews[currentReview] && (
                <div className="review">
                    <p><strong>{reviews[currentReview].author}</strong></p>
                    <p>{reviews[currentReview].text}</p>
                </div>
            )}
        </div>
    );
};

export default RollingReviews;

