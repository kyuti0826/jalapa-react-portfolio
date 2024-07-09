import React from 'react';
import Navbar from "./Navbar";
import myImage from "./img/jalapa8.jpeg";
import "./Home.css";


const Home = () => {
  return (
    <>
      <Navbar />
            <div id="home-info">
              <div className="content-container">
                <div className="text-container">
                  <h2 className="laps fw-bold display-3 text-center text-black mb-5">
                    Hi! I'm Rochelle 
                  </h2>
                  <p className="text-white text-center mt-5 fw-bold">
                  I thrive on challenges and am always eager to explore new opportunities. Whether it’s mastering new skills, connecting with like-minded individuals, or pursuing my academic goals, I approach everything with enthusiasm and determination.
                  </p>
                  <center>
                    <a href="https://www.facebook.com/profile.php?id=100009852017145" className="btn shadow mt-5 fw-bold">
                    Glimpse Into My Life
                    </a>
                  </center>
                </div>
                <div className="image-container">
                  <img src={myImage} alt="Rochelle D. Jalapa" />
                </div>
              </div>
            </div>
       
    </>
  );
};

export default Home;
