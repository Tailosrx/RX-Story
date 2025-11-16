import React from "react";

function Story({ image, createdAt, username }) {
    const timeLeft = 24 * 60 * 60 * 1000 - (Date.now() - createdAt);

    if (timeLeft <= 0) return null;

    return (
        <div className="Story">
            <div>
                <img 
                    src={image} 
                    alt="Story" 
                    className="story-image"   
                />
            </div>
            <span style={{ fontSize: "12px", color: "var(--primary-color)" }}>
                {username}
            </span>
        </div>
    );
}

export default Story;