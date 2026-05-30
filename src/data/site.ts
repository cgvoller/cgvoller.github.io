export const site = {
  name: 'Corey Voller',
  title: 'Corey Voller | Statistician and PhD researcher',
  description:
    'Statistician and PhD researcher working on Bayesian adaptive clinical trial designs, medical statistics, R, simulation and interactive visualisation.',
  url: 'https://cgvoller.github.io',
  email: 'coreyvoller@hotmail.co.uk',
  cv: '/CV.pdf',
  links: {
    github: 'https://github.com/cgvoller',
    linkedin: 'https://www.linkedin.com/in/corey-v-027bb0198',
    scholar: 'https://scholar.google.co.uk/citations?user=l7FWR2AAAAAJ&hl=en'
  }
};

export const posts = [
  {
    title: 'Bayesian Response-Adaptive Randomisation with Group Sequential Designs',
    date: 'Jun 24, 2025',
    tags: ['Bayesian methods', 'Clinical trials', 'R'],
    excerpt:
      'Notes on Bayesian response-adaptive randomisation and group sequential ideas for clinical trial design.',
    href: 'https://cgvoller.github.io/posts/bayesian-response-adaptive-randomisation-with-group-sequential-designs/'
  },
  {
    title: 'Collaborative Working',
    date: 'Mar 18, 2024',
    tags: ['R', 'Working practices'],
    excerpt:
      'A short review of tools and practices for making collaborative statistical work easier to manage.',
    href: 'https://cgvoller.github.io/posts/collaborative-working/'
  },
  {
    title: 'Getting to grips with Hospital Episode Statistics',
    date: 'Mar 12, 2024',
    tags: ['R', 'Health data'],
    excerpt:
      'An introduction to Hospital Episode Statistics and the practical issues that come with health data.',
    href: 'https://cgvoller.github.io/posts/getting-to-grips-with-hospital-episode-statistics/'
  },
  {
    title: 'Version Control with Git in R',
    date: 'Feb 28, 2024',
    tags: ['Git', 'R', 'Version control'],
    excerpt:
      'A practical introduction to using Git and version control within RStudio-based statistical workflows.',
    href: 'https://cgvoller.github.io/posts/version-control-with-git-in-r/'
  },
  {
    title: 'More than just a pipe dream',
    date: 'Feb 11, 2024',
    tags: ['R', 'Code'],
    excerpt:
      'Notes on R pipes, tidy workflows and why small syntax choices can change how analysis code feels.',
    href: 'https://cgvoller.github.io/posts/more-than-just-a-pipe-dream/'
  },
  {
    title: 'More Efficient Working',
    date: 'Jan 28, 2024',
    tags: ['R', 'Code', 'Working practices'],
    excerpt:
      'Ideas for cutting down repetitive work, standardising scripts and building better everyday habits.',
    href: 'https://cgvoller.github.io/posts/more-efficient-working/'
  }
];

export const publications = [
  {
    title:
      'Comparative efficacy, quality of life, safety, and tolerability of atogepant and rimegepant in migraine prevention: A matching-adjusted indirect comparison analysis',
    venue: 'Cephalalgia',
    year: '2024',
    details: '44(2)',
    doi: '10.1177/03331024241235156',
    tags: ['MAIC', 'Indirect comparison', 'HEOR', 'Migraine'],
    summary:
      'A matching-adjusted indirect comparison analysis comparing migraine prevention treatments using published evidence.'
  }
];

export const teaching = [
  {
    title: 'Mathematics and statistics tutoring',
    level: 'GCSE to postgraduate',
    summary:
      'Designed and delivered mathematics and statistics lessons for students with varied backgrounds, including exam support and study strategies.'
  },
  {
    title: 'R and reproducible analysis',
    level: 'Practical workflows',
    summary:
      'Teaching and notes around R, Git, project structure, code clarity and repeatable statistical analysis.'
  },
  {
    title: 'Clinical trial methods',
    level: 'Research-focused',
    summary:
      'Explaining adaptive designs, randomisation, simulation and evidence synthesis in a way that connects methods to practical trial decisions.'
  }
];


export const teachingArchive = [
  {
    type: 'Teaching',
    year: '2024–present',
    context: 'Tutoring / university support',
    title: 'Mathematics and statistics teaching',
    summary: 'One-to-one and small-group support from GCSE mathematics through to postgraduate statistics.'
  },
  {
    type: 'Teaching',
    year: '2023–present',
    context: 'R workflows',
    title: 'R, Git and reproducible analysis',
    summary: 'Practical teaching around project structure, scripts, functions, version control and reproducible outputs.'
  },
  {
    type: 'Teaching',
    year: '2024–present',
    context: 'Clinical trials',
    title: 'Adaptive clinical trial methods',
    summary: 'Explaining adaptive randomisation, interim monitoring, simulation and operating characteristics.'
  },
  {
    type: 'Conference talks',
    year: 'Add year',
    context: 'Conference / seminar',
    title: 'Add conference talk title',
    summary: 'Use this entry for a conference presentation, research seminar or invited talk.'
  },
  {
    type: 'Conference talks',
    year: 'Add year',
    context: 'Poster / oral presentation',
    title: 'Add poster or oral presentation',
    summary: 'This lane can grow without redesigning the page; just add entries to the data file.'
  },
  {
    type: 'Workshops / demos',
    year: 'Future',
    context: 'Interactive teaching',
    title: 'Bayesian updating visual demo',
    summary: 'Prior → likelihood → posterior as an animated explanation for teaching.'
  },
  {
    type: 'Workshops / demos',
    year: 'Future',
    context: 'Simulation',
    title: 'Adaptive randomisation simulation',
    summary: 'A small visual demo of allocation probabilities changing as trial data accumulate.'
  }
];


export const experienceTimeline = [
  {
    date: 'Mar 2026 – Present',
    title: 'Founder',
    organisation: 'Legion Software',
    type: 'Company / software',
    description:
      'Building automated reporting software for healthcare and research workflows, with an initial client using the software to automate blood reporting.',
    bullets: [
      'C# WPF desktop application for automated report generation.',
      'Designing reporting workflows around real client blood-reporting requirements.',
      'Focusing on repeatability, reduced manual effort and clearer reporting outputs.'
    ],
    tags: ['C#', 'WPF', 'Automation', 'Reporting']
  },
  {
    date: 'Sep 2024 – Present',
    title: 'PhD Researcher',
    organisation: 'University of Bath',
    type: 'Research / education',
    description:
      'Researching Bayesian adaptive clinical trial designs, with a focus on simulation, decision rules and visual communication of statistical methods.',
    bullets: [
      'Developing and evaluating adaptive clinical trial designs.',
      'Using simulation to study operating characteristics and design behaviour.',
      'Building reproducible R workflows and visualisations for communicating methods.'
    ],
    tags: ['Bayesian statistics', 'Clinical trials', 'Adaptive designs','R','Simulation']
  },
  {
    date: 'Jul 2024 – Present',
    title: 'Accreditation Assessor',
    organisation: 'Royal Statistical Society',
    type: 'Volunteer',
    description:
      'Supporting accreditation assessments for the RSS which accredits honours and masters degrees in statistics and related disciplines, awarding the status of RSS Accredited University.',
    bullets: [
      'Reviewing evidence  to ensure that teaching, learning and assessment within a programme/course/module is of high quality.',
      'Prepared clear written reports summarising application, risks and recommendations.'
    ],
    tags: ['Statistics', 'Professional accreditation', 'Reviewer']
  },
  {
    date: 'Apr 2023 – Aug 2024',
    title: 'Statistician',
    organisation: 'Cambridge Clinical Trials Unit, University of Cambridge',
    type: 'Clinical trials',
    description:
      'Worked across pragmatic and adaptive clinical trials, supporting study design, randomisation, analysis and reporting.',
    bullets: [
      'Worked in multidisciplinary teams comprising of clinicians, trial coordinators, data programmers and data managers on a range of clinical trials from phase II to phase IV.',
      'Responsible for supporting the trial design including sample size estimations, methodology, randomisation and analysis methods, analysis of trials and writing statistical reports.',
      'Applied knowledge of R, SQL and git to create statistical reports and contributed to standardising work practices.'
    ],
    tags: ['Clinical trials', 'Randomisation', 'Statistical Analysis plans', 'R']
  },
  {
    date: 'Sep 2021 – Apr 2023',
    title: 'Statistician Level II',
    organisation: 'Lumanity',
    type: 'HEOR / evidence synthesis',
    description:
      'Worked on health economics and outcomes research projects, including indirect comparisons, modelling and statistical reporting.',
    bullets: [
      'Provided statistical analyses to support health technology assessment to leading pharmaceutical companies.',
      'Investigated and applied standard \& novel statistical methods to a wide range of projects involving indirect treatment comparisons, population adjusted indirect comparisons (MAIC/STC/Meta-Regression), survival analysis, utility analysis and PLD analysis, presenting the results to senior clients.',
      'Conducted feasibility assessments, developed statistical analysis plans, manuscripts for publication, reports, slide decks and R package.'
    ],
    tags: ['HEOR', 'Evidence synthesis', 'MAIC', 'Survival analysis']
  },
  {
    date: '2020 – 2021',
    title: 'MSc Statistics (Medical Statistics)',
    organisation: 'University College London',
    type: 'Education',
    description:
      'Postgraduate training in medical statistics, statistical computing, applied modelling and Bayesian methods.',
    bullets: [
      'Focused on medical statistics and applied statistical modelling.',
      'Developed statistical programming and research methods skills.',
      'Built a foundation for later work in clinical trials and Bayesian design.'
    ],
    tags: ['Medical statistics', 'Bayesian methods', 'Statistical computing']
  }
];

export const timeline = [
  {
    role: 'PhD in Statistics',
    organisation: 'University of Bath',
    date: '2024–present',
    description:
      'Research area: efficient design and analysis of small population clinical trials with external data.'
  },
  {
    role: 'Accreditation Assessor',
    organisation: 'Royal Statistical Society',
    date: '2024–present',
    description: 'Supporting statistical accreditation assessment work.'
  },
  {
    role: 'Statistician',
    organisation: 'Cambridge Clinical Trials Unit, University of Cambridge',
    date: '2023–2024',
    description:
      'Worked across pragmatic and adaptive clinical trials, supporting design, sample size, randomisation, analysis and reporting.'
  },
  {
    role: 'Statistician Level II',
    organisation: 'Lumanity (HEOR)',
    date: '2021–2023',
    description:
      'Supported health technology assessment work, including indirect comparisons, survival analysis and statistical reporting.'
  },
  {
    role: 'MSc Statistics (Medical Statistics)',
    organisation: 'University College London',
    date: '2020–2021',
    description:
      'Focused on medical statistics, Bayesian methods, statistical computing and applied modelling.'
  },
  {
    role: 'BSc Mathematics',
    organisation: 'Keele University',
    date: '2016–2019',
    description: 'First-class degree with medical statistics, modelling, probability and computational mathematics.'
  }
];

export const networkNodes = [
  {
    id: 'adaptive-trials',
    label: 'Adaptive trials',
    type: 'research',
    x: 50,
    y: 28,
    summary:
      'Designs that allow trial features to change as accumulating data are observed, while preserving statistical rigour.',
    links: ['Bayesian methods', 'Simulation', 'Small populations']
  },
  {
    id: 'bayesian',
    label: 'Bayesian methods',
    type: 'method',
    x: 25,
    y: 47,
    summary:
      'Prior information, posterior updating and decision rules for research settings where uncertainty matters.',
    links: ['Adaptive trials', 'External data', 'Visual explanations']
  },
  {
    id: 'simulation',
    label: 'Simulation',
    type: 'tool',
    x: 70,
    y: 48,
    summary:
      'R-based simulation workflows for exploring operating characteristics, sensitivity and trial behaviour.',
    links: ['R', 'Clinical trials', 'Visualisation']
  },
  {
    id: 'external-data',
    label: 'External data',
    type: 'research',
    x: 42,
    y: 67,
    summary:
      'Methods for borrowing information and understanding how external evidence should influence trial analysis.',
    links: ['Bayesian methods', 'Small populations', 'Evidence synthesis']
  },
  {
    id: 'r',
    label: 'R / Quarto',
    type: 'tool',
    x: 79,
    y: 72,
    summary:
      'Statistical programming, reproducible documents, visualisation and practical tooling for research work.',
    links: ['Simulation', 'Posts', 'Teaching']
  },
  {
    id: 'teaching',
    label: 'Teaching',
    type: 'translation',
    x: 19,
    y: 76,
    summary:
      'Making statistical and mathematical ideas more understandable through examples, visuals and structured explanation.',
    links: ['Visual explanations', 'R', 'Clinical trial methods']
  }
];
