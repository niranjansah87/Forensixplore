import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import AdminNavbar from './AdminNavbar';

function EditPastEvents() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        category: 'TEC',
        description: '',
        eventPoster: null,
        registrationLink: ''
    });

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await axios.get(`https://forensixplore-backend-production.up.railway.app/pevent/getpastevent/${id}`);
                setFormData({
                    title: response.data.title,
                    date: response.data.date,
                    category: response.data.category,
                    description: response.data.description,
                    eventPoster: response.data.eventPoster,
                    registrationLink: response.data.registrationLink,
                });
            } catch (error) {
                console.error('Error fetching event data:', error);
            }
        };
        fetchEventData();
    }, [id]);

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
        const token = localStorage.getItem('authToken');
        if (!token) {
            navigate('/admin/login');
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('date', formData.date);
        formDataToSend.append('category', formData.category);
        formDataToSend.append('description', formData.description);
        if (formData.eventPoster) {
            formDataToSend.append('eventPoster', formData.eventPoster);
        }
        formDataToSend.append('registrationLink', formData.registrationLink);

        try {
            const response = await axios.put(`https://forensixplore-backend-production.up.railway.app/pevent/updatepastevent/${id}`, formDataToSend, {
                headers: {
                    'auth-token': token,
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                swal('Success', 'Past event updated successfully', 'success');
                navigate('/manage-past');
            }
        } catch (error) {
            console.error('Error updating past event:', error.response ? error.response.data : error.message);
            if (error.response && error.response.data && error.response.data.errors) {
                const errorMessages = error.response.data.errors.map(err => err.msg).join(', ');
                swal('Error', 'There was an error updating the past event: ' + errorMessages, 'error');
            } else {
                swal('Error', 'There was an error updating the past event', 'error');
            }
        }
    };

    return (
        <>
            <AdminNavbar />
            <div className="bgmi">
                <section className="form__section">
                    <div className="containerdiv form__section-container">
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <h2>Edit Past Events</h2>
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
                            <textarea rows="2" placeholder="Enter the Description" name="description" value={formData.description} onChange={handleChange} ></textarea>
                            <div className="form__control">
                                <label htmlFor="thumbnail">Event Poster</label>
                                <input type="file" id="thumbnail" name="eventPoster" onChange={handleFileChange} />
                            </div>
                            <label>Registration Link</label>
                            <input type="text" placeholder="Enter the Registration Link" name="registrationLink" value={formData.registrationLink} onChange={handleChange} />
                            <button type="submit" className="btn">Update Event</button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}

export default EditPastEvents;
