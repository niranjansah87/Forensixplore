import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';

function ManagePastEvents() {
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const checkLoggedIn = async () => {
            const token = localStorage.getItem('authToken');
            
            if (!token) {
                navigate('/admin/login');
                return;
            }

            try {
                const response = await axios.get('https://forensixplore-backend.onrender.com/pevent/getpastevents', {
                    params: { page: currentPage, limit: 4 }, // Fetch 4 events per page
                    headers: { 'auth-token': token }
                });
                setEvents(response.data ); // Ensure the pastEvents property is an array
                setTotalPages(Math.ceil(response.data.length / 4));
            } catch (error) {
                console.error('Error fetching past events:', error);
            }
        };

        checkLoggedIn();
    }, [currentPage, navigate]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem('authToken');
        try {
            await axios.delete(`https://forensixplore-backend.onrender.com/pevent/deletepastevent/${id}`, {
                headers: { 'auth-token': token }
            });
            setEvents(events.filter(event => event._id !== id));
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };

    return (
        <>
            <AdminNavbar />
            <div className="bgmi">
                <div className="dashboard">
                    <div className="containerdiv dashboard__container">
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
                                    <Link to="/admin">
                                        <i className="uil uil-postcard"></i>
                                        <h5>Manage Blog</h5>
                                    </Link>
                                </li>
                                <li>
                                <Link to="/manage-admin" >
                                    <i className="uil uil-users-alt"></i>
                                    <h5>Manage Admin</h5>
                                </Link>
                            </li>
                                <li>
                                    <Link to="/add-past">
                                        <i className="uil uil-edit"></i>
                                        <h5>Add Past Event</h5>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/manage-past" className="active">
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
                            <h2>Manage Past Events</h2>
                            {events.length > 0 ? (
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Category</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {events
                                        .slice((currentPage - 1) * 4, currentPage * 4)
                                        .map((event, index) => (
                                            <tr key={index}>
                                                <td>{event.title}</td>
                                                <td>{event.category}</td>
                                                <td><Link to={`/edit-past/${event._id}`} className="btn sm">Edit</Link></td>

                                                <td><button onClick={() => handleDelete(event._id)} className="btn sm danger">Delete</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <p>No past events found.</p>
                            )}
                            <div className="pagination animated-pagination">
                                <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                                
                                <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ManagePastEvents;
