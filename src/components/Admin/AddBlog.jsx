import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import AdminNavbar from './AdminNavbar';

function AddBlog() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        category: '',
        description: '',
        thumbnail: null,
        blogLink: ''
    });
    const [loggedIn, setLoggedIn] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            setLoggedIn(false);
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, thumbnail: e.target.files[0] });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { title, date, category, description, thumbnail, blogLink } = formData;
        try {
            const token = localStorage.getItem('authToken');
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'auth-token': token
                }
            };
            const formData = new FormData();
            formData.append('title', title);
            formData.append('date', date);
            formData.append('category', category);
            formData.append('description', description);
            formData.append('thumbnail', thumbnail);
            formData.append('blogLink', blogLink);
            await axios.post('https://forensixplore-backend.onrender.com/blog/createblog', formData, config);
            Swal.fire({
                title: 'Success!',
                text: 'Blog added successfully',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                navigate('/admin');
            });
        } catch (error) {
            console.error('Error adding blog:', error);
            Swal.fire({
                title: 'Error!',
                text: 'There was an error adding the blog',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    if (!loggedIn) {
        navigate('/admin/login');
        return null; // Avoid rendering anything if not logged in
    }

    return (
        <>
            <AdminNavbar />
            <div className="bgmi">
                <section className="form__section">
                    <div className="containerdiv form__section-container">
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <h2>Add Blog</h2>
                            <label>Title</label>
                            <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
                            <label>Date</label>
                            <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
                            <label>Category</label>
                            <input type="text" name="category" value={formData.category} onChange={handleInputChange} />
                            <label>Description</label>
                            <textarea rows="2" name="description" value={formData.description} onChange={handleInputChange}></textarea>
                            <div className="form__control">
                                <label htmlFor="thumbnail">Blog Thumbnail</label>
                                <input type="file" id="thumbnail" onChange={handleFileChange} />
                            </div>
                            <label>Blog Source link</label>
                            <input type="text" name="blogLink" value={formData.blogLink} onChange={handleInputChange} />
                            <button type="submit" className="btn">Add Blog</button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}

export default AddBlog;
