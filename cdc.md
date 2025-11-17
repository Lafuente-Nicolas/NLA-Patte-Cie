# Cahier des charges --- Projet « Patte & Cie »

##  Objectif

Créer une **interface web simple** permettant au personnel de la
clinique vétérinaire **Patte & Cie** de consulter rapidement le **carnet
de santé digitalisé** des animaux, à partir d'un ou plusieurs fichiers
**JSON**.

------------------------------------------------------------------------

##  Fonctionnalités attendues

### Pages

-   **Liste des animaux** : affichage de base + recherche simple.
-   **Fiche détaillée d'un animal** : infos générales + historique
    médical.

### Données

-   Chargement depuis un JSON local.
-   Affichage dynamique via JavaScript.

### Navigation

-   Liste → Fiche → Retour.

### Respect des contraintes

-   Fidélité à la **maquette Figma**.
-   Front uniquement : **HTML / CSS / JS** (framework autorisé).
-   Projet clair et organisé.

------------------------------------------------------------------------
##  Livrables

-   **Use Case UML** (acteurs + cas d'utilisation).
-   **Dictionnaire de données**.
-   **MCD (MERISE)**.
-   **JSON mocké** cohérent.
-   **Pages HTML**, **CSS**, **JS** fonctionnels.
-   **Lien de déploiement** (GitHub Pages).
-   **Présentation** + démo.

------------------------------------------------------------------------

## ✔️ Critères de réussite

### Analyse & conception

-   Documents cohérents, simples et compréhensibles.
-   JSON fidèle au dictionnaire.

### Technique

-   Maquette respectée.
-   HTML propre et sémantique.
-   CSS structuré.
-   JS sans erreur console et affichage correct des données.
-   Navigation fluide.

### Présentation

-   Explications claires + prototype fonctionnel.

------------------------------------------------------------------------

##  Structure recommandée

    project/
    ├─ index.html
    ├─ animal.html
    ├─ assets/css/styles.css
    ├─ assets/js/app.js
    └─ data/animals.json

------------------------------------------------------------------------

##  Exemple rapide de JSON

``` json
{
  "animals": [
    {
      "id": "1",
      "nom": "Mitsy",
      "espece": "Chat",
      "proprietaire": "Lucie Dupont",
      "historique": ["Vaccination 2023", "Visite annuelle"]
    }
  ]
}
```
