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
    <div className="uploader" style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center",
      gap: "5px"
    }}>
      <label
        htmlFor="file-upload"
        style={{
          cursor: "pointer",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          border: "3px dashed #007bff",
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "32px",
          color: "#007bff",
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#007bff";
          e.target.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = "#007bff";
        }}
      >
        ➕
      </label>
      <span style={{ fontSize: "12px", color: "var(--primary-color)" }}>Tu Story</span>
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
