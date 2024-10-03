import React, {useState, useEffect} from "react";
import './Videos.css';

const Videos = () => {
    const [videos, setVideos] = useState([]);
    const [category, setCategory] = useState("");

    useEffect(() => {
        fetchVideos();
    }, []);

    useEffect(() => {
        if (category === "") {
            fetchVideos();
        } else {
            filterVideosByCategory(category);
        }
    }, [category]);

    const fetchVideos = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await response.json(); 
        //console.log(data);
        setVideos(data.slice(0, 10));
    };

    const filterVideosByCategory = (selectedCategory) => {
        const filteredVideos = videos.filter((video) => 
            video.title.toLowerCase().includes(selectedCategory.toLowerCase())
        );
        setVideos(filteredVideos);
    };

    return (
        <div className="videos">
            <h1>Videos</h1>
            <select onChange={(e) => setCategory(e.target.value)} value = {category}>
                <option value = "">ALL</option>
                <option value = "events">Events</option>
                <option value = "weddings">Weddings</option>
            </select>
            <div className="gallery">
                {videos.map(video => (
                    <div key = {video.id} className="video-item">
                        <img src = {video.thumbnailUrl} alt = {video.title} />
                        <p>{video.title}</p>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Videos;