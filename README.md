<br />
<div align="center">
  <h1 align="center">Jeux VideOPS</h1>
  <p align="center">
    <strong>Automatiser plus pour travailler moins</strong><br />
    Mise en place de pipelines CI/CD complets
    <br />
    <a href="https://shiryumu8.github.io/JEUX-VIDEOPS/"><strong>Accéder aux jeux en ligne</strong></a>
  </p>
</div>

### Fonctionnalités
* Faciliter le développement des jeux
* Garantir la qualité et la sécurité du code produit
*  Accélérer le déploiement des jeux
* Promouvoir ces jeux, en les mettant à disposition en ligne
### 🛠 Technologies
* [![Docker][Docker-badge]][Docker-url]
* [![Jest][Jest-badge]][Jest-url]
* [![Cypress][Cypress-badge]][Cypress-url]
* [![GitHub Actions][GA-badge]][GA-url]

---

## Démarrage

### Avec Docker

```bash
# Se placer dans le dossier à la racine
docker compose up --build
```

---

### Sans Docker

#### Prérequis
* **Node.js** (v20+)
* **npm**

#### Installation

```bash
# Installation des outils racine (Cypress, ESLint)
npm install

# Configuration de Space Word
cd games/space-word && npm install
cd ../..

# Configuration de Two Ships
cd games/two-ships && npm install
cd ../..
```

#### Utilisation

```bash
# Lancement du jeu Space Word
cd games/space-word && npm start

# Exécuter les tests unitaires (Jest)
npm test

# Lancer les tests fonctionnels (Cypress)
npx cypress open
```

---

[Docker-badge]: https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
[Jest-badge]: https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white
[Jest-url]: https://jestjs.io/
[Cypress-badge]: https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white
[Cypress-url]: https://www.cypress.io/
[GA-badge]: https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white
[GA-url]: https://github.com/features/actions
