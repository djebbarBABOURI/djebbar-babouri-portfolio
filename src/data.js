// ✏️ Modifiez uniquement ce fichier pour personnaliser le portfolio.
export const profile = {
  name: 'Djebbar Babouri',
  email: 'djebbarbabouri@gmail.com',
  photo: '/photo.jpg', // optionnel : mettez votre photo dans /public (sinon initiales)
  cv: { fr: '/cv_djebbar_babouri.pdf', en: '/cv_djebbar_babouri.pdf' }, // PDF dans /public
  github: 'https://github.com/djebbarBABOURI',
  linkedin: 'https://linkedin.com/in/djebbar-babouri-567847283',
  available: true,
}

const L = (fr, en) => ({ fr, en })

export const skills = [
  {
    title: L('Data Science & Machine Learning', 'Data Science & Machine Learning'),
    items: ['NumPy', 'Pandas', 'Scikit-learn', 'Preprocessing', L('Classification', 'Classification'), L('Régression', 'Regression'), 'Clustering', L('Règles d’association', 'Association rules'), L('Séries temporelles', 'Time series'), L('Évaluation de modèles', 'Model evaluation')]
  },
  { title: 'Deep Learning', items: ['PyTorch', 'Keras', L('Réseaux de neurones', 'Neural networks'), 'CNN', L('Entraînement & évaluation', 'Training & evaluation')] },
  { title: L('IA générative & LLM', 'Generative AI & LLMs'), items: ['LLM APIs', 'Ollama', 'RAG', 'Embeddings', L('Recherche sémantique', 'Semantic search'), 'LangChain', 'MCP', 'Pinecone'] },
  { title: L('Langages & bases de données', 'Languages & databases'), items: ['Python', 'Java', 'C', 'PHP', 'JavaScript', 'TypeScript', 'SQL', 'PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'SQLite'] },
  { title: L('Développement Web & API', 'Web development & APIs'), items: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Node.js', 'Express.js', 'FastAPI', 'Django', 'Spring Boot', 'API REST', 'WebSockets'] },
  { title: L('Visualisation & outils', 'Visualization & tools'), items: ['Matplotlib', 'Seaborn', 'Power BI', 'Git', 'GitHub', 'GitLab', 'Postman', 'Docker', 'JUnit', 'CI/CD', 'Agile / Scrum'] },
]

export const experience = [
  {
    doc: '', title: L('Stagiaire chercheur en Intelligence Artificielle', 'AI research intern'), place: L('CRIL – Centre de Recherche en Informatique de Lens', 'CRIL – Lens Computer Science Research Centre'), period: L('Mars – juin 2026', 'Mar – Jun 2026'),
    bullets: {
      fr: ['Étude de l’incertitude linguistique des LLMs et de leur capacité à exprimer leur niveau de confiance, sur des corpus français et anglais.', 'Comparaison de quatre LLMs open-source (LLaMA 3.1 8B, Mistral 7B, Gemma 3 4B, Granite 4 Tiny) avec plusieurs métriques d’incertitude et de calibration, et analyse de la robustesse aux reformulations et selon la langue.', 'Mise en œuvre de méthodes de calibration : baisse de l’ECE de 27 % à 81 % et du Brier Score jusqu’à 49,2 %.'],
      en: ['Studied linguistic uncertainty in LLMs and their ability to express confidence, on French and English corpora.', 'Compared four open-source LLMs (LLaMA 3.1 8B, Mistral 7B, Gemma 3 4B, Granite 4 Tiny) with several uncertainty and calibration metrics, and analysed robustness to rephrasing and across languages.', 'Implemented calibration methods: ECE reduced by 27% to 81% and Brier Score by up to 49.2%.']
    }
  },
  {
    doc: '/attestations/att_stage_fullstack_web.pdf', title: L('Stagiaire développeur web full stack (à distance)', 'Full stack web developer intern (remote)'), place: 'BIGNOVA · Béjaïa, Algérie', period: L('Février – août 2025', 'Feb – Aug 2025'),
    bullets: {
      fr: ['Développement full stack avec React.js, Next.js, Node.js, Express.js et FastAPI, et conception d’API RESTful pour des données métier.', 'Maintenance de modules en production et correction de 100 % des bugs signalés, en équipe Agile avec Git, GitHub et revues de code.'],
      en: ['Full stack development with React.js, Next.js, Node.js, Express.js and FastAPI, and design of RESTful APIs for business data.', 'Maintained production modules and fixed 100% of reported bugs, in an Agile team using Git, GitHub and code reviews.']
    }
  },
  {
    doc: '/attestations/Att_stage_fin_etudes.pdf', title: L('Stagiaire développeur web full stack (stage de Master)', 'Full stack web developer intern (Master’s)'), place: 'ESTIN · Béjaïa, Algérie', period: L('Janvier – juin 2023', 'Jan – Jun 2023'),
    bullets: {
      fr: ['Développement d’un module back-end avec Django (base de données, vues, utilisateurs) et d’interfaces front-end responsives en HTML5, CSS3, JavaScript et Bootstrap, intégrés à l’architecture existante.'],
      en: ['Built a Django back-end module (database, views, users) and responsive front-end interfaces in HTML5, CSS3, JavaScript and Bootstrap, integrated into the existing architecture.']
    }
  },
]

export const education = [
  { title: L('Master 2 Informatique (Intelligence Artificielle)', 'Master’s 2 Computer Science (Artificial Intelligence)'), place: 'Université d’Artois, Lens', period: L('Sept. 2026 – juin 2027', 'Sep 2026 – Jun 2027'), image: '/formations/artois.jpg', doc: '/attestations/master-2-artois.pdf' },
  { title: L('Master 1 Informatique (tronc commun)', 'Master’s 1 Computer Science (core)'), place: 'Université d’Artois, Lens', period: L('Sept. 2025 – juin 2026', 'Sep 2025 – Jun 2026'), image: '/formations/artois.jpg', doc: '/attestations/master-1-artois.pdf' },
  { title: L('Master Génie Logiciel', 'Master’s in Software Engineering'), place: 'Université Abderrahmane Mira, Béjaïa', period: L('Sept. 2021 – juin 2023', 'Sep 2021 – Jun 2023'), image: '/formations/univ-bejaia.jpg', doc: '/attestations/master-genie-logiciel.pdf' },
  { title: L('Licence Informatique (Systèmes Informatiques)', 'Bachelor’s in Computer Science (Computer Systems)'), place: 'Université Abderrahmane Mira, Béjaïa', period: L('Sept. 2018 – juin 2021', 'Sep 2018 – Jun 2021'), image: '/formations/univ-bejaia.jpg', doc: '/attestations/licence-informatique.pdf' },
]

export const projects = [
  {
    name: L('Assistant de recherche d’images piloté par LLM', 'LLM-driven image search assistant'), image: '/projects/image-search.png', tags: ['PyTorch', 'MCP', 'Ollama', 'FastAPI'], period: L('Automne 2026', 'Fall 2026'),
    context: L('Projet de groupe en Deep Learning, Master 2 IA, Université d’Artois', 'Group Deep Learning project, Master’s 2 AI, Université d’Artois'),
    desc: {
      fr: ['Assistant en langage naturel utilisant plusieurs outils MCP pour explorer 7 400 images de 37 races d’animaux (Oxford-IIIT Pets). Développement personnel du serveur et du client MCP, de l’interface web, de l’intégration d’Ollama et de la recherche d’images similaires par CNN.', 'Fine-tuning d’un CNN pré-entraîné : 89,2 % d’accuracy top-1 et 99,0 % top-5, contre 70,9 % et 92,8 % en entraînement from scratch (5 seeds, 100 époques).'],
      en: ['Natural-language assistant using several MCP tools to explore 7,400 images of 37 pet breeds (Oxford-IIIT Pets). Personally built the MCP server and client, the web interface, the Ollama integration and CNN-based similar-image search.', 'Fine-tuned a pre-trained CNN: 89.2% top-1 and 99.0% top-5 accuracy, versus 70.9% and 92.8% when trained from scratch (5 seeds, 100 epochs).']
    },
    repo: 'https://github.com/djebbarBABOURI/Image-Search-Assistant/', demo: ''
  },

  {
    name: L('Assistant de questions-réponses sur PDF', 'PDF question-answering assistant'), image: '/projects/pdf-qa.png', tags: ['React', 'Node.js', 'LangChain', 'Ollama', 'Pinecone', 'MongoDB'], period: L('Automne 2026', 'Fall 2026'),
    context: L('Projet personnel', 'Personal project'),
    desc: {
      fr: ['Assistant permettant d’interroger des PDF en langage naturel et d’obtenir des réponses accompagnées des pages sources, utilisé pour mes cours et la lecture d’articles scientifiques.', 'Architecture RAG : indexation des extraits dans Pinecone, génération par un LLM local via Ollama, conversations stockées dans MongoDB.'],
      en: ['Assistant to query PDFs in natural language and get answers with their source pages, used for my courses and for reading research papers.', 'RAG architecture: excerpts indexed in Pinecone, answers generated by a local LLM via Ollama, conversations stored in MongoDB.']
    },
    repo: 'https://github.com/djebbarBABOURI/agentic-rag-pdf', demo: ''
  },

  {
    name: L('QuizNet — Application de quiz multijoueur', 'QuizNet — Multiplayer quiz application'),
    image: '/projects/quiznet.png',
    tags: ['C', 'Python', 'TCP/UDP', 'SQLite', 'Pthreads'],
    period: L('Automne 2026', 'Fall 2026'),
    context: L('Projet en réseaux, Master 1 Informatique', 'Computer Networks project, Master’s 1 Computer Science'),
    desc: {
      fr: [
        'Application client/serveur de quiz multijoueur permettant à plusieurs joueurs de participer à des sessions de quiz. Développement du serveur en C et du client en Python, avec une interface graphique Tkinter.',
        'Mise en œuvre de communications TCP pour les échanges client-serveur, d’un mécanisme de découverte automatique des serveurs par UDP, d’une base SQLite et de la concurrence avec Pthreads.'
      ],
      en: [
        'Client-server multiplayer quiz application allowing several players to participate in quiz sessions. Developed the server in C and the client in Python, with a Tkinter graphical interface.',
        'Implemented TCP communication for client-server exchanges, automatic server discovery through UDP, an SQLite database and concurrent client handling with Pthreads.'
      ]
    },
    repo: 'https://github.com/djebbarBABOURI/projet-reseau-m1-informatique-quiznet.git',
    demo: ''
  },
  {
    name: L('Application de gestion des dépenses personnelles', 'Personal expense tracker'),
    image: '/projects/expense-tracker.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Python', 'FastAPI', 'scikit-learn', 'Docker'],
    period: L('Automne 2026', 'Fall 2026'),
    context: L('Projet personnel', 'Personal project'),
    desc: {
      fr: [
        'Application full-stack de gestion des dépenses permettant d’enregistrer et de catégoriser les transactions, de suivre les budgets mensuels et de recevoir des alertes. Statistiques et projections calculées à l’aide de pipelines d’agrégation MongoDB.',
        'Développement d’un microservice de machine learning (Python, scikit-learn) pour suggérer automatiquement des catégories à partir des descriptions (88,6 % de précision top-3), prévoir les dépenses mensuelles et détecter les transactions inhabituelles. API sécurisée par JWT, recherche, filtres, pagination, export CSV et déploiement Docker.',
        '78 tests automatisés et intégration continue avec GitHub Actions.'
      ],
      en: [
        'Full-stack expense management application to record and categorise transactions, track monthly budgets and receive alerts. Statistics and spending projections computed using MongoDB aggregation pipelines.',
        'Built a machine-learning microservice (Python, scikit-learn) to automatically suggest expense categories from descriptions (88.6% top-3 accuracy), forecast monthly spending and detect unusual transactions. JWT authentication, server-side search, filtering, pagination, CSV export and Docker setup.',
        '78 automated tests and continuous integration with GitHub Actions.'
      ]
    },
    repo: 'https://github.com/djebbarBABOURI/projet-Rylize.git',
    demo: ''
  },
]
export const certifications = [
  {
    name: L('Développement Full Stack Web', 'Full Stack Web Development'),
    org: 'BIGNOVA, Béjaïa · 2024',
    topics: 'React.js, Node.js, Express.js, Redux, MongoDB, PostgreSQL, Git/GitHub',
    doc: '/attestations/att_formation_fullstack_web.pdf'
  },
  {
    name: L('Développeur Web Java EE', 'Java EE Web Developer'),
    org: 'Institut Amis de JAVA (ATS), Béjaïa · 2024',
    topics: 'Java EE, Servlets, JSP, JSTL, Spring Boot, Thymeleaf, MySQL, MVC',
    doc: '/attestations/att_jee.pdf'
  },
  {
    name: L('Développeur Python', 'Python Developer'),
    org: 'Institut Amis de JAVA (ATS), Béjaïa · 2024',
    topics: L(
      'Syntaxe et fondamentaux Python, programmation orientée objet, applications de bureau, Django, MySQL',
      'Python syntax and fundamentals, object-oriented programming, desktop applications, Django, MySQL'
    ),
    doc: '/attestations/att_dev_python.pdf'
  },
  {
    name: L('Administrateur Java', 'Java Administrator'),
    org: 'Béjaïa · 2024',
    topics: 'Java, programmation orientée objet (POO), gestion des classes et objets, exceptions, collections, JDBC',
    doc: '/attestations/att_java_admin.pdf'
  },
  {
    name: L('Développeur mobile', 'Mobile Developer'),
    org: 'Institut Amis de JAVA (ATS), Béjaïa · 2023',
    topics: L(
      'Développement Android, programmation Java, interfaces XML, SQLite, gestion des bases de données mobiles',
      'Android development, Java programming, XML interfaces, SQLite, mobile database management'
    ),
    doc: '/attestations/att_dev_mobile.pdf'
  },
  {
    name: L('Java Développeur', 'Java Developer'),
    org: 'Béjaïa · 2021',
    topics: 'Java, programmation orientée objet (POO), structures de données, algorithmes, gestion des exceptions',
    doc: '/attestations/att_java_dev.pdf'
  },
  {
    name: L('Créateur de sites web', 'Website Creator'),
    org: 'Institut Amis de JAVA (ATS), Béjaïa · 2021',
    topics: L(
      'HTML5, CSS3, JavaScript, Bootstrap, PHP, MySQL, intégration web, hébergement et mise en ligne',
      'HTML5, CSS3, JavaScript, Bootstrap, PHP, MySQL, web integration, hosting and deployment'
    ),
    doc: '/attestations/att_creation_site_web.pdf'
  },
  {
    name: 'Machine Learning Crash Course',
    org: 'Google for Developers',
    topics: L(
      'Régression, classification, réseaux de neurones, embeddings, modèles de langage (LLMs), ML en production, AutoML',
      'Regression, classification, neural networks, embeddings, large language models (LLMs), production ML, AutoML'
    ),
    doc: ''
  },
];

export const qualities = L(
  ['Pensée critique', 'Curiosité scientifique', 'Rigueur', 'Esprit d’équipe', 'Autonomie', 'Adaptabilité'],
  ['Critical thinking', 'Scientific curiosity', 'Rigour', 'Teamwork', 'Autonomy', 'Adaptability'])
export const languages = [L('Français (B2)', 'French (B2)'), L('Anglais (B1)', 'English (B1)')]

export const T = {
  fr: {
    role: 'Étudiant en Master 2 Informatique · Intelligence Artificielle',
    home: 'Accueil', menu: 'Menu', closeMenu: 'Fermer le menu', nav: 'Navigation principale', follow: 'Me suivre', sections: 'Sections', top: 'Haut de page', mail: 'Écrire par email', linkedinCta: 'Me contacter sur LinkedIn', rights: 'Étudiant en Master 2 Informatique (IA). Stage de fin d’études en Data, ML et IA.',
    avail: 'Disponible pour un stage de fin d’études ', unavail: 'Actuellement indisponible',
    duration: ' dès fin mars 2027',
    intro: ['Passionné par la Data Science et l’IA, je recherche un ', 'stage de fin d’études de 12 semaines minimum', ' en Data, Machine Learning ou Intelligence Artificielle.'],
    about: 'Profil', aboutText: 'J’ai commencé par le développement web full stack avant de me spécialiser en IA. Au CRIL, j’ai travaillé sur l’incertitude et la calibration des LLMs ; j’ai aussi développé des applications basées sur les LLMs (RAG, MCP, Ollama) et travaillé sur des modèles CNN.',
    skills: 'Compétences', contact: 'Me contacter', mobility: 'Localisation', region: 'Lens, France',
    cv: 'Télécharger mon CV', exp: 'Expériences', edu: 'Formation', projects: 'Projets', certs: 'Certifications', more: 'Qualités & langues', langs: 'Langues',
    all: 'Tous', code: 'Code', demo: 'Démo', copy: 'Copier l’adresse', copied: 'Adresse copiée', theme: 'Changer de thème', skip: 'Aller au contenu', langLabel: 'Langue', viewDoc: 'Voir l’attestation', downloadDoc: 'Télécharger', close: 'Fermer', openDoc: 'Ouvrir le document',
  },
  en: {
    role: 'Master’s 2 student in Computer Science · Artificial Intelligence',
    home: 'Home', menu: 'Menu', closeMenu: 'Close menu', nav: 'Main navigation', follow: 'Follow me', sections: 'Sections', top: 'Back to top', mail: 'Send an email', linkedinCta: 'Contact me on LinkedIn', rights: 'Master’s 2 student in Computer Science (AI). End-of-studies internship in Data, ML and AI.',
    avail: 'Available for an end-of-studies internship ', unavail: 'Currently unavailable',
    duration: 'from late March 2027',
    intro: ['Passionate about Data Science and AI, I’m looking for an ', 'end-of-studies internship of at least 12 weeks', ' in Data, Machine Learning or Artificial Intelligence.'],
    about: 'Profile', aboutText: 'I started in full stack web development before specialising in AI. At CRIL, I worked on uncertainty and calibration of LLMs; I also built LLM-based applications (RAG, MCP, Ollama) and worked on CNN models.',
    skills: 'Skills', contact: 'Contact me', mobility: 'Location', region: 'Lens, France',
    cv: 'Download my résumé', exp: 'Experience', edu: 'Education', projects: 'Projects', certs: 'Certifications', more: 'Strengths & languages', langs: 'Languages',
    all: 'All', code: 'Code', demo: 'Demo', copy: 'Copy address', copied: 'Address copied', theme: 'Toggle theme', skip: 'Skip to content', langLabel: 'Language', viewDoc: 'View certificate', downloadDoc: 'Download', close: 'Close', openDoc: 'Open document',
  },
}
