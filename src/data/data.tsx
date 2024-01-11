import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import DiscordIcon from '../components/Icon/DiscordIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import SteamIcon from '../components/Icon/SteamIcon';
// import heroImage from '../images/header-background.webp';
import heroImage from '../images/cyberpunk.webp';
import porfolioImage4 from '../images/portfolio/annies.png';
import porfolioImage12 from '../images/portfolio/bidara-full.png';
import porfolioImage9 from '../images/portfolio/cherry-blossoms.png';
import porfolioImage13 from '../images/portfolio/easydiver-2.0.jpg';
import porfolioImage6 from '../images/portfolio/gt.png';
import porfolioImage2 from '../images/portfolio/hand-gesture.png';
import porfolioImage1 from '../images/portfolio/kittychat.png';
import porfolioImage3 from '../images/portfolio/mariokart.png';
import porfolioImage5 from '../images/portfolio/png.png';
import porfolioImage11 from '../images/portfolio/portfolio.png';
import porfolioImage8 from '../images/portfolio/quozlett.png';
import porfolioImage10 from '../images/portfolio/watts-up.png';
import porfolioImage7 from '../images/portfolio/zoo.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/the_city.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Allison Tee',
  description: "My personal website.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hello, I'm Allison.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a student at <strong className="text-stone-100">Stanford University</strong> studying math, music, and computer science. My primary experiences are in AI/ML and bio-inspired design.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, I like playing the <strong className="text-stone-100">piano</strong>,{' '}
         <strong className="text-stone-100">video gaming</strong>, and <strong className="text-stone-100">biking</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1fFWTMZ3Cqhukkvv6QoQZV7qoNbdB3Vbz/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hello! I'm Allison, a junior double majoring in math and music with a coterm MS in computer science at Stanford University. Some fields I’m interested in are neuroscience, biomedical engineering, and machine learning.
 I like "learning for learning's sake". I’m also a FLI student originally from the Midwest, so I would say I’ve had a pretty unique college experience. `,
  aboutItems: [
    {label: 'Location', text: 'San Francisco Bay Area, CA', Icon: MapIcon},
//     {label: 'Age', text: '29', Icon: CalendarIcon},
//     {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    {label: 'Study', text: 'Stanford University', Icon: AcademicCapIcon},
        {label: 'Currently doing', text: 'Collaborating on the NASA PeTaL project, Incoming SDE Intern at Amazon', Icon: BuildingOffice2Icon},
    {label: 'Interests', text: 'Piano, Tea and Coffee, Martial Arts, Video Games', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
//   {
//     name: 'Mobile development',
//     skills: [
//       {
//         name: 'React Native',
//         level: 9,
//       },
//       {
//         name: 'Flutter',
//         level: 4,
//       },
//       {
//         name: 'Swift',
//         level: 3,
//       },
//     ],
//  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'KittyChat',
    description: 'Web app to make language conversation practice more accessible, featuring ChatGPT-powered talking cat baristas.',
    url: 'https://devpost.com/software/kittychat-catgpt-for-language-learning',
    image: porfolioImage1,
  },
  {
    title: 'ML Palm Reader',
    description: 'Built a bidirectional RNN + Transformer model to classify over a dozen hand gestures. Over 90% accuracy!',
    url: 'https://github.com/WorldsEndDunce/Palm-Reader/tree/master',
    image: porfolioImage2,
  },
  {
    title: 'Mario Kart AI',
    description: 'Convolutional neural network (CNN) trained to race around Luigi Circuit in Mario Kart Wii.',
    url: 'https://github.com/WorldsEndDunce/MKWii-CNN',
    image: porfolioImage3,
  },
  {
    title: 'Annie\'s Kitchen Website',
    description: 'Webpage for Annie\'s Kitchen, a homemade food business specializing in Malaysian-Chinese cuisine.',
    url: 'https://annies-kitchen.github.io/',
    image: porfolioImage4,
  },
   {
    title: 'BIDARA',
    description: 'A GPT-4 based application that I collaborated on for my internship at NASA Glenn.',
    url: 'https://codepen.io/worldsenddunce/full/abPGpzd',
    image: porfolioImage12,
  },
  {
    title: 'Neural Ensemble for 3D Reconstruction from 2D Images',
    description: 'Developed a ML ensemble model to build 3D reconstructions of landmarks and other scenes from datasets of images.',
    url: 'https://drive.google.com/file/d/18yJ009XMczWwbtOIcBSr6Fe_SHPfNoCO/view?usp=sharing',
    image: porfolioImage6,
  },
  {
    title: 'Zoo of Distributions',
    description: 'A generative art website that uses interactive demos to teach basic probability distributions. Stanford Probability Challenge Winner.',
    url: 'https://zoo-of-distributions.github.io/',
    image: porfolioImage7,
  },
  {
    title: 'SimpleSAILR [WIP]',
    description: 'Currently a visiting scholar at the Blue Marble Space Institute of Science (BMSIS) developing this biocomputational tool for pre-processing and analyzing deep sequencing data.',
    url: 'https://github.com/WorldsEndDunce/SimpleSAILR',
    image: porfolioImage13,
  },
  {
    title: 'Quozlett Lite',
    description: 'Stylishly animated flashcard app with multiple choice options.',
    url: 'https://github.com/WorldsEndDunce/Quozlett-Lite',
    image: porfolioImage8,
  },
  {
    title: 'DALLE or Dali?',
    description: 'Short quiz to see if you can tell the difference between AI and human-made art.',
    url: 'https://dalle-or-dali.github.io/',
    image: porfolioImage9,
  },
  {
    title: 'Do Neural Networks Dream of an Efficient PNG Search Algorithm?',
    description: 'Application of the Neyman-Scott point process model to identify memory-storing polychronous neuronal groups (PNGs).',
    url: 'https://github.com/WorldsEndDunce/PP-Almost-Seq',
    image: porfolioImage5,
  },
  {
    title: 'This website',
    description: 'My personal website, complete with resume and a portfolio gallery.',
    url: 'https://www.allisonxtee.com',
    image: porfolioImage11,
  },
   {
    title: 'Watt\'s Up? (power lines)',
    description: 'Led the Wichita Collegiate robotics team for the 2019 season. The task was to design and build a robot to succeed in repairing power lines and cleaning up debris on a game field simulating a post-natural disaster situation.',
    url: 'https://docs.google.com/document/d/1xM8CXxxQqMyq4cRdJgjhIZt7fiYqd4VER3ynmn-LDfY/edit?usp=sharing',
    image: porfolioImage10,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sep 2021 - June 2025',
    location: 'Stanford, CA',
    title:  'Stanford University',
    content: (
      <>
        <p>
          Major in Math and Music (BAS) and coterm MS in Computer Science; <b>3.92 GPA</b>
        </p>
        <p>
          <b>Activities:</b> Stanford Summer Engineering Academy (SSEA), Stanford Piano Society, CS106A/B Course Helper, TreeHacks, 
          Stanford University Mathematical Organization (SUMO), Association for Computing Machinery (ACM), CodePath, Stanford Taekwondo.
        </p>
      </>
    ),},
  {
    date: 'Fall 2017 - Spring 2021',
    location: 'Wichita, KS',
    title: 'Wichita Collegiate School',
    content: <p>Valedictorian; 99.35/100 UW GPA</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Aug 2023 - Dec 2023',
    location: 'Software and Machine Learning Engineer Intern',
    title: 'NASA',
    content: (
      <p>Developed a GPT-4-based application using Retrieval-Augmented Generation (RAG) and LlamaIndex with <b>Python</b> to improve generative AI performance. Developed websites with <b>HTML/CSS/JS</b> to demo the chatbot.
        Volunteered at outreach events, giving public demonstrations of the Graphics and Visualization (GVIS) lab technologies and explaining NASA's latest research projects, such as the development of more efficient and quieter supersonic flight.</p>
    ),
  },
  {
    date: 'May 2023 - Aug 2023',
    location: 'L’SPACE Project Manager',
    title: '',
    content: (
      <p>Project manager of a student team that designed a mission to explore the dwarf planet Ceres for L'SPACE MCA.
The team's research and prototyping efforts culminated in a 180-page Preliminary Design Review (PDR) and final presentation to a review board.
      </p>
    ),
  },
  {
    date: 'June 2023 - Present',
    location: 'Research Associate',
    title: 'Blue Marble Space Institute of Science (BMSIS)',
    content: (
      <p>Developed a program called EasyDIVER 2.0 that helps scientists analyze data consisting of millions of DNA/RNA sequences with <b>Python</b> and <b>Bash</b> at the BMSIS YSP. Presented a demo video at BlueSciCon.
     Will continue working on the program as a visiting scholar and writing a scientific paper.
      </p>
    ),
  },
  {
    date: 'March 2022 - March 2023',
    location: 'CS Research Intern',
    title: 'Stanford Brains in Silicon Lab',
    content: (
      <p>
       Worked in a team to use machine learning methods via <b>Python</b> libraries like PyTorch to analyze neural data.
        Primary developer for project where I ran <b>Python</b> and <b>Julia</b> simulations of neural networks and wrote an
    improved algorithm to find sequences (representing memories) in the brain.
    Presented my findings at the CURIS poster session, one of the largest undergraduate research events at Stanford.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
//     {
//       name: 'Dishwison',
//       text: 'Allison is the best boss ever!',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
//     },
    {
      name: 'J-Anne Carlson (Chief Scientist of the same team in the NASA L\'SPACE MCA)',
      text: 'Being a project manager is one of the hardest roles to fulfill but Allison did a significant amount to help keep the team together and we all finished off strong! Allison is meant for leadership roles and wherever she goes, I have no doubt she will succeed in whatever she does!',
      image: 'https://i.imgur.com/mlFGRqc.jpg',
    },
    {
      name: 'Brian Lee (Multi-project partner, Stanford \'25)',
      text: 'Allison is always a pleasure to work with. I enjoy their enthusiasm and sense of humor.',
      image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-10/221026-Emperor-Penguins-al-0511-7d537f.jpg',
    },
    {
      name: 'KL (long-time classmate and CS student)',
      text: 'Over 100,000 lines of code in fine printing!',
      image: 'https://i.imgur.com/riEo7Ir.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contact me',
  description: 'Feel free to send me a message regarding any business inquiries. Here are some ways to reach me:',
  items: [
    {
      type: ContactType.Email,
      text: 'ateecup [at] stanford [dot] edu',
      href: 'mailto:ateecup@stanford.edu',
    },
    {
      type: ContactType.Location,
      text: 'Stanford, CA',
      href: 'https://goo.gl/maps/g5KaXtEf2pPWwenn8',
    },
//     {
//       type: ContactType.Instagram,
//       text: '@tbakerx',
//       href: 'https://www.instagram.com/tbakerx/',
//     },
    {
      type: ContactType.Github,
      text: 'WorldsEndDunce',
      href: 'https://github.com/WorldsEndDunce',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/WorldsEndDunce'},
//   {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ateecup/'},
    {label: 'Discord', Icon: DiscordIcon, href: 'https://www.discordapp.com/users/453289711134310411'},
    {label: 'Steam', Icon: SteamIcon, href: 'https://steamcommunity.com/id/arihitokataki/'},
//   {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
//   {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
