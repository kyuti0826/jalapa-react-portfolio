import React from "react";
import "./Contact.css";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card jalapa">
              <h2 className="text-center mb-5 text-black">CONTACT ME</h2>
              <form className="contact-form">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-white">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-white">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-white">Message</label>
                  <textarea className="form-control" id="message" rows="3" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card jalapa">
              <h2 className="text-center mb-5 text-black">My Accounts</h2>
              <div className="social-icons text-center mt-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=100009852017145"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-4 text-decoration-none"
                >
                  <FontAwesomeIcon className="facebook" icon={faFacebook} size="2x" />
                </a>
                <a
                  href="https://www.instagram.com/______bhebhe______?igsh=Z3llN3Zhb2V5M2M4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-4 text-decoration-none"
                >
                  <FontAwesomeIcon className="instagram" icon={faInstagram} size="2x" />
                </a>
                <a
                  href="https://twitter.com/your-twitter-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-4 text-decoration-none"
                >
                  <FontAwesomeIcon className="twitter" icon={faTwitter} size="2x" />
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
