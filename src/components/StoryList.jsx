// src/components/StoryList.jsx
import React, { useEffect, useState } from "react";
import Story from "./Story";

function StoryList() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // Leer stories desde LocalStorage
    const savedStories = JSON.parse(localStorage.getItem("stories")) || [];

    // Filtrar las que aún no han expirado
    const activeStories = savedStories.filter(
      (story) => Date.now() - story.createdAt < 24 * 60 * 60 * 1000
    );

    setStories(activeStories);
  }, []);

  return (
    <div className="story-list" style={{ display: "flex", gap: "10px" }}>
      {stories.length === 0 ? (
        <p>No hay stories activas</p>
      ) : (
        stories.map((story, index) => (
          <Story key={index} image={story.image} createdAt={story.createdAt} />
        ))
      )}
    </div>
  );
}

export default StoryList;
