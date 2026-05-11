import {
  FaCode,
  FaGlobe,
  FaChartBar,
  FaDatabase,
  FaTools,
  FaShieldAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaSearch,
  FaBook,
  FaGlobeAfrica,
  FaGlobeEurope
} from 'react-icons/fa';

export const TYPING_WORDS = [
  'a problem solver',
  'a web developer',
  'a Software Engineer',
  'a data enthusiast',
  'a work in progress',
];

export const SKILLS = [
  {
    icon: <FaCode />,
    color: 'rgba(200,184,255,0.12)',
    title: 'Programming Languages',
    tags: ['Python', 'JavaScript', 'Java', 'C']
  },
  {
    icon: <FaGlobe />,
    color: 'rgba(110,255,200,0.10)',
    title: 'Web Technologies',
    tags: ['React.js', 'Node.js', 'HTML', 'CSS', 'Tailwind CSS', 'Apache']
  },
  {
    icon: <FaChartBar />,
    color: 'rgba(255,159,110,0.10)',
    title: 'Data Analytics',
    tags: ['Data Cleaning', 'EDA', 'Visualization', 'SPSS', 'Jupyter']
  },
  {
    icon: <FaDatabase />,
    color: 'rgba(200,184,255,0.12)',
    title: 'Databases',
    tags: ['MySQL', 'SQL', 'SQLite', 'DBMS Concepts']
  },
  {
    icon: <FaTools />,
    color: 'rgba(110,255,200,0.10)',
    title: 'DevOps & Systems',
    tags: ['Docker', 'Linux / Ubuntu', 'Git', 'GitHub', 'dotenv']
  },
  {
    icon: <FaShieldAlt />,
    color: 'rgba(255,159,110,0.10)',
    title: 'Security & Auth',
    tags: ['JWT Authentication', 'bcryptjs', 'Express.js', 'REST API Design']
  },
];

export const PROJECTS = [
  {
    year: '2026',
    title: 'Mini CRM — Client Lead Management System',
    description:
      'A full-stack CRM application built with React, Node.js, Express and MySQL. Features JWT authentication, a 3-stage sales pipeline, follow-up scheduling with overdue detection, real-time search and filtering, analytics dashboard with conversion tracking, and a dark/light mode UI with Lucide React icons.',
    tech: ['React.js', 'Node.js', 'Express', 'MySQL', 'JWT', 'Tailwind CSS'],
    gradient: 'linear-gradient(90deg,#c8b8ff,#ff9f6e)',
    github: 'https://github.com/Noluthando-2018/FUTURE_FS_02',
    live: null,
  },
  {
    year: '2026',
    title: 'Kota King — Township Food Ordering Website',
    description:
      'A responsive website for a kasi food business in Ga-Thoka, Polokwane. Features a full menu with customisable kota builder, fatcake and sides ordering, drink selection, and a WhatsApp-integrated order system. Built to serve a real local business.',
    tech: ['HTML', 'CSS', 'JavaScript', 'WhatsApp API'],
    gradient: 'linear-gradient(90deg,#ff9f6e,#6effc8)',
    github: 'https://github.com/Noluthando-2018/FUTURE_FS_03',
    live: 'https://noluthando-2018.github.io/FUTURE_FS_03/',
  },
  {
    year: '2025',
    title: 'Telephone Number Validation System',
    description:
      'Built to understand deployment end-to-end. Hosted with Apache and containerised using Docker for consistent cross-environment runs.',
    tech: ['HTML/CSS/JS', 'Apache', 'Docker'],
    gradient: 'linear-gradient(90deg,#c8b8ff,#6effc8)',
    github: 'https://github.com/Noluthando-2018',
    live: null,
  },
  {
    year: '2025',
    title: 'Autonomous House Cleaning Vacuum',
    description:
      'ROS-based robotics system on Ubuntu Linux — navigation, communication and coordination between all system components working together.',
    tech: ['ROS', 'Ubuntu Linux', 'Python'],
    gradient: 'linear-gradient(90deg,#ff9f6e,#c8b8ff)',
    github: 'https://github.com/Noluthando-2018',
    live: null,
  },
  {
    year: '2025',
    title: 'Student Performance Data Analysis',
    description:
      "Analysed a real student performance dataset for my Data Science course — data cleaning, EDA and visualisations to find patterns in academic outcomes.",
    tech: ['Python', 'Jupyter', 'EDA', 'Matplotlib'],
    gradient: 'linear-gradient(90deg,#6effc8,#ff9f6e)',
    github: 'https://github.com/Noluthando-2018',
    live: null,
  },
];

export const DETAILS = [
  {
    icon: <FaGraduationCap />,
    label: 'Education',
    value: 'BSc Software Engineering',
    sub: 'Konya Technical University · Expected 2028'
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    value: 'Konya, Türkiye',
    sub: 'Originally from South Africa'
  },
  {
    icon: <FaSearch />,
    label: 'Looking For',
    value: 'Software Engineering Internship',
    sub: 'A team that builds things that matter'
  },
  {
    icon: <FaBook />,
    label: 'Coursework',
    value: 'Data Structures · OOP · Data Science · DBMS · OS · Web Dev · Networks',
    sub: null
  },
];

export const LANGUAGES = [
  {
    icon: <FaGlobeAfrica />,
    name: 'English',
    level: 'Fluent',
    color: 'var(--accent3)'
  },
  {
    icon: <FaGlobeEurope />,
    name: 'Turkish',
    level: 'Fluent',
    color: 'var(--accent)'
  },
  {
    icon: <FaGlobeAfrica />,
    name: 'Sepedi / Tsonga',
    level: 'Native',
    color: 'var(--accent2)'
  },
];

export const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Noluthando-2018',
    icon: <FaGithub />
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/noluthando-sekhula',
    icon: <FaLinkedin />
  },
  {
    label: 'Email',
    href: 'mailto:noluthandosekhula63@gmail.com',
    icon: <FaEnvelope />
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/905056540542',
    icon: <FaWhatsapp />
  },
];
