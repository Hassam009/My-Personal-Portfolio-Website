import React from "react";
import { Link } from "react-router-dom";

const ProjectsCards = ({ selectCategory }) => {
  const project = [
    { id: 1, category: "Html", image: "/Images/B4.jpg" /* other properties */ },
    { id: 1, category: "Html", image: "/Images/B1.jpg" /* other properties */ },
    { id: 2, category: "CSS", image: "/Images/B5.jpg" /* other properties */ },
    { id: 3, category: "CSS", image: "/Images/B1.jpg" /* other properties */ },
    {
      id: 3, category: "React",image: "/Images/B2.jpg" /* other properties */},
    // Add more projects as needed
  ];

  const filteredProject = project.filter((project) => {
    return selectCategory ? project.category === selectCategory : true;
  });

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="row">
        {filteredProject.map((project) => (
          <div className="col-md-4" key={project.id}>
            <div className="card mx-2" style={{ width: "18rem" }}>
              <img src={project.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{project.category}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="#" className="btn btn-primary stretched-link">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCards;
