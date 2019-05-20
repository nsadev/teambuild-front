import React from "react";
import { useEffect, useState, useRef } from "react";
import "./UserStories.css";
import img0 from "../../static/profimg0.png";
import img1 from "../../static/profimg1.jpeg";
import img2 from "../../static/profimg2.jpg";
import img3 from "../../static/profimg3.png";
import img4 from "../../static/profimg4.jpg";

const UserStories = () => {
  // Initializes storyIndex state and setActiveStory function to update state
  const [storyIndex, setActiveStory] = useState(0);

  // Custom hook defined below that handles carousel initialization and cleanup
  useInterval(() => {
    setActiveStory(storyIndex < 4 ? storyIndex + 1 : 0);
  }, 8000);

  // Changes active story based on user choice
  const onCircleClick = num => {
    setActiveStory(num);
  };

  // Clicks through carousel with arrows
  const onStoryBtnClick = btn => {
    if (btn === "previous") {
      handlePrevClick();
    } else if (btn === "next") {
      handleNextClick();
    }
  };

  const handlePrevClick = () => {
    if (storyIndex === 0) {
      setActiveStory(4);
    }
    if (storyIndex > 0 && storyIndex <= 4) {
      setActiveStory(storyIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (storyIndex < 4) {
      setActiveStory(storyIndex + 1);
    }
    if (storyIndex === 4) {
      setActiveStory(0);
    }
  };

  return (
    <div className="stories-container">
      <h2 className="stories-header">What people are saying</h2>
      <div className="user-stories">
        <div
          className="user-profile-img"
          style={{
            backgroundImage: `url(${UserComments[storyIndex].profimg})`
          }}
        />
        <h3 className="user-name">{UserComments[storyIndex].userName}</h3>
        <div className="stories-nav-container">
          <button
            className="stories-nav-btn"
            onClick={() => onStoryBtnClick("previous")}
          >
            {"<"}
          </button>
          <p className="user-text">{UserComments[storyIndex].userComment}</p>
          <button
            className="stories-nav-btn"
            onClick={() => onStoryBtnClick("next")}
          >
            {">"}
          </button>
        </div>
        <div className="nav-circles-container">
          <div
            className={`nav-circles ${storyIndex === 0 && "active"}`}
            onClick={() => onCircleClick(0)}
          />
          <div
            className={`nav-circles ${storyIndex === 1 && "active"}`}
            onClick={() => onCircleClick(1)}
          />
          <div
            className={`nav-circles ${storyIndex === 2 && "active"}`}
            onClick={() => onCircleClick(2)}
          />
          <div
            className={`nav-circles ${storyIndex === 3 && "active"}`}
            onClick={() => onCircleClick(3)}
          />
          <div
            className={`nav-circles ${storyIndex === 4 && "active"}`}
            onClick={() => onCircleClick(4)}
          />
        </div>
      </div>
    </div>
  );
};

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    // Destroys timer on unmount
    return () => clearInterval(id);
  }, [delay]);
}

export default UserStories;

const UserComments = [
  {
    userName: "Daenerys Targaryen",
    profimg: img0,
    userComment:
      "Zyhys onoso jehikagon Aeksiot epi, se gis hen syndrorro jemagon. Zyhys perzys stepagon Aeksio Ono jorepi, se morghultas lys qelitsos sikagon. Vilibazmosa iderenni emilun. Valar morghulis. Skoriot nuhyz zaldrizesse ilzi?"
  },
  {
    userName: "Margaery Tyrell",
    profimg: img1,
    userComment:
      "In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Praesent nonummy mi in odio. Pellentesque dapibus hendrerit tortor."
  },
  {
    userName: "Jon Snow",
    profimg: img2,
    userComment:
      "In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Praesent nonummy mi in odio. Pellentesque dapibus hendrerit tortor."
  },
  {
    userName: "Arya Stark",
    profimg: img3,
    userComment:
      "In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Praesent nonummy mi in odio. Pellentesque dapibus hendrerit tortor."
  },
  {
    userName: "Euron Greyjoy",
    profimg: img4,
    userComment:
      "In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Praesent nonummy mi in odio. Pellentesque dapibus hendrerit tortor."
  }
];
