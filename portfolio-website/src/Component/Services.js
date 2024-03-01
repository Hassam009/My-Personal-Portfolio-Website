import React from "react";
import ServicesCards from "../Cards/ServicesCards";
import styled from "styled-components";

const Services = (props) => {
  const Wrapper = styled.section`
    .container {
      margin-top:5rem;
      // background-color: #f7f7f7f7;
      background-image: url("Images/shape1.png"); /
      min-width: 100%; /* Set min-width to 100% of the viewport width */
      padding: 20px; /* Add padding to give some space between content and edges */
    }

    h1 {
      text-align: center;
    }
  `;

  return (
    <>
      <Wrapper>
        <div className="container">
          <h1>MY SERVICES</h1>
          <div className="row justify-content-center">
            <div className="col-md-3">
              <ServicesCards
                Title="Card 1"
                Description="I am content of Card 1"
                src="Images/coding.png"
              />
            </div>
            <div className="col-md-3">
              <ServicesCards
                Title="Card 2"
                Description="I am content of Card 2"
                src="Images/B2.jpg"
              />
            </div>
            <div className="col-md-3">
              <ServicesCards
                Title="Card 3"
                Description="I am content of Card 3"
                src="Images/B5.jpg"
              />
            </div>
          
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Services;
