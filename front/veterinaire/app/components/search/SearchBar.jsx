"use client";
import { useState } from "react";
import styles from "./SearchBar.module.css";
import data from "../../data/data.json";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (!value) {
      setResults([]);
      return;
    }

    const { PROPRIETAIRE, ANIMAL, VETERINAIRE, CONSULTATION, VACCINATION } = data;
    const allResults = [];

    PROPRIETAIRE.forEach((item) => {
      if (
        item.nom.toLowerCase().includes(value) ||
        item.prenom.toLowerCase().includes(value)
      ) {
        allResults.push({ type: "Propriétaire", ...item });
      }
    });

    ANIMAL.forEach((animal) => {
      if (
        animal.nom.toLowerCase().includes(value) ||
        animal.espece.toLowerCase().includes(value) ||
        animal.race.toLowerCase().includes(value)
      ) {
        allResults.push({ type: "Animal", ...animal });
      }
    });

    VETERINAIRE.forEach((veto) => {
      if (
        veto.nom.toLowerCase().includes(value) ||
        veto.prenom.toLowerCase().includes(value)
      ) {
        allResults.push({ type: "Vétérinaire", ...veto });
      }
    });

    CONSULTATION.forEach((c) => {
      if (c.motif.toLowerCase().includes(value)) {
        allResults.push({ type: "Consultation", ...c });
      }
    });

    VACCINATION.forEach((v) => {
      if (v.type_de_vaccin.toLowerCase().includes(value)) {
        allResults.push({ type: "Vaccination", ...v });
      }
    });

    setResults(allResults);
  };

  // Fonction pour la carte selon le type
  const renderCard = (item, index) => {
    switch (item.type) {
      case "Propriétaire":
        return (
          <div key={index} className={styles.card}>
            <h3>👤 Propriétaire</h3>
            <p><b>Nom :</b> {item.nom}</p>
            <p><b>Prénom :</b> {item.prenom}</p>
            <p><b>Téléphone :</b> {item.telephone}</p>
            <p><b>Email :</b> {item.email}</p>
          </div>
        );

      case "Animal":
        return (
          <div key={index} className={styles.card}>
            <h3>🐾 Animal</h3>
            <p><b>Nom :</b> {item.nom}</p>
            <p><b>Espèce :</b> {item.espece}</p>
            <p><b>Race :</b> {item.race}</p>
          </div>
        );

      case "Vétérinaire":
        return (
          <div key={index} className={styles.card}>
            <h3>🩺 Vétérinaire</h3>
            <p><b>Nom :</b> {item.nom}</p>
            <p><b>Prénom :</b> {item.prenom}</p>
            <p><b>Email :</b> {item.email}</p>
          </div>
        );

      case "Consultation":
        return (
          <div key={index} className={styles.card}>
            <h3>📋 Consultation</h3>
            <p><b>Motif :</b> {item.motif}</p>
            <p><b>Date :</b> {item.date}</p>
          </div>
        );

      case "Vaccination":
        return (
          <div key={index} className={styles.card}>
            <h3>💉 Vaccination</h3>
            <p><b>Vaccin :</b> {item.type_de_vaccin}</p>
            <p><b>Date :</b> {item.date}</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Rechercher : nom, vaccin, veto, animal..."
        value={query}
        onChange={handleSearch}
        className={styles.searchInput}
      />

      <div className={styles.results}>
        {results.map((item, index) => renderCard(item, index))}

        {query && results.length === 0 && (
          <p className={styles.noResults}>Aucun résultat trouvé...</p>
        )}
      </div>
    </div>
  );
}
