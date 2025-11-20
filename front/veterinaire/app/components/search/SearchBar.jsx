"use client";
import { useState } from "react";
import styles from "./SearchBar.module.css";
import data from "../../data/data.json";

export default function SearchBar() {
  const [query, setQuery] = useState(""); // valeur du champ de recherche
  const [results, setResults] = useState([]); // resultat du json

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase(); 
    setQuery(value);

    if (!value) {
      setResults([]);
      return;
    }

    const { PROPRIETAIRE, ANIMAL, VETERINAIRE, CONSULTATION, VACCINATION } = data;

    const allResults = [];

    // Recherche dans propriétaires
    PROPRIETAIRE.forEach((item) => {
      if (
        item.nom.toLowerCase().includes(value) ||
        item.prenom.toLowerCase().includes(value)
      ) {
        allResults.push({ type: "Propriétaire", ...item });
      }
    });

    // Recherche dans animaux
    ANIMAL.forEach((animal) => {
      if (
        animal.nom.toLowerCase().includes(value) ||
        animal.espece.toLowerCase().includes(value) ||
        animal.race.toLowerCase().includes(value)
      ) {
        allResults.push({ type: "Animal", ...animal });
      }
    });

    // Recherche dans vétérinaires
    VETERINAIRE.forEach((veto) => {
      if (
        veto.nom.toLowerCase().includes(value) ||
        veto.prenom.toLowerCase().includes(value)
      ) {
        allResults.push({ type: "Vétérinaire", ...veto });
      }
    });

    // Recherche dans consultations
    CONSULTATION.forEach((c) => {
      if (c.motif.toLowerCase().includes(value)) {
        allResults.push({ type: "Consultation", ...c });
      }
    });
