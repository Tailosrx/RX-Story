// src/components/Uploader.jsx
import React from "react";

function Uploader() {
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Convertir imagen a base64
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result;

      // Crear objeto story
      const newStory = {
        image: base64Image,
        createdAt: Date.now(),
      };

      // Leer stories existentes
      const savedStories = JSON.parse(localStorage.getItem("stories")) || [];

      // Agregar nueva story
      savedStories.push(newStory);

      // Guardar en LocalStorage
      localStorage.setItem("stories", JSON.stringify(savedStories));

      // Refrescar la página para que StoryList se actualice
      window.location.reload();
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="uploader">
      <label
        htmlFor="file-upload"
        style={{
          cursor: "pointer",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: "5px",
        }}
      >
        ➕ Subir Story
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}

export default Uploader;
