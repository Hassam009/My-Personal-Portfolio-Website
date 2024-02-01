import React from "react";

import styled from "styled-components";
import Services from "./Services";
import Skills from "./Skills";
import Projects from "./Projects";
const Home = () => {
  const Wrapper = styled.section`
  .heroSection {
    background-color:#daead6;
    //   url("Images/B1.jpg");
    // background-size: cover;
    color: white;
    height: 600px;
    min-width: 100%;
    display: flex;
    align-items: center; /* Vertical centering */
  }

  .row {
    color: black;
    // text-align: center;
  }

  .Image {
    flex: 1; /* Allow the image to grow and take available space */
  }

  .Image img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Maintain image aspect ratio */
  }
  .headings{
    margin-top:4rem;
  }
  .btn{
    margin-top:2rem;
  }
  `;

  return (
    <>
      <Wrapper>
        <div className="heroSection">
        
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div className="headings">
                <h1>I am Web Developer</h1>
                <h2>I have Expert in React and Next js</h2>
                <button type="button" class="btn btn-success">Read More</button>
                </div>
              </div>
              <div class="col-md-6">
                <div className="Image">
                  <img src="Images/B1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Services></Services>
      </Wrapper>
      <Skills></Skills>
      <Projects></Projects>
    </>
  );
};

export default Home;
