# Dictionnaire de données 

## Table : PROPRIETAIRE

| Code/Nom         | Libellé                  | Type     | Taille | Règle de gestion                                      |
|------------------|--------------------------|----------|--------|-------------------------------------------------------|
| id_proprietaire  | Identifiant propriétaire | ENTIER   | -      | Clé primaire                        |
| nom              | Nom du propriétaire      | TEXTE    | 50     | Obligatoire                                           |
| prenom           | Prénom du propriétaire   | TEXTE    | 50     | Obligatoire                                           |
| telephone        | Numéro de téléphone      | TEXTE    | 15     | Format numérique           |
| email            | Adresse email            | TEXTE    | 100    | Doit respecter le format email |

---

## Table : ANIMAL

| Code/Nom          | Libellé                  | Type     | Taille | Règle de gestion                                      |
|-------------------|--------------------------|----------|--------|-------------------------------------------------------|
| id_animal         | Identifiant animal       | ENTIER   | -      | Clé primaire                      |
| nom               | Nom de l’animal          | TEXTE    | 50     | Obligatoire                                           |
| espece            | Espèce de l’animal       | TEXTE    | 30     | Exemple : chien, chat (obligatoire)                    |
| race              | Race de l’animal         | TEXTE    | 50     | Facultatif                                            |
| sexe              | Sexe de l’animal         | TEXTE    | 1      | Valeurs possibles : M, F                              |
| date_de_naissance | Date de naissance        | DATE     | -      | Doit être antérieure à la date du jour               |
| id_proprietaire   | Référence propriétaire   | ENTIER   | -      | Clé étrangère vers PROPRIETAIRE                      |

---

## Table : CONSULTATION

| Code/Nom            | Libellé                    | Type     | Taille | Règle de gestion                                      |
|---------------------|----------------------------|----------|--------|-------------------------------------------------------|
| id_consultation     | Identifiant consultation   | ENTIER   | -      | Clé primaire                       |
| date_de_consultation| Date de la consultation    | DATE     | -      | Obligatoire                                           |
| motif               | Motif de la consultation   | TEXTE    | 255    | Description libre                                     |
| id_animal           | Référence animal           | ENTIER   | -      | Clé étrangère vers ANIMAL                            |

---

## Table : VACCINATION

| Code/Nom         | Libellé                   | Type     | Taille | Règle de gestion                                      |
|------------------|---------------------------|----------|--------|-------------------------------------------------------|
| id_vaccination   | Identifiant vaccination   | ENTIER   | -      | Clé primaire                        |
| type_de_vaccin   | Type de vaccin            | TEXTE    | 100    | Exemple : rage, typhus                                |
| date_du_vaccin   | Date du vaccin            | DATE     | -      | Obligatoire                                           |
| date_de_rappel   | Date de rappel            | DATE     | -      | Facultatif                                            |
| id_animal        | Référence animal          | ENTIER   | -      | Clé étrangère vers ANIMAL                            |

---

## Table : VETERINAIRE

| Code/Nom        | Libellé                   | Type     | Taille | Règle de gestion                                      |
|------------------|---------------------------|----------|--------|-------------------------------------------------------|
| id_veterinaire   | Identifiant vétérinaire   | ENTIER   | -      | Clé primaire, auto-incrémentée                        |
| nom              | Nom du vétérinaire        | TEXTE    | 50     | Obligatoire                                           |
| prenom           | Prénom du vétérinaire     | TEXTE    | 50     | Obligatoire                                           |
