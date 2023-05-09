export const info = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "Aiden MEBARKI",
  jobDescription: "Web Developer",
  about: `
  Avec une passion dévorante pour le développement web dès l'âge de 13 ans,
  j'ai débuté mon parcours en créant des serveurs Minecraft avec le langage Java. Autodidacte dans l'âme, j'ai affiné mes compétences en explorant différents langages informatiques.
  Actuellement étudiant à Epitech, je suis à la recherche d'une alternance en développement web pour septembre 2023, afin de mettre à profit mon savoir-faire.
  `,

  experience: [
    {
      name: "Epitech",
      location: "Lyon, France",
      startDate: "Nov 2022",
      endDate: "Présent",
      description: [
        "✓ Développement web : HTML, CSS, JavaScript, PHP, Symfony, React, Node, Angular, Laravel... ",
        "✓ Bases de données : MySQL, MongoDB. ",
        "✓ Conception de sites web : UX, accessibilité.",
        "✓ Architecture logicielle : modèle MVC, bibliothèques et frameworks.",
        "✓ Sécurité informatique : vulnérabilités, cryptographie.",
		"✓ Développement en équipe : Git, Jenkins, environnement agile.",
      ],
    },
    {
      name: "42",
      location: "Lyon, France",
      startDate: "2021",
      endDate: "2021",
      description: [
        "✓ La philosophie et la méthodologie de l'école 42.",
		"✓ Les fondamentaux de la programmation en langage C.",
		"✓ Les algorithmes et les structures de données.",
		"✓ La manipulation de l'environnement Unix/Linux.",
		"✓ La pratique du pair programming.",
		"✓ La participation à des projets en équipe.",
		
      ],
    },
  ],

  education: [
    {
      name: "Cuisinier",
      location: "Les Magnolias - Villefranche sur saone",
      startDate: "2022",
      endDate: "2022",
      description: [
        "✓ Respect des consignes strictes",
        "✓ Adaptation de chaque commande en fonction d’un résident",
        "✓ Avoir à respecter un planning dans les délais",
      ],
    },
    {
      name: "Responsable Adjoint de Cuisine",
      location: "Léon - Villefranche sur saone",
      startDate: "2020",
      endDate: "2022",
      description: [
        "✓ S’adapter à la demande de la clientèle",
        "✓ Travail d’équipe",
        "✓ Gestion d’un budget",
        "✓ Gérer une équipe d’une dizaine de personne",
      ],
    },
  ],

  socialMedia: {
    github: "https://github.com/aidenEpitech",
    email: "mailto:sofiane-aiden.mebarki@epitech.eu",
    linkedin: "https://www.linkedin.com/in/aidenepitech/",
  },

  projects: [
	{
		title: "Karmine Corp IOS APP",
		isFeatured: true,
		thumbnail: "/assets/images/karminecorp-app.png",
		githubUrl: "https://github.com/aidenEpitech/Karmine-Corp-App",
		// liveUrl: "#",
	  },
    {
      title: "API Discord for Deezer",
      isFeatured: true,
      thumbnail: "/assets/images/API-Discord-for-Deezer.png",
    },
	{
		title: "Minecraft Anti-Cheat for EpiCube",
		isFeatured: true,
		thumbnail: "/assets/images/epicube-anticheat.png",
	  },
  ],
};
