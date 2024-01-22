import React from 'react';
import ServicesCards from '../Cards/ServicesCards';

const Services = (props) => {

  return (
    <>
      <ServicesCards Title="Card 1"  Description="I am content of Card 1"></ServicesCards>
      <ServicesCards Title="Card 2"  Description="I am content of Card 2"></ServicesCards>
      <ServicesCards Title="Card 3" Description="I am content of Card 3"></ServicesCards>
 
    </>
  );
};

export default Services;
