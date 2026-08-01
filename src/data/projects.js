import kasa from '../assets/images/kasa.png'
import mvg from '../assets/images/mvg.png'
import nina_carducci from '../assets/images/nina_carducci.png'


const projects = [
  {
    id: 1,
    title: 'Kasa',
    description: 'Application de location immobilière développée en JavaScript avec React, React Router et Sass.',
    context: 'Kasa est une application de location de logements dont le front-end devait être développé à partir de maquettes, en utilisant React et des données simulées issues d’un fichier JSON.',
    objectives: 'L’objectif était de créer une application web moderne et responsive en développant l’ensemble de l’interface utilisateur, en mettant en place la navigation entre les pages avec React Router et en intégrant les différentes fonctionnalités demandées.',
    skills: 'J’ai appris à concevoir une application avec React en créant des composants réutilisables, à gérer la navigation avec React Router et à organiser un projet avec Vite. J’ai également développé des interfaces responsives, utilisé SASS pour le style et mis en place des animations CSS afin d’améliorer l’expérience utilisateur.',
    results: 'L’application offre une navigation fluide entre les différentes pages, une interface responsive conforme aux maquettes et un code structuré facilitant la maintenance et l’évolution du projet.',
    improvements: 'Le projet pourrait être enrichi par la connexion à une API réelle, l’ajout de tests automatisés et l’intégration de fonctionnalités avancées comme les favoris, les filtres de recherche ou un espace utilisateur.',
    technologies: ['React', 'React Router', 'Sass'],
    image: kasa,
    github: 'https://github.com/samybensalem7/samy_bensalem_kasa_p5',
  },
  {
    id: 2,
    title: 'Mon Vieux Grimoire',
    description: 'API sécurisée développée avec Node.js, Express et MongoDB pour gérer des livres, des utilisateurs et des notes.',
    context: 'Mon Vieux Grimoire est un site de notation de livres nécessitant le développement complet de son back-end afin de gérer les utilisateurs, les livres et les évaluations.',
    objectives: 'L’objectif était de créer une API sécurisée permettant aux utilisateurs de s’inscrire, de se connecter, d’ajouter des livres, de les modifier, de les supprimer et de leur attribuer une note.',
    skills: 'J’ai appris à créer des modèles de données, à mettre en place les opérations CRUD et à sécuriser l’authentification avec des mots de passe chiffrés et des tokens. J’ai également géré le téléchargement et l’optimisation des images, les autorisations utilisateur, ainsi que le calcul automatique de la note moyenne des livres.',
    results: 'Le back-end permet une communication fiable entre l’interface utilisateur et la base de données, tout en assurant la sécurité et la cohérence des informations enregistrées. Les fonctionnalités principales de gestion des livres, des utilisateurs et des notations sont entièrement opérationnelles.',
    improvements: 'Le projet pourrait être amélioré avec des tests automatisés, une documentation complète de l’API et un système plus avancé de gestion des rôles et des permissions.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    image: mvg,
    github: 'https://github.com/samybensalem7/samy_bensalem_P6',
  },
  {
    id: 3,
    title: 'Nina Carducci',
    description: "Optimisation du SEO, de l’accessibilité et des performances d’un site de photographe.",
    context: 'Le site de la photographe Nina Carducci présentait des problèmes de performance, de référencement naturel et d’accessibilité pouvant limiter sa visibilité et dégrader l’expérience utilisateur.',
    objectives: 'L’objectif était d’identifier les points faibles du site, puis d’optimiser son chargement, son code, son accessibilité et son positionnement dans les moteurs de recherche.',
    skills: 'J’ai appris à réaliser un audit complet, à optimiser les images au format WebP, à améliorer les balises SEO, les textes alternatifs, le contraste des couleurs et la structure sémantique des pages. J’ai également corrigé plusieurs erreurs techniques et ajouté des données structurées afin d’aider les moteurs de recherche à mieux comprendre le contenu du site.',
    results: 'Les modifications ont permis d’améliorer les résultats Lighthouse, de réduire le temps de chargement et de rendre le site plus accessible et mieux référencé. Un rapport d’optimisation présentant les audits avant et après ainsi que les corrections réalisées a également été produit.',
    improvements: 'Le site pourrait encore être amélioré grâce à un suivi régulier des performances, à une optimisation continue du contenu SEO et à de nouveaux tests d’accessibilité sur différents appareils.',
    technologies: ['HTML', 'CSS', 'SEO'],
    image: nina_carducci,
    github: 'https://github.com/samybensalem7/nina_carducci_p4',
  },
]

export default projects
