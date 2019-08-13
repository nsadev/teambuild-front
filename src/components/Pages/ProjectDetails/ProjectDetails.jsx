import React, { useState, useEffect } from "react"
import "./ProjectDetails.css"
import ProjectNavbar from "./ProjectNavbar/ProjectNavbar"
import ProjectInfo from "./ProjectInfo/ProjectInfo"
import ProjectTechStack from "./ProjectTechStack/ProjectTechStack"
import ProjectContributors from "./ProjectContributors/ProjectContributors"
import ProjectApplication from "./ProjectApplication/ProjectApplication"
import ProjectFooter from "./ProjectFooter/ProjectFooter"


const ProjectDetails = () => {
  const [ currentProject, setCurrentProject ] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/project')
    .then(res => console.log(res.json()))
    .then(project => {
      setCurrentProject(project)
    })
  }, []);

  return (
    <div>
      <ProjectNavbar />
      <div className="inner-container">
        <ProjectInfo project={currentProject} />
        {/* <ProjectTechStack /> */}
        <ProjectContributors />
        <ProjectApplication />
        <ProjectFooter />
      </div>
    </div>
  )
}

export default ProjectDetails