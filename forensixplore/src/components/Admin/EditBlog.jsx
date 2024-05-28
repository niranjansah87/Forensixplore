import  { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import Swal from 'sweetalert2';

function EditBlog() {
    const { id } = useParams();  // Assuming you are passing blog id as URL parameter
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
        } else {
            fetchBlogData(id);
        }
    }, [id]);

    const fetchBlogData = async (blogId) => {
        try {
            const response = await axios.get(`http://localhost:5001/blog/${blogId}`);
            const blog = response.data;
            setFormData({
                title: blog.title,
                date: blog.date,
                category: blog.category,
                description: blog.description,
                blogLink: blog.blog_link
            });
        } catch (error) {
            console.error('Error fetching blog data:', error);
        }
    };

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
            const updateData = new FormData();
            updateData.append('title', title);
            updateData.append('date', date);
            updateData.append('category', category);
            updateData.append('description', description);
            if (thumbnail) {
                updateData.append('thumbnail', thumbnail);
            }
            updateData.append('blogLink', blogLink);
            await axios.put(`http://localhost:5001/blog/updateblog`, updateData, config);
            Swal.fire({
                title: 'Success!',
                text: 'Blog updated successfully',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                navigate('/admin');
            });
        } catch (error) {
            console.error('Error updating blog:', error);
            Swal.fire({
                title: 'Error!',
                text: 'There was an error updating the blog',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    if (!loggedIn) {
        navigate('/admin/login');
        return null;
    }

    return (
        <>
            <AdminNavbar />
            <div className="bgmi">
                <section className="form__section">
                    <div className="containerdiv form__section-container">
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <h2>Edit Blog</h2>
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
                            <button type="submit" className="btn">Edit Post</button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}

export default EditBlog;
