import React from "react";

function Story({ image, createdAt}) {

    // eslint-disable-next-line react-hooks/purity
    const timeLeft = 24 * 60 * 60 * 1000 - (Date.now() - createdAt);

    if (timeLeft <= 0) return null;

    return (
        <div className="story">
            <img src={image} alt="Story" className="story-image"  style={{ maxWidth: "200px", borderRadius: "10px"}} />
            <div className="time-left">Time left: {Math.floor(timeLeft / (60 * 1000))} minutes</div>
        </div>
    );
            

}

export default Story;