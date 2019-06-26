import React, { useState } from "react"
import SearchBar from "./SearchBar/SearchBar"
import "./TechStackForm.css"

const TechStackForm = () => {
    const [frontTechStack, setFrontTechStack] = useState([])
    const [backTechStack, setBackTechStack] = useState([])

    const handleAddTechStack = suggestion => {
        if (suggestion.frontOrBack === "frontend") {
            setFrontTechStack(frontTechStack => [...frontTechStack, suggestion])
        } else {
            setBackTechStack(backTechStack => [...backTechStack, suggestion])
        }
    }
    console.log(frontTechStack)
    console.log(backTechStack)

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
                                    <span className="form-techstack-summary-list-image">
                                        <img src={tech.icon}></img>
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
                                    <span className="form-techstack-summary-list-image">
                                        <img src={tech.icon}></img>
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
