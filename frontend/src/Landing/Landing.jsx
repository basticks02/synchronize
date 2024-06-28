import './Landing.css'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Landing() {
  return (
    <>
      <Navbar/>

      <main>
        <div className="hero">
            <video className="video-background" autoPlay loop muted>
              <source src="../images/hero.mp4" type="video/mp4" />
            </video>
            <div className="hero-content">
              <h1 className='hospitalname'>ENO-OBONG MEMORIAL MEDICAL SERVICES</h1>
              <p>Committed to Service Excellence</p>
              <a href="#features">Learn More</a>
            </div>
        </div>


        {/* TODO: Populate with real info */}
        <section id="features" className="feature ">
            <div className="container">
              <h2>The Vision</h2>
              <div className="row">

                <div className="col-md-4">
                  <i className="fa fa-calendar fa-3x mb-3"></i>
                  <h4>Easy Appointments</h4>
                  <p>Schedule and manage your appointments with ease.</p>
                </div>

                <div className="col-md-4">
                  <i className="fa fa-user-md fa-3x mb-3"></i>
                  <h4>Secure Records</h4>
                  <p>Keep your medical records safe and accessible.</p>
                </div>

                <div className="col-md-4">
                  <i className="fa fa-stethoscope fa-3x mb-3"></i>
                  <h4>24/7 Access</h4>
                  <p>Access your health information anytime, anywhere.</p>
                </div>
              </div>
            </div>
          </section>

      </main>

      <footer>
        <p>Developed by Synchronize</p>
      </footer>
    </>
  )
}
