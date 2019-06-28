import React, { Fragment } from "react"
import dropdown from "../../../../../static/baseline-keyboard_arrow_down-24px.svg"
import "./DashboardSidebar.css"

const DashboardSidebar = ({
    sideNavObjects,
    sideNavStyle,
    sideNavTextStyle,
}) => {
    const showObjects = () => {
        return sideNavObjects.map(
            ({ icon, firstLevel, secondLevel }, index) => {
                return (
                    <div key={firstLevel} className="dashboard__item">
                        <div className="dashboard__item__upper-menu">
                            <img
                                className="dashboard__item__icon"
                                src={icon}
                            ></img>
                            <input
                                type="checkbox"
                                id={"menu__click" + index}
                            ></input>
                            <label
                                htmlFor={"menu__click" + index}
                                className="dashboard__item__text"
                                style={sideNavTextStyle}
                            >
                                {firstLevel}
                                {secondLevel.length > 0 && (
                                    <Fragment>
                                        <span className="dashboard__item__dropdown-button">
                                            <img src={dropdown}></img>
                                        </span>
                                        <div className="dashboard__item__lower-menu">
                                            {secondLevel.length > 0
                                                ? secondLevel.map(
                                                      (
                                                          secondLevelObject,
                                                          index
                                                      ) => {
                                                          return (
                                                              <button
                                                                  key={
                                                                      secondLevelObject
                                                                  }
                                                                  className="dashboard__item__lower-menu__item button__without__styling"
                                                              >
                                                                  {
                                                                      secondLevelObject
                                                                  }
                                                              </button>
                                                          )
                                                      }
                                                  )
                                                : null}
                                        </div>
                                    </Fragment>
                                )}
                            </label>
                        </div>
                    </div>
                )
            }
        )
    }

    return (
        <div className="dashboard__sidebar" style={sideNavStyle}>
            {showObjects()}
        </div>
    )
}

export default DashboardSidebar
