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

            <h1>Photos</h1>
            <select onChange={(e) => setCategory(e.target.value)} value={category}>
                <option value="">ALL</option>
                <option value="events">Events</option>
                <option value="weddings">Weddings</option>
            </select>
            <div className="gallery">
                {photos.map((photo) => (
                    <div key={photo.id} className="photo-item">
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                        <p>{photo.title}</p>
                        <ReviewCards photoId={photo.id} />
                    </div>
                ))}
            </div>
                
            
        </div>
    );
};

export default Photos;