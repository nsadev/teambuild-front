import React from "react"
import { dummyData } from "./dummyData"
import "../../../main.css"
import "./Projects.css"

const Projects = () => {
    return (
        <div className="inner-container">
            <div>
                <h2 className="page__header">Projects</h2>
            </div>
            <div className="page__search">
                <input
                    className="page__searchbar"
                    type="text"
                    placeholder="Search for projects"
                ></input>
                <button className="page__searchbutton">see all</button>
            </div>
            <div class="page__filters">
                <select class="page__filter">
                    <option>Most Recent</option>
                </select>
                <select class="page__filter">
                    <option>Category</option>
                </select>
                <select class="page__filter">
                    <option>Project Status</option>
                </select>
            </div>
            <div className="page__projects">
                {dummyData.map(project => {
                    return (
                        <div class="page__project">
                            <div className="page__project--content"></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects
