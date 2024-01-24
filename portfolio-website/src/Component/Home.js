import React from "react";

import styled from "styled-components";

const Home = () => {
  const Wrapper = styled.section`
  .heroSection {
    // background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    //   url("Images/B1.jpg");
    // background-size: cover;
    color: white;
    height: 600px;
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
  `;

  return (
    <>
      <Wrapper>
        <div className="heroSection">
        
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h1>Your H1 Content Goes Here</h1>
                <h2>Your H2 Content Goes Here</h2>
              </div>
              <div class="col-md-6">
                <div className="Image">
                  <img src="Images/B1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
