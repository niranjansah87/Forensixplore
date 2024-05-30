
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
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/past" element={<Past_Events />} />
        <Route path="/future" element={<Future_Events />} />
        <Route path="/admin/login" element={<Login/>} /> 
        
        

        {/* Admin Route Start */}
        <Route path="/add-admin" element={<AddAdmin />} />
          <Route path="/add-blog" element={<AddBlog />} /> 
          <Route path="/add-past" element={<AddPastEvent />} /> 
          <Route path="/add-future" element={<AddFutureEvent />} /> 
          <Route path="/admin" element={<AdminMain  />} /> 
          <Route path="/edit-blog/:id" element={<EditBlog />} />
          <Route path="/edit-future/:id" element={<EditFutureEvents />} />
          <Route path="/edit-past/:id" element={<EditPastEvents />} /> 
          <Route path="/edit-user" element={<EditUser />} />
          <Route path="/manage-admin" element={<ManageAdmin />} /> 
          <Route path="/manage-past" element={<ManagePastEvents />} /> 
          <Route path="/manage-future" element={<ManageFutureEvents />} /> 
          
        {/* Admin Route End */}
      </Routes>
    </BrowserRouter>


  )
}

export default App
