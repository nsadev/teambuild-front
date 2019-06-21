import React, { Fragment } from "react"
import Navbar from "../Home/Navbar/Navbar"
import Footer from "../Home/Footer/Footer"
import Projects from "../Projects/Projects"
import "./ViewProjects.css"

const ViewProjects = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="blocks-background">
                <Projects />
            </div>
            <Footer />
        </Fragment>
    )
}

export default ViewProjects
