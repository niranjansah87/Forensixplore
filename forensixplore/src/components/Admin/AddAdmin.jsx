import AdminNavbar from './AdminNavbar';
// import Footer from '../Footor';
import './assets/css/admin.css'
function AddAdmin() {
    return (
        <>
        <AdminNavbar></AdminNavbar>
        <div className="bgmi">
            <section className="form__section">
                <div className="containerdiv form__section-container">
                {/* <div className="addbox"> */}
                    
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <h2>Add Admin</h2>
                        <label>Name</label>
                        <input type="text" placeholder="Enter your Name" name="name" />
                        <label>ID NO</label>
                        <input type="number" placeholder="Enter your ID Number" name="ID_No" />
                        <label>Email</label>
                        <input type="email" placeholder="Enter your Email" name="email" />
                        <label>Phone No</label>
                        <input type="number" placeholder="Enter your Phone Number" name="contact" />
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password" name="password" />
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Confirm Password" name="confirmPassword" />
                        <button type="submit" className="btn">Add User</button>
                    </form>
                    {/* </div> */}
                </div>
            </section>
            </div>
            {/* <Footer></Footer> */}
        </>
    );
}

function handleSubmit(event) {
    event.preventDefault();
    // Add logic here to handle form submission
}

export default AddAdmin;
