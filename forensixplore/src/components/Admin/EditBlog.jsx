import AdminNavbar from './AdminNavbar';
// import Footor from '../Footor';
// import './assets/css/admin.css'
function EditBlog() {
    return (
        <>
        <AdminNavbar></AdminNavbar>
            <div className="bgmi">
            <section className="form__section">
                <div className="containerdiv form__section-container">
                    
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <h2>Edit Blog</h2>
                        <label>Title</label>
                        <input type="text" placeholder="Enter the Title" />
                        <label>Date</label>
                        <input type="date" placeholder="Select Date" />
                        <label>Category</label>
                        <input type="text" placeholder="Enter the Category" />
                        <label>Description</label>
                        <textarea rows="2" placeholder="Enter your Description"></textarea>
                        <div className="form__control">
                            <label htmlFor="thumbnail">Blog Thumbnail</label>
                            <input type="file" id="thumbnail" />
                        </div>
                        <label>Blog Source link</label>
                        <input type="text" placeholder="Enter Blog Source Link" />
                        <button type="submit" className="btn">Edit Post</button>
                    </form>
                </div>
            </section>
            </div>
            {/* <Footor></Footor> */}
        </>
    );
}

function handleSubmit(event) {
    event.preventDefault();
    // Add logic here to handle form submission
}

export default EditBlog;
