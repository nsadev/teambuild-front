import React from "react"
import SearchBar from "./SearchBar/SearchBar"
import "./TechStackForm.css"

const TechStackForm = ({
    handleAddTechStack,
    handleDeleteTechStack,
    frontTechStack,
    backTechStack,
}) => {
    return (
        <form className="form-container form-background">
            <div className="inner-container">
                <div className="form-techstack">
                    <h2 className="page__header--second">Tech Stack</h2>
                    <div className="page__search">
                        <SearchBar handleAddTechStack={handleAddTechStack} />
                        <div className="form-techstack-summary">
                            <span className="form-techstack-summary-list">
                                Front:
                            </span>
                            {frontTechStack.map(tech => {
                                return (
                                    <span className="form-techstack-summary-list-item">
                                        <div className="form-techstack-summary-list-item-image-wrapper">
                                            <img
                                                className="form-techstack-summary-list-item-image"
                                                src={tech.icon}
                                            ></img>
                                            <button
                                                onClick={e => {
                                                    e.preventDefault()
                                                    handleDeleteTechStack(
                                                        tech.id,
                                                        tech.frontOrBack
                                                    )
                                                }}
                                                className="hiddentest"
                                            >
                                                x
                                            </button>
                                        </div>
                                    </span>
                                )
                            })}
                        </div>
                        <div className="form-techstack-summary">
                            <span className="form-techstack-summary-list">
                                Back:
                            </span>
                            {backTechStack.map(tech => {
                                return (
                                    <span className="form-techstack-summary-list-item">
                                        <div className="form-techstack-summary-list-item-image-wrapper">
                                            <img
                                                className="form-techstack-summary-list-item-image"
                                                src={tech.icon}
                                            ></img>
                                            <button
                                                onClick={e => {
                                                    e.preventDefault()
                                                    handleDeleteTechStack(
                                                        tech.id,
                                                        tech.frontOrBack
                                                    )
                                                }}
                                                className="hiddentest"
                                            >
                                                x
                                            </button>
                                        </div>
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default TechStackForm
