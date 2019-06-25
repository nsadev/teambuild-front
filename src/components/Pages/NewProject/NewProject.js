import React, { Fragment } from "react"
import GeneralInfoForm from "./GeneralInfoForm/GeneralInfoForm"
import TechStackForm from "./TechStackForm/TechStackForm"
import MembersForm from "./MembersForm/MembersForm"
import StickyBar from "./StickyBar/StickyBar"
import useForm from "../../../utils/useForm"
import "./NewProject.css"

const NewProject = () => {
    const { values, handleChange } = useForm()
    const handleSubmit = () => {
        console.log("submitting...")
    }
    console.log(values)
    return (
        <Fragment>
            <GeneralInfoForm handleChange={handleChange} />
            <TechStackForm />
            <MembersForm handleChange={handleChange} />
            <StickyBar handleSubmit={handleSubmit} />
        </Fragment>
    )
}

export default NewProject
