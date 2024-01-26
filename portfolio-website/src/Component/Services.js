import React from 'react';
import ServicesCards from '../Cards/ServicesCards';

const Services = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
      <h1 className='row justify-content-center'>MY SERVICES</h1>  
        <div className="col-md-3">
          <ServicesCards Title="Card 1" Description="I am content of Card 1" src="Images/B1.jpg"/>
        </div>
        <div className="col-md-3">
          <ServicesCards Title="Card 2" Description="I am content of Card 2" src="Images/B2.jpg" />
        </div>
        <div className="col-md-3">
          <ServicesCards Title="Card 3" Description="I am content of Card 3"  src="Images/B5.jpg"/>
        </div>
        <div className="col-md-3">
          <ServicesCards Title="Card 3" Description="I am content of Card 3"  src="Images/B4.jpg"/>
        </div>
      </div>
    </div>
  );
};

export default Services;
