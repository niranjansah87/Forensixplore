import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import { useNavigate } from 'react-router-dom';

function ManageAdmin() {
    const [admins, setAdmins] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const navigate=useNavigate();
    useEffect(() => {
        const checkLoggedIn = async () => {
            const token = localStorage.getItem('authToken');
            if (!token) {
                navigate('/admin/login');
        return null; // Avoid rendering anything if not logged in
            }

            try {
                const response = await axios.get('https://forensixplore-backend.onrender.com/admin/getuser', {
                    headers: {
                        'auth-token': token
                    }
                });
                setAdmins(response.data);
                setTotalPages(Math.ceil(response.data.length / 4));
            } catch (error) {
                console.error('Error fetching admins:', error);
                // Handle error
            }
        };

        checkLoggedIn();
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
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
                                <Link to="/admin" >
                                    <i className="uil uil-postcard"></i>
                                    <h5>Manage Blog</h5>
                                </Link>
                            </li>
                            {/* <li>
                                <Link to="/add-admin">
                                    <i className="uil uil-user-plus"></i>
                                    <h5>Add Admin</h5>
                                </Link>
                            </li> */}
                            <li>
                                <Link to="/manage-admin" className="active">
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
                            <h2>Manage Admin</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>ID Number</th>
                                        <th>Contact</th>
                                        <th>Email</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {admins
                                        .slice((currentPage - 1) * 4, currentPage * 4)
                                        .map((admin, index) => (
                                            <tr key={index}>
                                                <td>{admin.name}</td>
                                                <td>{admin.ID_NO}</td>
                                                <td>{admin.contact}</td>
                                                <td>{admin.email}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
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

export default ManageAdmin;
