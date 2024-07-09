import "./About.css";
import Navbar from "./Navbar";
import myImage from "./img/jalapa2.jpeg"

const About = () => {
  return (
    <>
      <Navbar />
      <div id="about-info" className="ruel">
  <div className="container mt-5">
    <div className="row">
      <div className="col">
        <h1 className="fw-bold display-1 text-center mt-2 pt-2">
          About Page
        </h1>

      <div id="about">
        <div className="container">
      
            <div className="card shadow p-5">
              <div className="row">
              <div className="col-lg-4">
              <center><img src={myImage} /></center>
              </div>
              <div className="col-lg-8">
                <div className="card box shadow mb-3 p-3">
                <h4 className="text-dark"><span>About Me</span></h4>
              <p className="text-white"> Im Rochelle D. Jalapa 23 years of age from Brgy Tagukon, Kabankalan City Neg. Occ. taking a Bachelor of Science in Information Technology (BSIT) at Central Philippines State University (CPSU). I have an interest in Networking and PC Repair  </p>
              <p className="text-white">Explore my journey, interests, and accomplishments as I navigate through the exciting world of academia and personal development.

</p>
                </div>
                <div className="card box shadow p-3">
                <h4 className="text-dark"><span>Academic</span> </h4>
              <p className="text-white"> Primary: Tagukon Elementary School S.Y:2014 <br /> Secondary: Junior High: Tagukon National High School S.Y:2017 <br />Senior High: Florentino Galang Senior High School S.Y:2020 <br />Tretiary: Central Philippines State University (CPSU)SY:2024</p>
              <p> </p>
                </div>
              </div>
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

export default About;
