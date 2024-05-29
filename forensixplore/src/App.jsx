
import './App.css'
// import Footer from "./components/Footor"
// import Navbar from "./components/Navbar"
import Team from "./components/Team"
import Home from "./components/Home/Home"
import About from "./components/About"
import { BrowserRouter ,  Routes, Route } from 'react-router-dom';

import Blog from "./components/Blog"
import Future_Events from "./components/Future_Events";
import Past_Events from "./components/Past_Events";
import AddAdmin from "./components/Admin/AddAdmin";
import AddBlog from "./components/Admin/AddBlog";
import AddFutureEvent from "./components/Admin/AddFutureEvent";
import AddPastEvent from "./components/Admin/AddPastEvent";
import AdminMain from "./components/Admin/AdminMain";
import EditBlog from "./components/Admin/EditBlog";
import EditUser from "./components/Admin/EditUser";
import EditPastEvents from "./components/Admin/EditPastEvents";
import EditFutureEvents from "./components/Admin/EditFutureEvents";
import ManageAdmin from "./components/Admin/ManageAdmin";
import ManagePastEvents from "./components/Admin/ManagePastEvents";
import ManageFutureEvents from "./components/Admin/ManageFutureEvents";
import Login from "./components/Admin/Login";



function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/past" element={<Past_Events />} />
        <Route exact path="/future" element={<Future_Events />} />
        <Route exact path="/admin/login" element={<Login/>} /> 
        
        

        {/* Admin Route Start */}
        <Route exact path="/add-admin" element={<AddAdmin />} />
          <Route exact path="/add-blog" element={<AddBlog />} /> 
          <Route exact path="/add-past" element={<AddPastEvent />} /> 
          <Route exact path="/add-future" element={<AddFutureEvent />} /> 
          <Route exact path="/admin" element={<AdminMain  />} /> 
          <Route exact path="/edit-blog" element={<EditBlog />} />
          <Route exact path="/edit-future" element={<EditFutureEvents />} /> 
          <Route exact path="/edit-past/:id" element={<EditPastEvents />} /> 
          <Route exact path="/edit-user" element={<EditUser />} /> 
          <Route exact path="/manage-admin" element={<ManageAdmin />} /> 
          <Route exact path="/manage-past" element={<ManagePastEvents />} /> 
          <Route exact path="/manage-future" element={<ManageFutureEvents />} /> 
          
        {/* Admin Route End */}
      </Routes>
    </BrowserRouter>


  )
}

export default App
