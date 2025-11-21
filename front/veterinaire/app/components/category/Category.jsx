"use client";
import { useState } from "react";
import styles from "./Category.module.css";
import Veterinarian from "../veterinarian/veterinarian";

const categories = ["Vaccine", "Surgery", "SPA & Treatment", "Consultation"];

export default function Category() {
  const [activeCategory, setActiveCategory] = useState("Vaccine");

  return (
    <div className={styles.container}>

      {/* Boutons */}
      <div className={styles.buttonContainer}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`${styles.categoryButton} ${
              activeCategory === cat ? styles.active : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Affichage des cartes */}
      <Veterinarian category={activeCategory} />
    </div>
  );
}
