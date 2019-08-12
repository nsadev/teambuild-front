import React from "react"
import "./ProjectDetails.css"
import "../../../main.css"
import ProjectNavbar from "./ProjectNavbar/ProjectNavbar"
import ProjectInfo from "./ProjectInfo/ProjectInfo"
import ProjectTechStack from "./ProjectTechStack/ProjectTechStack"
import ProjectContributors from "./ProjectContributors/ProjectContributors"
import ProjectApplication from "./ProjectApplication/ProjectApplication"
import ProjectFooter from "./ProjectFooter/ProjectFooter"


const ProjectDetails = () => {
    return (
        <div>
          <ProjectNavbar />
          {/* <ProjectInfo />
          <ProjectTechStack />
          <ProjectContributors />
          <ProjectApplication />
          <ProjectFooter /> */}
        </div>
    )
}

export default ProjectDetails