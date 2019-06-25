import React, { Fragment } from "react"
import GeneralInfoForm from "./GeneralInfoForm/GeneralInfoForm"
import TechStackForm from "./TechStackForm/TechStackForm"
import MembersForm from "./MembersForm/MembersForm"
import StickyBar from "./StickyBar/StickyBar"
import "./NewProject.css"

const NewProject = () => {
    return (
        <Fragment>
            <GeneralInfoForm />
            <TechStackForm />
            <MembersForm />
            <StickyBar />
        </Fragment>
    )
}

export default NewProject
