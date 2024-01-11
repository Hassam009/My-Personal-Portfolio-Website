import React from 'react'
import { useState } from 'react';




const About = () => {
    const[count, setCount]= useState(0);

    const increment=()=>{
setCount(count+1);

    }
    
  return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
          <h1>I am About Section</h1>
          <h3>Why you clicked {count} time this Button</h3>
       
          <button type="button" className="btn btn-danger" onClick={increment} >Danger</button>
        </div>
      );
    };
    
export default About
