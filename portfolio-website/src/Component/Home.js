import React from "react";

import styled from "styled-components";
import Services from "./Services";
import Skills from "./Skills";
import Projects from "./Projects";
const Home = () => {
  const Wrapper = styled.section`
  .heroSection {
    background-image: url("Images/hero.png"); /
    background-size: cover;
    background-color: #6c757d; /* Fallback color in case the image is not available */
    color: white;
    height: 670px;
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
    width: 67%;
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
                  <img src="Images/hassam2.png" alt="" />
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
