
import { Link } from 'react-router-dom';
import AdminNavbar from './Admin_Navbar';
import Footor from '../Footor';
function ManageAdmin() {
    return (
        <>
            <AdminNavbar></AdminNavbar>
        
        <div className="dashboard">
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
                    <h2>Manage Admin</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>ID Number</th>
                                <th>Edit</th>
                                <th>Delete</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                                <td>Pikachu Guy</td>
                                <td>Guy</td>
                                <td><Link to="/edit-admin" className="btn sm">Edit</Link></td>
                                <td><Link to="" className="btn sm danger">Delete</Link></td>
                                
                            </tr>
                        </tbody>
                    </table>
                </main>
            </div>
        </div>
        <Footor></Footor>
        </>
    );
}

export default ManageAdmin;
