
// import AdminNavbar from './Admin_Navbar';
// import Footor from '../Footor';
// import './assets/css/admin.css'
function EditUser() {
    return (
        <>
        {/* <AdminNavbar></AdminNavbar> */}
            <section className="form__section">
                <div className="containerdiv form__section-container">
                    <h2>Edit User</h2>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <label>Name</label>
                        <input type="text" placeholder="Enter your Name" name="name" />
                        <label>ID NO</label>
                        <input type="number" placeholder="Enter your ID Number" name="ID_No" />
                        <label>Email</label>
                        <input type="email" placeholder="Enter your Email" name="email" />
                        <label>Phone No</label>
                        <input type="number" placeholder="Enter your Phone Number" name="contact" />
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password" />
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Confirm Password" />
                        <button type="submit" className="btn">Edit User</button>
                    </form>
                </div>
            </section>
            {/* <Footor></Footor> */}
        </>
    );
}

function handleSubmit(event) {
    event.preventDefault();

}

export default EditUser;
