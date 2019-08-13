import React from 'react';

import react from './assets/react.png';
import redux from './assets/redux.png';
import node from './assets/node.png';
import python from './assets/python.png';
import vue from './assets/vue.png';
import angular from './assets/angular.png';

import './ProjectTechStack.css';

const techStackDummy = [react, redux, node, python, vue, angular];

const ProjectTechStack = () => (
  <div className="inner-container">
    <h3>Tech Stack</h3>
    <div className='tech-stack'>
      {
        techStackDummy.map(tech => (
          <div className="icon-container">
            <img key={tech} src={tech} alt={tech} className='icon'/>
          </div>
        ))
      }
    </div>
  </div>
  
)

export default ProjectTechStack;