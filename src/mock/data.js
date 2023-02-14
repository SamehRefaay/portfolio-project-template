import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sameh',
  subtitle: 'Front-End Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: `A software engineer who loves to build web apps to make people's life easier.`,
  paragraphTwo:
    'My latest web app keeps people up to date with the latest developments in global weather.',
  paragraphThree:
    'right now I am Working on improving my skills in JavaScript, Express, Node js, React, AngularJS, and SQL.',
  resume:
    'https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:fee6c638-0a34-451e-95da-50a7e4f0a897', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'elzero-template.png',
    title: 'Elzero Template',
    info: 'Elzero Template is a creative one-page PSD template made by Elzero great for a portfolio, agency, or any other web page.PSD file that is fully layered and grouped. Free google font used.',
    info2: 'I have used my skills in HTML CSS and javascript to convert this PSD file into code.',
    url: 'https://samehrefaay.github.io/elzero-template-repo/',
    repo: 'https://github.com/SamehRefaay/elzero-template-repo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'kasper.jpg',
    title: 'Kasper Landing Page',
    info: 'Kasper is a creative one-page PSD template made by Graphberry great for a portfolio, agency, or any other web page.PSD file that is fully layered and grouped. Free google font used.',
    info2: 'I have used my skills in HTML CSS and javascript to convert this PSD file into code.',
    url: 'https://samehrefaay.github.io/kasper-template-repo/',
    repo: 'https://github.com/SamehRefaay/kasper-template-repo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather-journal.jpg',
    title: 'Weather Journal App',
    info: 'Develop an asynchronous web app that uses Web API and user data to dynamically update the UI.',
    info2: 'Connect web application to backend server data using JavaScript.',
    url: 'https://github.com/SamehRefaay/udacity-weather-journal',
    repo: 'https://github.com/SamehRefaay/udacity-weather-journal', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'leon.jpg',
    title: 'Leon Landing Page',
    info: 'Leon is a free PSD template made by Graphberry. It comes in a modern, flat design with vibrant colors. This landing page is great for representing your portfolio or other websites.',
    info2: 'I have translated the design into code using my skills in HTML and CSS. ',
    url: 'https://samehrefaay.github.io/leon_template_repo/',
    repo: 'https://github.com/SamehRefaay/leon_template_repo', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'samehrefaay89@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/SamehRefaay',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/samehrefaay',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/samehrefaay/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/SamehRefaay',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
