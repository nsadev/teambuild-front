import React from "react"
import Autosuggest from "react-autosuggest"
import AutosuggestHighlightMatch from "autosuggest-highlight/match"
import AutosuggestHighlightParse from "autosuggest-highlight/parse"
import nodeLogo from "../../../../../static/node-logo.svg"
import pythonLogo from "../../../../../static/python-logo.svg"
import graphqlLogo from "../../../../../static/graphql-logo.svg"
import angularLogo from "../../../../../static/angular-logo.svg"
import vueLogo from "../../../../../static/vue-logo.svg"
import reactLogo from "../../../../../static/react-logo.svg"
import "./SearchBar.css"

const techStack = [
    {
        tech: "React",
        frontOrBack: "frontend",
        picture: "react",
        icon: reactLogo,
    },
    {
        tech: "Angular",
        frontOrBack: "frontend",
        picture: "angular",
        icon: angularLogo,
    },
    {
        tech: "Vue",
        frontOrBack: "frontend",
        picture: "vue",
        icon: vueLogo,
    },
    {
        tech: "Node",
        frontOrBack: "backend",
        picture: "node",
        icon: nodeLogo,
    },
    {
        tech: "Python",
        frontOrBack: "backend",
        picture: "python",
        icon: pythonLogo,
    },
    {
        tech: "GraphQL",
        frontOrBack: "backend",
        picture: "graphql",
        icon: graphqlLogo,
    },
]

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim())

    if (escapedValue === "") {
        return []
    }

    const regex = new RegExp("\\b" + escapedValue, "i")

    return techStack.filter(person => regex.test(getSuggestionValue(person)))
}

function getSuggestionValue(suggestion) {
    return `${suggestion.tech}`
}

function renderSuggestion(suggestion, { query }) {
    const suggestionText = `${suggestion.tech}`
    const matches = AutosuggestHighlightMatch(suggestionText, query)
    const parts = AutosuggestHighlightParse(suggestionText, matches)

    return (
        <span className={"suggestion-content " + suggestion.picture}>
            <span className="name">
                {parts.map((part, index) => {
                    const className = part.highlight ? "highlight" : null

                    return (
                        <span className={className} key={index}>
                            {part.text}
                        </span>
                    )
                })}
            </span>
        </span>
    )
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: "",
            suggestions: [],
            realValue: "",
        }
    }

    onChange = (event, { newValue, method }) => {
        this.setState({
            value: newValue,
        })
    }

    onSuggestionSelected = (
        event,
        { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
    ) => {
        this.props.handleAddTechStack(suggestion)
        // console.log("real value: " + suggestionValue)
    }

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value),
        })
    }

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: [],
        })
    }

    render() {
        const { value, suggestions } = this.state
        const inputProps = {
            placeholder: "Search",
            value,
            onChange: this.onChange,
        }

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                onSuggestionSelected={this.onSuggestionSelected}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        )
    }
}

export default SearchBar
