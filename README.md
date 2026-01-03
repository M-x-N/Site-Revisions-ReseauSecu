# 🛡️ Site de Révision - Réseau & Sécurité

Bienvenue sur le dépôt du site de révision pour le cours de Réseau et Sécurité. Ce projet est une application web interactive conçue pour aider les étudiants à s'entraîner sur les examens passés et réviser les concepts clés.

## ✨ Fonctionnalités

- **Questionnaire Interactif** : Mode flashcard pour tester vos connaissances.
- **Filtres Avancés** :
  - Par Chapitre (Thématique)
  - Par Année d'Examen (2018-2019, 2019-2020, etc.)
- **Support Mathématique** : Rendu des formules (RSA, Vigenère, etc.) en $\LaTeX$.
- **Liens Sources** : Accès direct au PDF de l'examen original pour chaque question (avec référence précise `Q.X`).
- **Suivi de Progression** : Sauvegarde locale des questions "maîtrisées" et "à revoir".
- **Interface Moderne** : Mode sombre/clair, responsive, basé sur shadcn/ui.

## 🚀 Installation & Démarrage

Ce projet est optimisé pour utiliser **[Bun](https://bun.sh/)** car il est nettement plus rapide pour l'installation des dépendances et le démarrage du serveur de développement. Cependant, `npm` (ou `pnpm`/`yarn`) fonctionne tout aussi bien.

### Pré-requis

- Node.js 18+ ou Bun 1.0+
- Git

### Utilisation avec Bun (Recommandé ⚡)

```bash
# 1. Cloner le dépôt
git clone https://github.com/M-x-N/Site-Revisions-ReseauSecu.git
cd Site-Revisions-ReseauSecu

# 2. Installer les dépendances
bun install

# 3. Lancer le serveur de développement
bun dev
```

### Utilisation avec NPM (Standard)

```bash
# 1. Cloner le dépôt
git clone https://github.com/M-x-N/Site-Revisions-ReseauSecu.git
cd Site-Revisions-ReseauSecu

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## 📂 Structure du Projet

Le projet est construit avec **Next.js 15** (App Router). Voici les fichiers importants :

- `src/app/` : Contient les pages de l'application.
  - `page.tsx` : Page d'accueil.
  - `questionnaire/page.tsx` : Logique principale du questionnaire (filtres, état, affichage).
- `src/lib/data.ts` : **Cœur des données**. Contient toutes les questions, chapitres et termes du glossaire. C'est ici qu'il faut ajouter du contenu.
- `src/components/ui/` : Composants réutilisables (shadcn/ui & composants custom comme `LatexText`).
- `public/resources/` : Stockage des fichiers PDF (Cours, Examens, Annexes).

## 🤝 Contribuer (Ajouter des Questions)

Pour ajouter une nouvelle question, modifiez le fichier `src/lib/data.ts`.

Format d'une question :

```typescript
{
  id: 'qX', // ID unique
  chapterId: 'chapX', // ID du chapitre associé
  examYear: '2020-2021', // Année ou 'Annexes'
  question: 'Énoncé de la question (supporte LaTeX entre $...$)',
  answer: 'Réponse détaillée (supporte LaTeX entre $...$)',
  difficulty: 'moyen', // 'facile' | 'moyen' | 'difficile'
  tags: ['Tag1', 'Tag2'],
  examQuestionRef: 'Q.1' // Optionnel : Référence dans le PDF
}
```

## 🛠️ Tech Stack

- **Framework** : Next.js 15
- **Langage** : TypeScript
- **Style** : Tailwind CSS
- **Composants** : shadcn/ui (Radix UI)
- **Maths** : KaTeX (`react-katex`)
- **Icônes** : Lucide React
