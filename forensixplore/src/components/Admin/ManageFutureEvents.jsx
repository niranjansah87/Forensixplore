
import { Link } from 'react-router-dom';
import AdminNavbar from './Admin_Navbar';
import Footor from '../Footor';
import './assets/css/admin.css'
function ManageFutureEvents() {
    return (
        <>
        <AdminNavbar></AdminNavbar>
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
                                <Link to="/manage-admin">
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
                        <h2>Manage Future Events</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Travel</td>
                                    <td><Link to="/edit-future" className="btn sm">Edit</Link></td>
                                    <td><Link to="#" className="btn sm danger">Delete</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </main>
                </div>
            </section>
            <Footor></Footor>
        </>
    );
}

export default ManageFutureEvents;