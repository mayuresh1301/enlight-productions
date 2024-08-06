import React, { useState, useEffect} from "react";
import { getReviews, addReview } from "../services/ReviewService";
import "./Reviews.css";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState('');
    const [review, setReview] = useState('');

    useEffect(() => {
        loadReviews();
    }, []);

    const loadReviews = async () => {
        const fetchedReviews = await getReviews();
        setReviews(fetchedReviews);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newReview = await addReview(name, review);
        setReviews([newReview, ...reviews]);
        setName('');
        setReview('');
    };

    return(
        <div className="reviews">
            <h1>Customer Reviews</h1>
            <form onSubmit={handleSubmit} className="review-form">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <textarea
                    placeholder="Your Review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Submit Review</button>
            </form>

            <div className="review-list">
                {
                    reviews.map(review => (
                        <div key={review.id} className="review-item">
                            <h3>{review.name}</h3>
                            <p>{review.body}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Reviews;