

// import Footer from "./components/Footor"
// import Navbar from "./components/Navbar"
import Team from "./components/Team"
import Home from "./components/Home/Home"
import About from "./components/About"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Blog from "./components/Blog"
import Future_Events from "./components/Future_Events";
import Past_Events from "./components/Past_Events";
function App() {


  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/team" element={<Team />} /> 
          <Route exact path="/blog" element={<Blog />} /> 
          <Route exact path="/past" element={<Past_Events />} /> 
          <Route exact path="/future" element={<Future_Events />} /> 
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
