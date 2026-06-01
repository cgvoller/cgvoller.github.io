export const site = {
  name: 'Corey Voller',
  title: 'Corey Voller | Statistician and PhD researcher',
  description:
    'Statistician and PhD researcher working on Bayesian adaptive clinical trial designs, medical statistics, R, simulation and interactive visualisation.',
  url: 'https://cgvoller.github.io',
  email: 'cv365 [at] bath [dot] ac [dot] uk',
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
      'A matching-adjusted indirect comparison analysis comparing migraine prevention treatments using published evidence.',
      back: {
  question:
    'How does atogepant compare with rimegepant for migraine prevention when direct head-to-head evidence is unavailable?',
  method:
    'Matching-adjusted indirect comparison using published evidence.',
  contribution:
    'Applies evidence-synthesis methods to compare efficacy, quality of life, safety and tolerability outcomes across migraine prevention treatments.'
}
  },
  {
  title: 'Bayesian prior elicitation on the efficacy of medical therapies in perianal fistulizing Crohn’s disease',
  authors:
    'Noor NM, Zheng H, Cao Z, Caruso G, Voller C, Cooney R, Din S, Gordon H, Kok KB, Lindsay JO, Moran GW, Patel KV, Sebastian S, Raine T, Subramanian S, Hart AL, Robertson DS, Parkes M',
  venue: 'Journal of Crohn’s and Colitis',
  year: '2026',
  details: '20(5), jjag061',
  doi: '10.1093/ecco-jcc/jjag061',
  url: 'https://academic.oup.com/ecco-jcc/article/20/5/jjag061/8675238',
  summary:
    'A Bayesian prior elicitation study estimating the efficacy of medical therapies for perianal fistulizing Crohn’s disease.',
  tags: ['Prior elicitation', 'Crohn’s disease', 'Bayesian statistics','Clinical trials'],
  back: {
    question:
      'How can expert beliefs about treatment efficacy be formally captured for medical therapies in perianal fistulizing Crohn’s disease?',
    method:
      'Prior distributions were elicited from expert clinicians through meetings with statisticians using an Rshiny app for visualisation.',
    contribution:
      'First Bayesian prior elicitation exercise in inflammatory bowel disease. The priors can be used to enhance future trials in an area with limited or uncertain evidence. '
  }
},
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
    year: 'Semester 1 · 2025',
    context: 'Tutoring / university support',
    title: 'MA12005: Statistics & Data Science',
    summary: 'Provided support to first year students studying Python in lab sessions.'
  },
  {
    type: 'Teaching',
    year: 'Semester 1 · 2025 and 2026',
    context: 'Tutoring / university support',
    title: 'MA12002: Programming for Mathematics',
    summary: 'Provided support to first year students studying Python in lab sessions.'
  },
  {
    type: 'Conference talks',
    year: '2025',
    context: 'Conference oral presentation',
    title: 'RSC - Glasgow, Scotland',
    summary: 'Leveraging Posterior Uncertainty of Treatment Effects in Bayesian Response Adapative Group Sequential Designs.'
  },
  {
    type: 'Conference talks',
    year: 'Upcoming · 2026',
    context: 'Conference oral presentation',
    title: 'International Society for Clinical Biostatistics - Freiburg, Germany',
    summary: 'Optimising Response-adaptive Randomisation in Group Sequential Trials: a Bayesian theory approach.'
  },
  ,
  {
    type: 'Workshops / demos',
    year: '2025',
    context: 'Oral presentation',
    title: 'Workshop on Improving The Efficiency of Clinical Trials - from Methods to Practice - Bath, UK',
    summary: 'Gave a short (lightning) talk on research of response-adaptive randomisation using slides animated with Manim.',
    slides: 'https://cgvoller.github.io/2025-05-27-slides/'
  },
  {
    type: 'Workshops / demos',
    year: '2024',
    context: 'Interactive teaching',
    title: 'Prior elicitation on the efficacy of treatments in Crohns disease',
    summary: 'Part of a group of statisticians interviewing clinicians to elicite prior distributions on a range of treatments.'
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
    title: 'PhD Candidate',
    organisation: 'University of Bath',
    type: 'Research / education',
    description:
      'Researching Bayesian adaptive clinical trial designs.',
    bullets: [
      'First project focused on response-adaptive randomisation within group sequential designs',
      'Developing statistical methodology and evaluating adaptive clinical trial designs.',
      'Using simulations to study operating characteristics and design behaviour.'
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
      'Prepare clear written reports summarising application, risks and recommendations.'
    ],
    tags: ['Statistics', 'Professional accreditation', 'Reviewer']
  },
  {
    date: 'Apr 2023 – Aug 2024',
    title: 'Trial Statistician',
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
      '',
    bullets: [
      'Focused on medical and applied statistics',
      'Developed programming knowledge using R and WinBUGS.',
      'Research project: Alternative Methods of Data Fusion in Metabolomic Cancer Diagnostics'
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
    role: 'Trial Statistician',
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
    id: 'bayesian-methods',
    label: 'Bayesian methods',
    type: 'framework',
    theme: 'Framework',
    x: 18,
    y: 48,
    summary:
      'A statistical framework for incorporating prior information, updating evidence as data accumulate and supporting decision-making under uncertainty.',
    links: ['Prior information', 'Posterior updating', 'Decision-making'],
    connections: ['phd']
  },
  {
    id: 'adaptive-designs',
    label: 'Adaptive designs',
    type: 'core',
    theme: 'Core',
    bridgeFor: ['Adaptive feature'],
    x: 50,
    y: 66,
    summary:
      'A clinical trial is considered an adaptive design if, during the trials course, modifications can be made in accordance with pre-specified rules.',
    links: ['Interim analyses', 'Decision rules'],
    connections: ['phd']
  },
  {
    id: 'umbrella-trials',
    label: 'Umbrella trials',
    type: 'structure',
    theme: 'Trial structure',
    x: 35,
    y: 22,
    summary:
      'A master-protocol trial structure evaluating multiple treatments within a single disease setting, often across subgroups. Umbrella trials can include adaptive features. They can offer reduced sample size requirements through shared control and can answer several treatment-related questions in a single trial.',
    links: ['Master protocol', 'Subgroups', 'Trial architecture'],
    connections: ['phd']
  },
  {
    id: 'mams',
    label: 'MAMS',
    type: 'structure',
    theme: 'Trial structure',
    x: 65,
    y: 22,
    summary:
      'A multi-arm, multi-stage trial structure that evaluates several treatments at the same time. Using planned interim stages they have the ability to add or drop treatments. They have several advantages such as reduced overall sample size and reduced cost (no need to set up a new trial for each new treatment).',
    links: ['Multi-arm', 'Multi-stage', 'Trial architecture'],
    connections: ['phd']
  },
  {
    id: 'group-sequential-designs',
    label: 'Group sequential designs',
    type: 'feature',
    theme: 'Adaptive feature',
    x: 80,
    y: 48,
    summary:
      'Designs using planned interim analyses to allow for early stopping of the trial, typically for efficacy or futility ',
    links: ['Interim monitoring', 'Stopping boundaries', 'Efficiency'],
    connections: ['adaptive-designs']
  },
  {
    id: 'sample-size-re-estimation',
    label: 'Sample size re-estimation',
    type: 'feature',
    theme: 'Adaptive feature',
    x: 76,
    y: 78,
    summary:
      'An adaptive approach where the required sample size is reassessed at an interim analysis, often to address uncertainty in design assumptions.',
    links: ['Interim data', 'Re-estimation'],
    connections: ['adaptive-designs']
  },
  {
    id: 'response-adaptive-randomisation',
    label: 'Response-adaptive randomisation',
    type: 'feature',
    theme: 'Adaptive feature',
    x: 27,
    y: 85,
    summary:
      'An adaptive feature where allocation probabilities change as response data accumulate. In my work, this has been explored using a Bayesian framework within group-sequential designs.',
    links: ['Allocation', 'Bayesian implementation', 'Accumulating data'],
    connections: ['adaptive-designs']
  }
];