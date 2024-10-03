import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "./ReviewCards.css";

const ReviewCards = ({ photoId }) => {
    const [reviews, setReviews] = useState([]);
    useEffect (() => {
        const fetchReviews = async () => {
            try {
                const q = query(collection(db, 'reviews'), where('photoId', '==', photoId));
                const querySnapshot = await getDocs(q);
                const reviewsData = querySnapshot.docs.map(doc => doc.data());
                setReviews(reviewsData);
            } catch (error) {
                console.error('Error getting reviews:', error);
            };
        };
        fetchReviews();
    }, [photoId]);

    return (
        <div className="review-cards">
            {reviews.length > 0 ? (
                reviews.map((review, index) => (
                    <div key={index} className="review-card">
                        <p style={{ color: '#ff4081', fontWeight: 'bold' }}><strong>{review.author}</strong></p>
                        <p style={{ color: '#f1f1f1' }}>{review.text}</p>
                        {review.rating && <p>Rating: {review.rating}</p>}
                    </div>
                ))
            ) : (
                <p>No reviews available.</p>
            )};
        </div>
    );
};

export default ReviewCards;