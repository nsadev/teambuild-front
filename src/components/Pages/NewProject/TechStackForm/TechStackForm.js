import React from "react"
import nodeLogo from "../../../../static/node-logo.svg"
import pythonLogo from "../../../../static/python-logo.svg"
import graphqlLogo from "../../../../static/graphql-logo.svg"
import angularLogo from "../../../../static/angular-logo.svg"
import vueLogo from "../../../../static/vue-logo.svg"
import reactLogo from "../../../../static/react-logo.svg"
import "./TechStackForm.css"

const TechStackForm = () => {
    return (
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
    )
}

export default TechStackForm
