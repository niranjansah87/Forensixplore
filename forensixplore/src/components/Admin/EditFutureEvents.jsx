import AdminNavbar from './AdminNavbar';
// import Footor from '../Footor';
// import './assets/css/admin.css'
function EditFutureEvents() {
    return (
        <>
        <AdminNavbar></AdminNavbar>
            <div className="bgmi">
            <section className="form__section">
                <div className="containerdiv form__section-container">
                    
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <h2>Edit Future Events</h2>
                        <label>Title</label>
                        <input type="text" placeholder="Enter the Title" name="title" />
                        <label>Date</label>
                        <input type="date" placeholder="Select the Date" name="date" />
                        <label>Category</label>
                        <select name="category">
                            <option value="TEC">TEC</option>
                            <option value="HWB">HWB</option>
                            <option value="IIE">IIE</option>
                            <option value="ESO">ESO</option>
                            <option value="LCH">LCH</option>
                        </select>
                        <label>Description</label>
                        <textarea rows="2" placeholder="Enter the Description" name="description"></textarea>
                        <div className="form__control">
                            <label htmlFor="thumbnail">Event Poster</label>
                            <input type="file" id="thumbnail" name="eventPoster" />
                        </div>
                        <label>Registration Link</label>
                        <input type="text" placeholder="Enter the Registration Link" name="registrationLink" />
                        <button type="submit" className="btn">Add Event</button>
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

export default EditFutureEvents;
