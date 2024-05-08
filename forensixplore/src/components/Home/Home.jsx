
import Navbar from '../Navbar';
import Footer from '../Footor';
import HomeCounter from './HomeCounter';
import AboutUs from './AboutUs';
import Services from './Services';
import Marquee from './Marquee';
import Core_Team from './Core_Team';
import Blog from './Blog';
const Home = () => {
  return (
    <>
        <Navbar></Navbar>
        <HomeCounter></HomeCounter>
        <AboutUs></AboutUs>
        <Services></Services>
        <Marquee></Marquee>
        <Core_Team></Core_Team>
        <Blog></Blog>
        <Footer></Footer>
    </>
  );
}

export default Home;
