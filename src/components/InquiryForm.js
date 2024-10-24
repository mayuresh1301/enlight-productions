import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, GeoPoint } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./InquiryForm.css";

// Leafelet imports
import MapPicker from "./MapPicker";



const InquiryForm = () => {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        services: [],
        guests: "",
        venue: "",
        additionalDetails: "",
    });

    const [location, setLocation] = useState(null);

    const [submitted, setSubmitted] = useState(false);

    const auth = getAuth();

    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            setUser(user);
            setFormData({
                ...formData,
                firstName: user.displayName.split(' ')[0],
                lastName: user.displayName.split(' ')[1],
                email: user.email,
            });
        } catch (error) {
            console.error('Error signing in:', error);
        };
    };

    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === 'services' ) {
            if (checked) {
                setFormData((prevData) => ({
                    ...prevData,
                    services: [...prevData.services, value],
                }));
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    services: prevData.services.filter((service) => service !== value),
                }));
            }
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure location is set
        if (!location) {
            alert('Please select a location on the map');
            return;
        };
        try{
            await addDoc(collection(db, 'inquiries'), {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                services: formData.services,
                guests: formData.guests,
                venue: formData.venue,
                location: new GeoPoint(location.lat, location.lng),
                additionalDetails: formData.additionalDetails,
                createdAt: new Date(),
            });
            console.log('Inquiry submitted!');
            setSubmitted(true);
            setFormData({
                firstName: "",
                lastName: "",
                email:"",
                phone: "",
                services: [],
                guests: "",
                venue: "",
                additionalDetails: "",
            });
            setLocation(null);
        } catch (error) {
            console.error('Error submitting inquiry:', error);
            alert('An error occurred. Please try again.');
        };
    };

    
    
    return (
        <div className="inquiry-form">
            <h1>Inquiry Form</h1>
            {!user && (
                <button onClick={handleLogin}>Login to prefill information</button>
            )}
            <form onSubmit={handleSubmit}>
                {!user && (
                    <>
                        <input 
                            type = "text"
                            name = "firstName"
                            placeholder="First Name"
                            value = {formData.firstName}
                            onChange={handleChange}
                            required
                        />

                        <input 
                            type = "text"
                            name = "lastName"
                            placeholder="Last Name"
                            value = {formData.lastName}
                            onChange={handleChange}
                            required
                        />

                        <input 
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </>
                )}

                <input 
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                <fieldset>
                    <legend>Select Services</legend>
                    <label>
                        <input 
                            type="checkbox"
                            name="services"
                            value="live_stream"
                            onChange={handleChange}
                            checked={formData.services.includes('live_stream')}
                        />
                        Live Stream
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="services"
                            value="photo_booth"
                            onChange={handleChange}
                            checked={formData.services.includes('photo_booth')}
                        />
                        Photo Booth
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="services"
                            value="albums"
                            onChange={handleChange}
                            checked={formData.services.includes('albums')}
                        />
                        Albums
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="services"
                            value="weddings"
                            onChange={handleChange}
                            checked={formData.services.includes('weddings')}
                        />
                        Weddings
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="services"
                            value="new_born"
                            onChange={handleChange}
                            checked={formData.services.includes('new_born')}
                        />
                        New Born
                    </label>
                </fieldset>

                <input 
                    type="number"
                    name="guests"
                    placeholder="Number of Guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                />

                <input 
                    type="text"
                    name="venue"
                    placeholder="Venue Location"
                    value={formData.venue}
                    onChange={handleChange}
                    required
                />

                <label>Select event location:</label>
                <MapPicker 
                    onLocationSelect={setLocation}
                    defaultPosition={{lat: 40.73061, lng: -73.935242}}
                />
                {location && (
                    <div>
                        <p>Location selected: {location.lat}, {location.lng}</p>
                    </div>
                )}
                <textarea 
                    name="additionalDetails"
                    placeholder="Additional Details"
                    value={formData.additionalDetails}
                    onChange={handleChange}
                />

                <button type="submit">Submit Inquiry</button>
                
            </form>
            {submitted && <p>Thank you for your inquiry! We will get back to you soon.</p>}
        </div>
    )
};

export default InquiryForm;