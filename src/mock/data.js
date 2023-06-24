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
  paragraphOne: `I am a software engineer who likes to craft solid and scalable frontend products with great user experiences.`,
  paragraphTwo:
    'I have a BA in Electronics Engineering from El Shorouk University 🇪🇬 , a Certificate of Professional Web Development from Udacity.',
  paragraphThree: `I'm happiest when I'm creating, learning, exploring, and thinking about how to make things better. I'm available for any freelance work, feel free to reach out and say hello! `,
  // 'Right now I am intersted in MERN stack and Working on improving my skills in MongoDB, Express, React and Node.',
  resume:
    'https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:fee6c638-0a34-451e-95da-50a7e4f0a897', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'filmpire-screens.png',
    title: 'Filmpire',
    info: 'Filmpire is a creative multi-page website clone of the Netflix app. I develop this app using the latest technology in the front-end development field like React-js as a javascript platform, Material UI make the design to be simple and clean , Redux for state management,Alan Ai to assist the user to do some useful functions just by talking with the app and more.',
    info2: '',
    url: 'https://filmpire-samehrefaay.netlify.app/',
    repo: 'https://github.com/SamehRefaay/filmpire_smr', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'admin-dashboard-screens.png',
    title: 'Admin Dashboard',
    info: 'Admin Dashboard is a creative multi-page website great for any admin or IT dashboard. I develop this app using the latest technology in the front-end development field like React-js as a javascript platform, Material UI making the design to be simple and clean, and more.',
    info2: '',
    url: 'https://admin-dashboard-samehrefaay.netlify.app/',
    repo: 'https://github.com/SamehRefaay/admin_dashboard_repo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bondi-screens.png',
    title: 'Bondi',
    info: 'Bondi is a website great for any bussiness. I develop this app using front-end development technology like HTML,CSS,and BOOTSTRAP ,the design is simple and clean',
    info2: '',
    url: 'https://samehrefaay.github.io/bondi-smr-repo/',
    repo: 'https://github.com/SamehRefaay/bondi-smr-repo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'elzero-dashboard-screens.png',
    title: 'Elzero Dashboard',
    info: 'Elzero Dashboard is a creative multi-page website designed by Osama Elzero who shares it as a free design. this design is great for a portfolio, agency, or any other web page. Free google font (Cairo Font) used. I have used my skills in HTML CSS to convert this PSD file into code.',
    info2: '',
    url: 'https://samehrefaay.github.io/elzero-dashboard/index.html',
    repo: 'https://github.com/SamehRefaay/elzero-dashboard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'elzero-template-screens.png',
    title: 'Elzero Template',
    info: 'Elzero Template is a creative one-page PSD template made by Elzero great for a portfolio, agency, or any other web page.PSD file that is fully layered and grouped. Free google font used.I have used my skills in HTML CSS and javascript to convert this PSD file into code.',
    info2: '',
    url: 'https://samehrefaay.github.io/elzero-template-repo/',
    repo: 'https://github.com/SamehRefaay/elzero-template-repo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'kasper-screens.png',
    title: 'Kasper Landing Page',
    info: 'Kasper is a creative one-page PSD template made by Graphberry great for a portfolio, agency, or any other web page.PSD file that is fully layered and grouped. Free google font used.I have used my skills in HTML CSS and javascript to convert this PSD file into code.',
    info2: '',
    url: 'https://samehrefaay.github.io/kasper-template-repo/',
    repo: 'https://github.com/SamehRefaay/kasper-template-repo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'leon-screens.png',
    title: 'Leon Landing Page',
    info: 'Leon is a free PSD template made by Graphberry. It comes in a modern, flat design with vibrant colors. This landing page is great for representing your portfolio or other websites.I have translated the design into code using my skills in HTML and CSS.',
    info2: ' ',
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
