// import AdminNavbar from './Admin_Navbar';
// import Footor from '../Footor';
import './assets/css/admin.css'
function AddBlog() {
    return (
        <>
            {/* <AdminNavbar></AdminNavbar> */}
        
        <section className="form__section">
            <div className="container form__section-container">
                <h2>Add Blog</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <label>Title</label>
                    <input type="text" placeholder="Enter the Title" />
                    <label>Date</label>
                    <input type="date" placeholder="Select Date" />
                    <label>Category</label>
                    <input type="text" placeholder="Enter the Category" />
                    <label>Description</label>
                    <textarea rows="8" placeholder="Enter your Description"></textarea>
                    <div className="form__control">
                        <label htmlFor="thumbnail">Blog Thumbnail</label>
                        <input type="file" id="thumbnail" />
                    </div>
                    <label>Blog Source link</label>
                    <input type="text" placeholder="Enter Blog Source Link" />
                    <button type="submit" className="btn">Add Blog</button>
                </form>
            </div>
            {/* <Footor></Footor> */}
        </section>
        </>
    );
}

function handleSubmit(event) {
    event.preventDefault();
    // Add logic here to handle form submission
}

export default AddBlog;
