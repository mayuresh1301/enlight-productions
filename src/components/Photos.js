import React, {useState, useEffect} from "react";
import './Photos.css';
import ReviewCards from "./ReviewCards";

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    const [category, setCategory] = useState("");

    useEffect(() => {
        fetchPhotos();
    }, [category]);

    const fetchPhotos = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await response.json();
        setPhotos(data.slice(0, 10));
    };


    return (
        <div className="photos">

            <h1 className="photos-title">Photo Gallery</h1>
            <select 
                className="category-select"
                onChange={(e) => setCategory(e.target.value)} 
                value={category}
            >
                    <option value="">ALL</option>
                    <option value="events">Events</option>
                    <option value="weddings">Weddings</option>
            </select>
            <div className="photo-gallery">
                {photos.map((photo) => (
                    <div key={photo.id} className="photo-item">
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                        <p className="photo-title">{photo.title}</p>
                        <ReviewCards photoId={photo.id} />
                    </div>
                ))}
            </div>
                
            
        </div>
    );
};

export default Photos;