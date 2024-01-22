import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCards = ({ Title, Description }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <div className="card" style={{ width: '18rem' }}>
          <img src="Images/B2.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{Title}</h5>
            <p className="card-text">
              {Description}
            </p>
            <Link to="#" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
