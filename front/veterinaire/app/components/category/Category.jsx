"use client";
import { useState } from "react";
import styles from "./Category.module.css";

export default function Category() {
  const categories = [
    "Vaccine",
    "Surgery",
    "SPA & Treatment",
    "Consultation"
  ];

  const [active, setActive] = useState(0); // Index du bouton actif

  return (
    <div className={styles.container}>
      {categories.map((cat, index) => (
        <button
          key={index}
          className={`${styles.button} ${
            active === index ? styles.active : ""
          }`}
          onClick={() => setActive(index)}
        >
          {cat} // Nom de la catégorie
        </button>
      ))}
    </div>
  );
}
