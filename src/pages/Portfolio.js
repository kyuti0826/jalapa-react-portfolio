import "./Portfolio.css";
import Navbar from "./Navbar";
import calcuImage2 from "./img/calculator.jpeg"
import jalapa1Image from "./img/react.png"
import jalapa2Image from "./img/ontoy2.png"
import jalapa3Image from "./img/caps1.jpg"

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div id="portfolio-info" className="jalapa">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-2 pt-2">
                My Projects
              </h1>
      <div id="portfolio">
        <div className="container">
          <div className="row mt-5">
            
            <hr />
            <div className="col">
          <img className="three" src={jalapa2Image} />
          <h4 className="mt-5 text-white">System Integrations</h4>
          </div>
          <div className="col">
          <img className="four" src={jalapa3Image} />
          <h4 className="mt-5 text-white">Capstone Project</h4>
          </div>
          <div className="col">
          <img className="two" src={jalapa1Image} />
          <h4 className="mt-5 text-white">My React Js</h4> 
          </div>
          <div className="col">
          <img className="one" src={calcuImage2} />
          <h4 className="mt-5 text-white">Calculator</h4>
          </div>
          </div>
        </div>
      </div>
      </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Portfolio;
