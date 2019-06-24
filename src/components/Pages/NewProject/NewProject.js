import React, { Fragment } from "react"
import "./NewProject.css"
import nodeLogo from "../../../static/node-logo.svg"
import pythonLogo from "../../../static/python-logo.svg"
import graphqlLogo from "../../../static/graphql-logo.svg"
import angularLogo from "../../../static/angular-logo.svg"
import vueLogo from "../../../static/vue-logo.svg"
import reactLogo from "../../../static/react-logo.svg"

const NewProject = () => {
    return (
        <div>
            <div className="inner-container">
                <h2 className="page__header">New Project</h2>
                <form className="form-container">
                    <div className="form-element">
                        <label
                            htmlFor="project-name"
                            className="form-label black"
                        >
                            Project Name
                        </label>
                        <input
                            type="text"
                            id="project-name"
                            name="project-name"
                            className="form-input"
                        ></input>
                    </div>
                    <div className="form-element">
                        <label
                            htmlFor="project-imageUrl"
                            className="form-label black"
                        >
                            Project Image URL
                        </label>
                        <input
                            type="text"
                            id="project-imageUrl"
                            name="project-imageUrl"
                            className="form-input"
                        ></input>
                    </div>
                    <div className="form-element">
                        <label
                            htmlFor="github-link"
                            className="form-label black"
                        >
                            Github Link
                        </label>
                        <input
                            type="text"
                            id="github-link"
                            name="github-link"
                            className="form-input"
                        ></input>
                    </div>
                    <div className="form-element">
                        <label
                            htmlFor="project-description"
                            className="form-label black"
                        >
                            Project Description
                        </label>
                        <textarea
                            id="project-description"
                            name="project-description"
                            className="form-input form-textarea"
                        ></textarea>
                    </div>
                </form>
            </div>
            <form className="form-container form-background">
                <div className="inner-container">
                    <div className="form-techstack">
                        <h2 className="page__header--second">Tech Stack</h2>
                        <div className="page__search">
                            <input
                                className="form-techstack-search"
                                type="text"
                                placeholder="Search"
                            ></input>
                            <div className="form-techstack-summary">
                                <span className="form-techstack-summary-list">
                                    Front:
                                </span>
                                <span className="form-techstack-summary-list-image">
                                    <img src={reactLogo}></img>
                                </span>
                                <span className="form-techstack-summary-list-image">
                                    <img src={angularLogo}></img>
                                </span>
                                <span className="form-techstack-summary-list-image">
                                    <img src={vueLogo}></img>
                                </span>
                            </div>
                            <div className="form-techstack-summary">
                                <span className="form-techstack-summary-list">
                                    Back:
                                </span>
                                <span className="form-techstack-summary-list-image">
                                    <img src={nodeLogo}></img>
                                </span>
                                <span className="form-techstack-summary-list-image">
                                    <img src={pythonLogo}></img>
                                </span>
                                <span className="form-techstack-summary-list-image">
                                    <img src={graphqlLogo}></img>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="inner-container">
                <form className="form-container">
                    <h2 className="page__header--second">Members</h2>
                    <div className="form-element">
                        <label
                            htmlFor="project-memberAmount"
                            className="form-label black"
                        >
                            Amount of members
                        </label>
                        <input
                            type="number"
                            id="project-memberAmount"
                            name="project-memberAmount"
                            className="form-input form-input-number"
                        ></input>
                    </div>
                </form>
            </div>
            <div className="createProjectBar">
                <button className="button__without__styling cta-button-form">
                    Create Project
                </button>
            </div>
        </div>
    )
}

export default NewProject
