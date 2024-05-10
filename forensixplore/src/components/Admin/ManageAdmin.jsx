
import { Link } from 'react-router-dom';

function ManageAdmin() {
    return (
        <div className="dashboard">
            <div className="container dashboard__container">
                <button id="show__sidebar-btn" className="sidebar__toggle"><i className="uil uil-angle-right-b"></i></button>
                <button id="hide__sidebar-btn" className="sidebar__toggle"><i className="uil uil-angle-left-b"></i></button>

                <aside>
                    <ul>
                        <li>
                            <Link to="./add-blog.html">
                                <i className="uil uil-pen"></i>
                                <h5>Add Post</h5>
                            </Link>
                        </li>
                        <li>
                            <Link to="dashboard.html">
                                <i className="uil uil-postcard"></i>
                                <h5>Manage Blog</h5>
                            </Link>
                        </li>
                        <li>
                            <Link to="add-user.html">
                                <i className="uil uil-user-plus"></i>
                                <h5>Add User</h5>
                            </Link>
                        </li>
                        <li>
                            <Link to="manage-users.html" className="active">
                                <i className="uil uil-users-alt"></i>
                                <h5>Manage Users</h5>
                            </Link>
                        </li>
                        <li>
                            <Link to="./add-past-events.html">
                                <i className="uil uil-edit"></i>
                                <h5>Add Past Event</h5>
                            </Link>
                        </li>
                        <li>
                            <Link to="./manage-past-events.html">
                                <i className="uil uil-list-ul"></i>
                                <h5>Manage Past Events</h5>
                            </Link>
                        </li>
                        <li>
                            <Link to="./add-future-events.html">
                                <i className="uil uil-edit"></i>
                                <h5>Add Future Events</h5>
                            </Link>
                        </li>
                        <li>
                            <Link to="./manage-future-events.html">
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
                                <th>Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Named Guy</td>
                                <td>Named</td>
                                <td><Link to="edit-user.html" className="btn sm">Edit</Link></td>
                                <td><Link to="" className="btn sm danger">Delete</Link></td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Vinland Saga</td>
                                <td>Saga</td>
                                <td><Link to="edit-user.html" className="btn sm">Edit</Link></td>
                                <td><Link to="" className="btn sm danger">Delete</Link></td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>Pikachu Guy</td>
                                <td>Guy</td>
                                <td><Link to="edit-user.html" className="btn sm">Edit</Link></td>
                                <td><Link to="" className="btn sm danger">Delete</Link></td>
                                <td>Yes</td>
                            </tr>
                        </tbody>
                    </table>
                </main>
            </div>
        </div>
    );
}

export default ManageAdmin;
