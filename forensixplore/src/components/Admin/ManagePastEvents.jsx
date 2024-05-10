
import { Link } from 'react-router-dom';

function ManagePastEvents() {
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
                            <Link to="manage-users.html">
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
                            <Link to="./manage-past-events.html" className="active">
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
                    <h2>Manage Past Events</h2>
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
                                <td><Link to="./edit-past-event.html" className="btn sm">Edit</Link></td>
                                <td><Link to="delete-category.html" className="btn sm danger">Delete</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </main>
            </div>
        </div>
    );
}

export default ManagePastEvents;
