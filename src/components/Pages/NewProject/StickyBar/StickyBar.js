import React from "react"
import "./StickyBar.css"

const StickyBar = ({ handleSubmit }) => {
    return (
        <div className="stickyBar">
            <button
                className="button__without__styling cta-button-form stickyBar-container"
                onClick={handleSubmit}
            >
                Create Project
            </button>
        </div>
    )
}

export default StickyBar
