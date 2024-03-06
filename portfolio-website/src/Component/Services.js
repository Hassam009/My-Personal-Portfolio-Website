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
    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
    }
    span{
      display: inline-block;
      text-decoration:none;
      color:inherit; 
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
        <div className="pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="section-head col-sm-12">
                <h4>
                  <span>Why Choose us </span>
                </h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                  amet vel hic deserunt repellat temporibus, quas maiores?
                  Molestias, voluptates atque!
                </p>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="item">
                  <span class="icon feature_box_col_one">
                    <i className="fa fa-globe"></i>
                  </span>
                  <h6>Modern Design</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat, quod perferendis. Consectetur animi temporibus
                    modi pariatur dolor expedita tenetur repellendus?
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="item">
                  <span class="icon feature_box_col_one">
                    <i className="fa fa-globe"></i>
                  </span>
                  <h6>Market Strategy</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat, quod perferendis. Consectetur animi temporibus
                    modi pariatur dolor expedita tenetur repellendus?
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="item">
                  <span class="icon feature_box_col_one">
                    <i className="fa fa-globe"></i>
                  </span>
                  <h6>Business Growth</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat, quod perferendis. Consectetur animi temporibus
                    modi pariatur dolor expedita tenetur repellendus?
                  </p>
                </div> 
              </div>
              
              <div className="col-lg-4 col-sm-6">
                <div className="item">
                  <span class="icon feature_box_col_one">
                    <i className="fa fa-globe"></i>
                  </span>
                  <h6>Business Growth</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat, quod perferendis. Consectetur animi temporibus
                    modi pariatur dolor expedita tenetur repellendus?
                  </p>
                </div> 
              </div>
              
              <div className="col-lg-4 col-sm-6">
                <div className="item">
                  <span class="icon feature_box_col_one">
                    <i className="fa fa-globe"></i>
                  </span>
                  <h6>Business Growth</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat, quod perferendis. Consectetur animi temporibus
                    modi pariatur dolor expedita tenetur repellendus?
                  </p>
                </div> 
              </div>
              
              <div className="col-lg-4 col-sm-6">
                <div className="item">
                  <span class="icon feature_box_col_one">
                    <i className="fa fa-globe"></i>
                  </span>
                  <h6>Business Growth</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat, quod perferendis. Consectetur animi temporibus
                    modi pariatur dolor expedita tenetur repellendus?
                  </p>
                </div> 
              </div>
              


            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Services;
