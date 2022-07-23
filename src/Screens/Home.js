import React from "react";
import ADS from "../Component/ADS";
import Header from "../Component/Header";
import Pricing from "../Component/Pricing";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="home">
        <ADS />
        <hr/>
        <section id="about">
          <h3>
            Hello. <br />
            you can order your mobile services now by click on button
            <span className="">
              na2i l servise yali badak yeah 7faz l code foot 3ala l shop 3abi
              talab ba3d 2h bekoun meshi l 7al
            </span>
          </h3>
        </section>
        <hr/>
        <section id="pricing">
          <h1>Touch</h1>
          <Pricing />
          <hr/>
          <h1>ALFA</h1>
          <Pricing />
        </section>
        <hr/>
        <section id="contact">
          <p>
            {" "}
            if you have any question or a problem contact me via the button
            below
          </p>
          <a href="mailto:alinjcs@gmail.com">
            <button type="button" className="btn btn-outline-light mb-4">
              Contact
            </button>
          </a>
        </section>
        <footer id="footer">
      
          <a href="#"><i className="social-icons fab fa-facebook-f"></i></a>
          <a href="#"><i className="social-icons fa-brands fa-twitter"></i></a>
          <a href="#"><i className="social-icons fa-brands fa-instagram"></i></a>
          <a href="#"><i className="social-icons fa-solid fa-envelope"></i></a>
          <p>© Copyright 2022 Monzer</p>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Home;
