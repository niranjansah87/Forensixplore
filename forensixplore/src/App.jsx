

// import Footer from "./components/Footor"
// import Navbar from "./components/Navbar"
import Team from "./components/Team"
import Home from "./components/Home/Home"
import About from "./components/About"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Blog from "./components/Blog"
function App() {


  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/team" element={<Team />} /> 
          <Route exact path="/blog" element={<Blog />} /> 
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
