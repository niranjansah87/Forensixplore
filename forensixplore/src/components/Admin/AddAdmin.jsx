

function AddAdmin() {
    return (
        <>
            <section className="form__section">
                <div className="container form__section-container">
                    <h2>Add Admin</h2>
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
                        <input type="password" placeholder="Enter Password" name="password" />
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Confirm Password" name="confirmPassword" />
                        <button type="submit" className="btn">Add User</button>
                    </form>
                </div>
            </section>
        </>
    );
}

function handleSubmit(event) {
    event.preventDefault();
    // Add logic here to handle form submission
}

export default AddAdmin;
