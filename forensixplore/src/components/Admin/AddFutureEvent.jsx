import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import AdminNavbar from './AdminNavbar';
import { useNavigate } from 'react-router-dom';

function AddFutureEvent() {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        category: 'TEC',
        description: '',
        eventPoster: null,
        registrationLink: ''
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            eventPoster: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('authToken');
            const formDataToSend = new FormData();
            formDataToSend.append('title', formData.title);
            formDataToSend.append('date', formData.date);
            formDataToSend.append('category', formData.category);
            formDataToSend.append('description', formData.description);
            formDataToSend.append('eventPoster', formData.eventPoster);
            formDataToSend.append('registrationLink', formData.registrationLink);

            const response = await axios.post(`http://localhost:5001/fevent/createfutureevent`, formDataToSend, {
                headers: {
                    'auth-token': token,
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                // Clear form fields after successful submission
                setFormData({
                    title: '',
                    date: '',
                    category: 'TEC',
                    description: '',
                    eventPoster: null,
                    registrationLink: ''
                });
                Swal.fire('Success', 'Event added successfully', 'success');
                navigate('/manage-future');
            }
        } catch (error) {
            console.error('Error adding event:', error.response ? error.response.data : error.message);
            Swal.fire('Error', 'Error adding event', 'error');
        }
    };

    return (
        <>
            <AdminNavbar />
            <div className="bgmi">
                <section className="form__section">
                    <div className="containerdiv form__section-container">
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <h2>Add Event</h2>
                            <label>Title</label>
                            <input type="text" placeholder="Enter the Title" name="title" value={formData.title} onChange={handleChange} required />
                            <label>Date</label>
                            <input type="date" placeholder="Select the Date" name="date" value={formData.date} onChange={handleChange} required />
                            <label>Category</label>
                            <select name="category" value={formData.category} onChange={handleChange} required>
                                <option value="TEC">TEC</option>
                                <option value="HWB">HWB</option>
                                <option value="IIE">IIE</option>
                                <option value="ESO">ESO</option>
                                <option value="LCH">LCH</option>
                            </select>
                            <label>Description</label>
                            <textarea rows="2" placeholder="Enter the Description" name="description" value={formData.description} onChange={handleChange} required></textarea>
                            <div className="form__control">
                                <label htmlFor="thumbnail">Event Poster</label>
                                <input type="file" id="thumbnail" name="eventPoster" onChange={handleFileChange} />
                            </div>
                            <label>Registration Link</label>
                            <input type="text" placeholder="Enter the Registration Link" name="registrationLink" value={formData.registrationLink} onChange={handleChange} />
                            <button type="submit" className="btn">Add Event</button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}

export default AddFutureEvent;
