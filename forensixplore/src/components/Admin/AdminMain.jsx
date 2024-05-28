import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';


function AdminMain() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 4; // Number of blogs per page
    const navigate = useNavigate();

    useEffect(() => {
        const checkLoggedIn = async () => {
            const token = localStorage.getItem('authToken');
            
            if (token) {
                try {
                    // Verify token validity on the server
                    const response = await axios.get('http://localhost:5001/admin/checklogin', {
                        headers: {
                            'auth-token': token,
                        },
                    });
                    if (response.status === 200) {
                        setIsLoggedIn(true);
                    } else {
                        setIsLoggedIn(false);
                        navigate('/admin/login');
                    }
                } catch (error) {
                    console.error('Check login status error:', error.message);
                    setIsLoggedIn(false);
                    navigate('/admin/login');
                }
            } else {
                setIsLoggedIn(false);
                navigate('/admin/login');
            }
        };

        checkLoggedIn();

        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5001/blog/getblog');
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, [navigate]);

    const deleteBlog = async (title) => {
        try {
            const token = localStorage.getItem('authToken');
            if (!token) {
                // Handle case where user is not authenticated
                console.error('User is not authenticated');
                return;
            }
            
            const response = await axios.delete(`http://localhost:5001/blog/deleteblog`, {
                headers: {
                    'auth-token': token // Include authentication token in request headers
                },
                data: { title } // Send title in the request body
            });
    
            // Check if delete operation was successful
            if (response.status === 200) {
                setBlogs(blogs.filter(blog => blog.title !== title));
                console.log('Blog deleted successfully');
            } else {
                console.error('Failed to delete blog:', response.data);
            }
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };
    

    const sliceDate = (dateString) => {
        // Assuming dateString is in the format YYYY-MM-DD
        return dateString.slice(0, 10); // Extracts the date part (YYYY-MM-DD)
    };

    // Pagination
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return isLoggedIn ? (
        <>
            <AdminNavbar />
            <div className="bgmi">
                <section className="dashboard">
                    <div className="container dashboard__container">
                        <button id="show__sidebar-btn" className="sidebar__toggle"><i className="uil uil-angle-right-b"></i></button>
                        <button id="hide__sidebar-btn" className="sidebar__toggle"><i className="uil uil-angle-left-b"></i></button>
                        <aside>
                            <ul>
                                <li>
                                    <Link to="/add-blog">
                                        <i className="uil uil-pen"></i>
                                        <h5>Add Blog</h5>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin" className="active">
                                        <i className="uil uil-postcard"></i>
                                        <h5>Manage Blog</h5>
                                    </Link>
                                </li>
                                <li>
                                <Link to="/add-admin">
                                    <i className="uil uil-user-plus"></i>
                                    <h5>Add Admin</h5>
                                </Link>
                            </li>
                            <li>
                                <Link to="/manage-admin" >
                                    <i className="uil uil-users-alt"></i>
                                    <h5>Manage Admin</h5>
                                </Link>
                            </li>
                            <li>
                                <Link to="/add-past" >
                                    <i className="uil uil-edit"></i>
                                    <h5>Add Past Event</h5>
                                </Link>
                            </li>
                            <li>
                                <Link to="/manage-past">
                                    <i className="uil uil-list-ul"></i>
                                    <h5>Manage Past Events</h5>
                                </Link>
                            </li>
                            <li>
                                <Link to="/add-future">
                                    <i className="uil uil-edit"></i>
                                    <h5>Add Future Events</h5>
                                </Link>
                            </li>
                            <li>
                                <Link to="/manage-future">
                                    <i className="uil uil-list-ul"></i>
                                    <h5>Manage Future Events</h5>
                                </Link>
                            </li>
                            </ul>
                        </aside>
                        <main>
                            <h2>Manage Blogs</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Date</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentBlogs.map(blog => (
                                        <tr key={blog._id}>
                                            <td>{blog.title}</td>
                                            <td>{blog.category}</td>
                                            <td>{sliceDate(blog.date)}</td>
                                            <td><Link to={`/edit-blog/`} className="btn sm">Edit</Link></td>
                                            <td><button onClick={() => deleteBlog(blog.title)} className="btn sm danger">Delete</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <ul className="pagination animated-pagination">
                                {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }, (_, index) => (
                                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                        <button onClick={() => paginate(index + 1)} className="page-link">
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </main>
                    </div>
                </section>
            </div>
        </>
    ) : null;
}

export default AdminMain;
