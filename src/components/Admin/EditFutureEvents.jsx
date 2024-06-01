import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import Swal from 'sweetalert2';

function EditFutureEvents() {
    const [event, setEvent] = useState({
        title: '',
        date: '',
        category: '',
        description: '',
        registrationLink: ''
    });
    const [eventPoster, setEventPoster] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEvent = async () => {
            const token = localStorage.getItem('authToken');
            if (!token) {
                navigate('/admin/login');
                return;
            }
            try {
                const response = await axios.get(`https://forensixplore-backend-production.up.railway.app/fevent/getfutureevent/${id}`, {
                    headers: { 'auth-token': token }
                });
                setEvent(response.data);
            } catch (error) {
                console.error('Error fetching event:', error);
            }
        };
        fetchEvent();
    }, [id, navigate]);

    const handleChange = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setEventPoster(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('authToken');
        if (!token) {
            navigate('/admin/login');
            return;
        }

        const formData = new FormData();
        formData.append('title', event.title);
        formData.append('date', event.date);
        formData.append('category', event.category);
        formData.append('description', event.description);
        if (eventPoster) formData.append('eventPoster', eventPoster);
        formData.append('registrationLink', event.registrationLink);

        try {
            await axios.put(`https://forensixplore-backend-production.up.railway.app/fevent/updatefutureevent/${id}`, formData, {
                headers: {
                    'auth-token': token,
                    'Content-Type': 'multipart/form-data'
                }
            });
            Swal.fire('Success', 'Event updated successfully', 'success').then(() => {
                navigate('/manage-future');
            });
        } catch (error) {
            console.error('Error updating event:', error);
            Swal.fire('Error', 'Failed to update event', 'error');
        }
    };

    return (
        <>
            <AdminNavbar />
            <div className="bgmi">
                <section className="form__section">
                    <div className="containerdiv form__section-container">
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <h2>Edit Future Events</h2>
                            <label>Title</label>
                            <input type="text" placeholder="Enter the Title" name="title" value={event.title} onChange={handleChange} />
                            <label>Date</label>
                            <input type="date" placeholder="Select the Date" name="date" value={event.date} onChange={handleChange} />
                            <label>Category</label>
                            <select name="category" value={event.category} onChange={handleChange}>
                                <option value="TEC">TEC</option>
                                <option value="HWB">HWB</option>
                                <option value="IIE">IIE</option>
                                <option value="ESO">ESO</option>
                                <option value="LCH">LCH</option>
                            </select>
                            <label>Description</label>
                            <textarea rows="2" placeholder="Enter the Description" name="description" value={event.description} onChange={handleChange}></textarea>
                            <div className="form__control">
                                <label htmlFor="thumbnail">Event Poster</label>
                                <input type="file" id="thumbnail" name="eventPoster" onChange={handleFileChange} />
                            </div>
                            <label>Registration Link</label>
                            <input type="text" placeholder="Enter the Registration Link" name="registrationLink" value={event.registrationLink} onChange={handleChange} />
                            <button type="submit" className="btn">Update Event</button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}

export default EditFutureEvents;
