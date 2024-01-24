import React from 'react';

import styled from 'styled-components';

const Home = () => {

const Wrapper=styled.section`
.heroSection{
  Background-color:black;
}
`

  return (
    <>
    <Wrapper>
    <div className="heroSection">
      <h1 className="text-center">I am Home</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
        <div className="col mb-4">
          <div className="card" style={{ maxWidth: '18rem' }}>
            <img src="/Images/1.jpg" className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card" style={{ maxWidth: '18rem' }}>
            <img src="/Images/1.jpg" className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card" style={{ maxWidth: '18rem' }}>
            <img src="/Images/1.jpg" className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card" style={{ maxWidth: '18rem' }}>
            <img src="/Images/1.jpg" className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
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

export default Home;
