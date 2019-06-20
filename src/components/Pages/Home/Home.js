import React, { Fragment, useState } from "react"

import Navbar from "./Navbar/Navbar"
import Jumbotron from "./Jumbotron/Jumbotron"
import Motivations from "./Motivations/Motivations"
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects"
import UserStories from "./UserStories/UserStories"
import PreFooter from "./PreFooter/PreFooter"
import Footer from "./Footer/Footer"

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <Jumbotron />
            <Motivations />
            <FeaturedProjects />
            <UserStories />
            <PreFooter />
            <Footer />
        </Fragment>
    )
}

export default Home
