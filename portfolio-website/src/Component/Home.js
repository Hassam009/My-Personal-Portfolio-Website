import React from "react";

import styled from "styled-components";

const Home = () => {
  const Wrapper = styled.section`
    .heroSection {
      background-image: url("Images/B2.jpg");
    }
    .text-center {
      color: White;
    }
  `;

  return (
    <>
      <Wrapper>
        <div className="heroSection">
          <h1 className="text-center">I am Home</h1>
          <div class="container">
  <div class="row">
    <div class="col-md-6">
      Column
    </div>
    <div class="col-md-6">
      Column
    </div>
  </div>
</div>
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
