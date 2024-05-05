
import forensixplore from '../assets/forensixplore.mp4'
import mithun from '../assets/img/team/Midhun sai Kothagundla.jpg'
import khaja from '../assets/img/team/khaja.png'
import sumanth from '../assets/img/team/sumanth.jpg'
import niranjan from '../assets/img/team/niranjan.png'
import koushik from '../assets/img/team/koushik.jpg'
import nikhil from '../assets/img/team/nikhil.jpg'
import snigdha from '../assets/img/team/snigdha.jpg'
import hema from '../assets/img/team/hema.jpg'
import hari from '../assets/img/team/hari.jpg'
import rama from '../assets/img/team/rama.jpg'
import Footer from './Footor'
import Navbar from './Navbar'
import '../assets/css/team.css'




const Team = () => {
    return (
        <>
        <Navbar></Navbar>
        
        <div>
            <section className="section-top" style={{ background: "transparent" }}>
                <div className="container">
                    <div className="col-lg-10 offset-lg-1 text-center">
                        <div className="section-top-title wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
                            <h1>Our Team</h1>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li> / Team</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="team-card">
                <video autoPlay muted loop id="myVideo">
                    <source src={forensixplore} type="video/mp4" />
                </video>
                <div className="team-container">

                    <div className="teamcontainer">
                        <img src={mithun} />
                        <div className="text-container">
                            <h4>K Midhun Sai</h4>
                            <h6>President</h6>
                        </div>
                        <ul className="socialul">
                            <li className="social"><a href="https://www.linkedin.com/in/midhun-sai-kothagundla" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                            <li className="social"><a href="https://www.instagram.com/k.midhun_sai/" target="_blank"><i className="fa fa-instagram" ></i></a></li>
                            <li className="social"><a href="https://github.com/midhunsaikothagundla" target="_blank"><i className="fa fa-github" ></i></a></li>
                        </ul>
                    </div>

                    <div className="teamcontainer">
                        <img src={khaja} />
                        <div className="text-container">
                            <h4>M Khaja Shaik</h4>
                            <h6>Director</h6>
                        </div>
                        <ul className="socialul">
                            <li className="social"><a href="https://www.linkedin.com/in/kshaik1/" target="_blank"><i className="fa fa-linkedin" ></i></a></li>
                            <li className="social"><a href="https://www.instagram.com/who_is_khaja_shaik/" target="_blank"><i className="fa fa-instagram" ></i></a></li>
                            <li className="social"><a href="https://github.com/k-shaik" target="_blank"><i className="fa fa-github" ></i></a></li>
                        </ul>
                    </div>


                    <div className="teamcontainer">
                        <img src={sumanth} />
                        <div className="text-container">
                            <h4>Sumanth Dhruva</h4>
                            <h6>Secretary</h6>
                        </div>
                        <ul className="socialul">
                            <li className="social"><a href="https://www.linkedin.com/in/jonnalagaddasumanthdhruva/" target="_blank"><i className="fa fa-linkedin" ></i></a></li>
                            <li className="social"><a href="https://www.instagram.com/sumanthdruva/" target="_blank"><i className="fa fa-instagram" ></i></a></li>
                            <li className="social"><a href="https://github.com/sumanthdhruva" target="_blank"><i className="fa fa-github" ></i></a></li>
                        </ul>
                    </div>

                    <div className="teamcontainer">
                        <img src={niranjan} />
                        <div className="text-container">
                            <h4>Niranjan Sah</h4>
                            <h6>Administrator Head</h6>
                        </div>
                        <ul className="socialul">
                            <li className="social"><a href="https://www.linkedin.com/in/niranjan-sah/" target="_blank"><i className="fa fa-linkedin" ></i></a></li>
                            <li className="social"><a href="https://www.instagram.com/niranjansah8790/" target="_blank"><i className="fa fa-instagram" ></i></a></li>
                            <li className="social"><a href="https://github.com/niranjansah87" target="_blank"><i className="fa fa-github" ></i></a></li>
                        </ul>
                    </div>

                    <div className="teamcontainer">
                        <img src={koushik} />
                        <div className="text-container">
                            <h4>B Koushik</h4>
                            <h6>Technical Head</h6>
                        </div>
                        <ul className="socialul">
                            <li className="social"><a href="https://in.linkedin.com/in/koushikreddyb" target="_blank"><i className="fa fa-linkedin" ></i></a></li>
                            <li className="social"><a href="https://www.instagram.com/zap_zura/" target="_blank"><i className="fa fa-instagram" ></i></a></li>
                            <li className="social"><a href="https://github.com/KoushikReddyB" target="_blank"><i className="fa fa-github" ></i></a></li>
                        </ul>
                    </div>

                    <div className="teamcontainer">
                        <img src={nikhil} />
                        <div className="text-container">
                            <h4>M. Nikhil</h4>
                            <h6>Non-Technical Head</h6>
                        </div>
                        <ul className="socialul">
                            <li className="social"><a href="https://www.linkedin.com/in/nikhil-medamdravu-81216b222" target="_blank"><i className="fa fa-linkedin" ></i></a></li>
                            <li className="social"><a href="https://www.instagram.com/nikhil_jai7/" target="_blank"><i className="fa fa-instagram" ></i></a></li>
                            <li className="social"><a href="#"><i className="fa fa-github" ></i></a></li>
                        </ul>
                    </div>

                    <div className="teamcontainer">
                        <img src={snigdha} />
                        <div className="text-container">
                            <h4>Snigdha Sindhusha</h4>
                            <h6>Designing Head</h6>
                        </div>
                        <ul className="socialul">
                            <li className="social"><a href="https://www.linkedin.com/in/snigdhasindhushamantha/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                            <li className="social"><a href="https://www.instagram.com/_.sindhusha.03._/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                            <li className="social"><a href="#"><i className="fa fa-github"></i></a></li>
                        </ul>
                    </div>

                    <div className="teamcontainer">
                        <img src={hema} />
                        <div className="text-container">
                            <h4>V Hema Vardhan</h4>
                            <h6>Creative Head</h6>
                        </div>
                        <ul className="socialul">
                            <li className="social"><a href="https://www.linkedin.com/in/hema-vardhan-velaga-999679226/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                            <li className="social"><a href="https://www.instagram.com/mr.v_a_r_d_h_a_n/" target="_blank"><i className="fa fa-instagram" ></i></a></li>
                            <li className="social"><a href="#" target="_blank"><i className="fa fa-github" ></i></a></li>
                        </ul>
                    </div>

                    <div className="teamcontainer">
                        <img src={hari} />
                        <div className="text-container">
                            <h4>M Hari Kiran</h4>
                            <h6>Event Coordinator Head</h6>
                        </div>
                        <ul className="socialul">
                            <li className="social"><a href="https://www.linkedin.com/in/musunuru-hari-kiran-0b8913226/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                            <li className="social"><a href="https://www.instagram.com/harikiran_chowdary/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                            <li className="social"><a href="https://github.com/MHariKiran" target="_blank"><i className="fa fa-github" ></i></a></li>
                        </ul>
                    </div>

                    <div className="teamcontainer">
                        <img src={rama} />
                        <div className="text-container">
                            <h4>Rama Krishna</h4>
                            <h6>Social Media</h6>
                        </div>
                        <ul className="socialul">
                            <li className="social"><a href="https://www.linkedin.com/in/vahinipathi-rama-krishna-58565a150/" target="_blank"><i className="fa fa-linkedin" ></i></a></li>
                            <li className="social"><a href="https://www.instagram.com/rama.krishna_07" target="_blank"><i className="fa fa-instagram" ></i></a></li>
                            <li className="social"><a href="https://github.com/Vahinipathiramakrishna" target="_blank"><i className="fa fa-github" ></i></a></li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Team;
