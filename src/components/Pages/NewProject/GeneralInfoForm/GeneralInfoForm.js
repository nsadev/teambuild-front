import React from "react"
import "./GeneralInfoForm.css"

const GeneralInfoForm = ({ handleChange }) => {
    return (
        <div className="inner-container">
            <h2 className="page__header">New Project</h2>
            <form className="form-container">
                <div className="form-element">
                    <label htmlFor="project-name" className="form-label black">
                        Project Name
                    </label>
                    <input
                        type="text"
                        id="projectName"
                        name="project-name"
                        className="form-input"
                        onChange={handleChange}
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
                        name="projectImageUrl"
                        className="form-input"
                        onChange={handleChange}
                    ></input>
                </div>
                <div className="form-element">
                    <label htmlFor="github-link" className="form-label black">
                        Github Link
                    </label>
                    <input
                        type="text"
                        id="github-link"
                        name="githubLink"
                        className="form-input"
                        onChange={handleChange}
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
                        name="projectDescription"
                        className="form-input form-textarea"
                        onChange={handleChange}
                    ></textarea>
                </div>
            </form>
        </div>
    )
}

export default GeneralInfoForm
