// Skills.js

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  /* Skills.css */

  .skill-heading {
    color: #333; /* Change the color as needed */
  }

  .custom-progress {
    margin-top: 10px; /* Adjust margin as needed */
  }
`;

const Skills = () => {
  return (
    <>
      <Wrapper className="container">
        <h1 className="text-center">My Skills</h1>
        <div className="row mx-auto">
          {/* First Row */}
          <div className="col-md-6">
            <h2 className="skill-heading">Skill 1</h2>
            <div className="progress custom-progress">
              <div
                className="progress-bar progress-bar-striped"
                role="progressbar"
                style={{ width: '50%' }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="skill-heading">Skill 2</h2>
            <div className="progress custom-progress">
              <div
                className="progress-bar progress-bar-striped bg-success"
                role="progressbar"
                style={{ width: '75%' }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          {/* Second Row */}
          <div className="col-md-6">
            <h2 className="skill-heading">Skill 3</h2>
            <div className="progress custom-progress">
              <div
                className="progress-bar progress-bar-striped bg-info"
                role="progressbar"
                style={{ width: '30%' }}
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="skill-heading">Skill 4</h2>
            <div className="progress custom-progress">
              <div
                className="progress-bar progress-bar-striped bg-warning"
                role="progressbar"
                style={{ width: '40%' }}
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="skill-heading">Skill 5</h2>
            <div className="progress custom-progress">
              <div
                className="progress-bar progress-bar-striped bg-warning"
                role="progressbar"
                style={{ width: '40%' }}
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="skill-heading">Skill 6</h2>
            <div className="progress custom-progress">
              <div
                className="progress-bar progress-bar-striped bg-warning"
                role="progressbar"
                style={{ width: '40%' }}
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Skills;
