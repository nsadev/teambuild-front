import React, { Fragment } from "react"
import Navbar from "../Home/Navbar/Navbar"
import Footer from "../Home/Footer/Footer"
import Projects from "../Projects/Projects"

const ViewProjects = () => {
    return (
        <Fragment>
            <div>
                <div className="rectangle rectangle-1" />
                <div className="rectangle rectangle-2" />
                <div className="rectangle-small" />
                <div className="rectangle rectangle-3" />
                <div className="rectangle rectangle-4" />
            </div>
            <Navbar />
            <Projects />
            <Footer />
        </Fragment>
    )
}

export default ViewProjects
