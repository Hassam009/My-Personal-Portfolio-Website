import React, {useState} from 'react';
import ProjectsCards from '../Cards/ProjectsCards';

const Projects = () => {
const [selectCategory, setSelectCategory]=useState();

const handleCategoryClick=(category)=>{
    setSelectCategory(category);
}
const handleCategoryClick2=(category)=>{
    setSelectCategory();
}

  return (
    <>
      <div className="Project d-flex flex-column align-items-center justify-content-center">
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
          <button type="button"
          onClick={()=>handleCategoryClick2('All')}
          class="btn btn-danger">
            All
          </button>
          <button type="button"
          onClick={()=>handleCategoryClick('Html')}
          class="btn btn-danger">
            Html
          </button>
          <button type="button"
            onClick={()=>handleCategoryClick('CSS')}
          class="btn btn-warning">
            CSS
          </button>
          <button type="button" 
            onClick={()=>handleCategoryClick('React')}
            class="btn btn-success">
        
            React
          </button>
        </div>
        <ProjectsCards  selectCategory={selectCategory}/>
      </div>
    </>
  );
};

export default Projects;
