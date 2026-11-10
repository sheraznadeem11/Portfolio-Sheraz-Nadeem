export const navigation = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Products', '#products'],
  ['Process', '#process'],
  ['Team', '#team'],
  ['Contact', '#contact'],
];

export const statistics = [
  ['10+', 'Years of excellence'],
  ['200+', 'Projects delivered'],
  ['170+', 'Clients worldwide'],
  ['200+', 'Startups shaped'],
];

export const features = [
  {
    title: 'Social Empowerment',
    description:
      'Providing free technical education to youth and empowering individuals with practical skill-building opportunities.',
  },
  {
    title: 'Tech Innovation',
    description:
      'Building modern, AI-powered and future-ready solutions that help businesses scale ethically and efficiently.',
  },
  {
    title: 'Leadership Growth',
    description:
      'Mentoring professionals and founders with career acceleration, market readiness, and real-world insight.',
  },
];

export const services = [
  {
    title: 'AI Solutions Architecture',
    description:
      'Designing scalable AI systems tailored to real business challenges and growth strategy.',
  },
  {
    title: 'AI-Driven Strategy',
    description:
      'Transforming data, automation, and innovation into measurable competitive advantage.',
  },
  {
    title: 'Blockchain Integration',
    description:
      'Creating secure digital experiences with modern infrastructure and trusted systems.',
  },
  {
    title: 'Mentorship & Growth',
    description:
      'Helping founders and teams unlock better decisions, skills, and business momentum.',
  },
];

export const processSteps = [
  ['Data Analysis', 'We analyze data to uncover patterns that drive better decisions.'],
  ['Solution Mapping', 'User needs are translated into practical, high-value solutions.'],
  ['Model Creation', 'AI models are designed using real-world insights and business context.'],
  [
    'Deployment & Integration',
    'Systems are integrated smoothly to deliver immediate operational value.',
  ],
];

export const products = [
  {
    title: 'AI Legal Contract Analyzer',
    description: 'Automated legal document intelligence for fast, reliable review.',
    theme: 'from-indigo-500 to-sky-300',
  },
  {
    title: 'Jinnalyst',
    description: 'Analytics and insight systems powered by smart automation.',
    theme: 'from-slate-800 to-indigo-500',
  },
  {
    title: 'AI Powered HIMS',
    description: 'Healthcare information management through intelligent workflows.',
    theme: 'from-teal-500 to-sky-200',
  },
  {
    title: 'Sheraz AI Assistant',
    description: 'Demo project: AI guidance for trends, strategy, and career development.',
    theme: 'from-violet-500 to-emerald-300',
  },
];

const demoTeamContactUrls = {
  linkedin: 'https://www.linkedin.com/',
  whatsapp: 'https://wa.me/',
  website: 'https://example.com/',
  facebook: 'https://www.facebook.com/',
};

function createDemoTeamContacts(name) {
  return [
    {
      type: 'linkedin',
      href: demoTeamContactUrls.linkedin,
      label: `${name} on LinkedIn`,
      isDemo: true,
    },
    {
      type: 'whatsapp',
      href: demoTeamContactUrls.whatsapp,
      label: `WhatsApp ${name}`,
      isDemo: true,
    },
    {
      type: 'website',
      href: demoTeamContactUrls.website,
      label: `${name}'s website`,
      isDemo: true,
    },
    {
      type: 'facebook',
      href: demoTeamContactUrls.facebook,
      label: `${name} on Facebook`,
      isDemo: true,
    },
  ];
}

export const team = [
  {
    name: 'Dr. Sheraz Naseer',
    role: 'Strategy Advisor',
    initials: 'SN',
    contacts: createDemoTeamContacts('Dr. Sheraz Naseer'),
  },
  {
    name: 'Dr. Tazeen Rizvi',
    role: 'Research & Innovation',
    initials: 'TR',
    contacts: createDemoTeamContacts('Dr. Tazeen Rizvi'),
  },
  {
    name: 'Sheraz Nadeem',
    role: 'Founder & Visionary',
    initials: 'SN',
    image: '/assets/sheraz-nadeem.png',
    contacts: [
      {
        type: 'linkedin',
        href: 'https://www.linkedin.com/in/sheraz-nadeem-aa89762a5/',
        label: 'Sheraz Nadeem on LinkedIn',
        isDemo: false,
      },
      ...createDemoTeamContacts('Sheraz Nadeem').filter(
        ({ type }) => type !== 'linkedin',
      ),
    ],
  },
  {
    name: 'Prof Dr. Javed Iqbal',
    role: 'Academic Mentor',
    initials: 'JI',
    contacts: createDemoTeamContacts('Prof Dr. Javed Iqbal'),
  },
];

export const articles = [
  'The Real ROI of Artificial Intelligence – Beyond the Hype',
  'Deep Learning Decoded – How Neural Networks Are Changing the Game',
  'Machine Learning Isn’t Just for Big Tech — Here’s Where It Wins',
];

export const testimonials = [
  [
    '“This is a stellar team! I have assigned new contracts to them for several years. A joy to work with. Smart people. Good people. Honest. Hard working. Excellent results.”',
    'President of Treaty Health',
  ],
  [
    '“Their strategic perspective and technical execution helped us move from idea to implementation with confidence and clarity.”',
    'CEO of Drive',
  ],
];

export const footerNavigation = [
  ['About', '#about'],
  ['Consulting', '#services'],
  ['My Team', '#team'],
  ['Contact', '#contact'],
];

export const articleThemes = [
  'from-indigo-500/80 to-sky-300/70',
  'from-slate-900 to-indigo-500/70',
  'from-teal-700 to-sky-200',
];
