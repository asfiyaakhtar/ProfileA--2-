import React from "react";
import "./Home.css";
import Navbar from "../src/Components/Navabar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <h2>
          Hello! I'm <strong> Nikunj Thesiya</strong>
        </h2>
        <div>
          <h3>
            A Front End Developer | Web Designer with
          </h3>
          <span className="box">3.9+ Years</span>Experience
        </div>
      </div>
    </div>
  );
};

export default Home;
