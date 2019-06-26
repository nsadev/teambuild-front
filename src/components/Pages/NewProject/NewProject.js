import React, { useState, Fragment } from "react"
import GeneralInfoForm from "./GeneralInfoForm/GeneralInfoForm"
import TechStackForm from "./TechStackForm/TechStackForm"
import MembersForm from "./MembersForm/MembersForm"
import StickyBar from "./StickyBar/StickyBar"
import useForm from "../../../utils/useForm"
import "./NewProject.css"

const NewProject = ({ user }) => {
    const [frontTechStack, setFrontTechStack] = useState([])
    const [backTechStack, setBackTechStack] = useState([])
    const { values, handleChange } = useForm()

    const handleSubmit = () => {
        fetch("/project/new", {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                title: values.projectName,
                leader: user.user_id,
                tech: {
                    frontTechStack,
                    backTechStack,
                },
                contributors: values.projectMemberAmount,
                description: values.projectDescription,
                github: values.githubLink,
            }),
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }

    const handleAddTechStack = suggestion => {
        if (suggestion.frontOrBack === "frontend") {
            setFrontTechStack(frontTechStack => [...frontTechStack, suggestion])
        } else {
            setBackTechStack(backTechStack => [...backTechStack, suggestion])
        }
    }

    const handleDeleteTechStack = (id, frontOrBack) => {
        if (frontOrBack === "frontend") {
            return setFrontTechStack(frontTechStack =>
                frontTechStack.filter(tech => tech.id !== id)
            )
        }
        setBackTechStack(backTechStack =>
            backTechStack.filter(tech => tech.id !== id)
        )
    }

    return (
        <Fragment>
            <GeneralInfoForm handleChange={handleChange} />
            <TechStackForm
                handleAddTechStack={handleAddTechStack}
                handleDeleteTechStack={handleDeleteTechStack}
                frontTechStack={frontTechStack}
                backTechStack={backTechStack}
            />
            <MembersForm handleChange={handleChange} />
            <StickyBar handleSubmit={handleSubmit} />
        </Fragment>
    )
}

export default NewProject
