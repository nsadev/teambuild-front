import React from 'react';
import Git from './github.png';
import './ProjectInfo.css';

const ProjectInfo = (props) => (
  <div className='content'>
    <div className="project-info">
      <div className="name-and-link">
        <h2 className="project-name">{props.name}</h2>
        <a href="#"><img src={Git} alt="github" className='git-link'/></a>
      </div>
      <div className="info">
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusantium, excepturi blanditiis amet, quidem harum nisi numquam totam eaque labore aut cumque at ipsa animi doloremque laudantium, nulla natus facere! lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe distinctio minima quasi! Doloribus voluptas consequuntur numquam corporis et, itaque neque ducimus inventore explicabo culpa molestiae commodi excepturi fugit velit architecto!
        </p>
      </div>
    </div>
    <div className="project-thumbnail">
      <img src="#" alt="project"/>
    </div>
  </div>
)

export default ProjectInfo;