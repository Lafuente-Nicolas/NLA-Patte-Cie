"use client";
import data from "../../data/data.json";
import styles from "./Veterinarian.module.css";

export default function Veterinarian({ category }) {
  const vets = data.VETERINAIRE;

  // Filtrage en fonction de la catégorie reçue
  const filteredVets = vets.filter((vet) =>
    vet.services.includes(category)
  );

  return (
    <div className={styles.cardContainer}>
      {filteredVets.map((vet) => (
        <div key={vet.id_veterinaire} className={styles.card}>
          <img
            src={`/images/${vet.image}`}
            alt={vet.nom}
            className={styles.photo}
          />
          <div>
            <h3>Dr. {vet.nom} {vet.prenom}</h3>
            <p>Services : {vet.services.join(", ")}</p>
            <p>Distance : {vet.distance}</p>
          </div>
        </div>
      ))}

    </div>
  );
}
