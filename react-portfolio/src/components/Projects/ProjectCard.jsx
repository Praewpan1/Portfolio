import React, { useState } from "react";
import styles from "./ProjectCart.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project: { title, imageSrc, description } }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>

      
      <button onClick={toggleDescription} className={styles.button}>
        {showDescription ? "Not showing" : "More details"}
      </button>

     
      {showDescription && <p className={styles.description}>{description}</p>}
    </div>
  );
};
