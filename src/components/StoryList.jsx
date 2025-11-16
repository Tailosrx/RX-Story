// src/components/StoryList.jsx
import React, { useEffect, useState } from "react";
import Story from "./Story";
import Uploader from "./Uploader";

function StoryList() {
  const [stories, setStories] = useState([]);
  const users =["astro_andy","marco_travels","kevinrx.dev","aromii_chan24", "dani.zone", "luna.sky","max_adventure","sara.creative"];

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
    <div className="story-list">
      <Uploader />
      {stories.length > 0 && (
        <Story 
          image={stories[0].image} 
          createdAt={stories[0].createdAt}
          username={"plannazo"}
        />
      )}

      {stories.slice(1).map((story, index) => (
        <Story
          key={index}
          image={story.image}
          createdAt={story.createdAt}
          username={users[index + 1]}
        />
      ))}
    </div>
  );
}

export default StoryList;
