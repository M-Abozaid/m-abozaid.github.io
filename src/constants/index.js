import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  choobs,
  upwork,
  codelap,
  speero,
  elunic,
  atomkit,
  pollenn,
  shopfloor,
  hugAtHome,
  sezame,
  codelapPlatform,
  ankur,
  ahmed,
  webber,
  angular,
  shhfu,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "MERN stack",
    icon: mobile,
  },
  {
    title: "MEAN stack",
    icon: creator,
  },
  {
    title: "Blockchain",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Elunic AG",
    icon: elunic,
    iconBg: "#0693e3",
    date: "March 2023 - Present",
    points: [
      "Developing and maintaining shopfloor.io using Angular, Nest.js, PostgresQL and RabbitMQ.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Choobs Ltd, Geneva",
    icon: choobs,
    iconBg: "#ffff",
    date: "Feb 2019 - July 2022",
    points: [
      "Successfully contributed to the development of 4 large-scale software projects.",
      "Developing, testing, maintaining web/mobile applications using both MERN and MEAN stacks and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Providing innovative solutions to very challenging technical problems.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer (Remote)",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#fff",
    date: "Jan 2017 - Present",
    points: [
      "Successfully completed 17+ projects with 5-star ratings.",
      "Worked with teams of varying sizes from all over the world",
      "Exposed to dozens of software projects",
      "Learned about cutting-edge technologies",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Speero, KSA",
    icon: speero,
    iconBg: "#fff",
    date: "Dec 2018 - Feb 2019",
    points: [
      "Developing and testing Express.js REST APIs.",
      "Migrating codebase to Typescript.",
      "Developing custom services for web scrapping.",
    ],
  },
  {
    title: "Chatbot Developer",
    company_name: "Atomkit",
    icon: atomkit,
    iconBg: "#fff",
    date: "April 2018 - July 2018",
    points: [
      "Designing, Developing and deploying Energy saving chatbot Takka for twitter.",
      "Porting Takka to Google assistant and Amazon Alexa.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Muhammed is an excellent freelancer and developer. He took ownership of the project and worked on it sincerely. Will highly recommend Muhammed for any technology project. Will work again with him in future..",
    name: "Ankur Dhamija",
    designation: "CFA",
    company: "Hello Vinci",
    image: ankur,
  },
  {
    testimonial:
      "Muhammed delivered good work on this job and I enjoyed working with him. He deliver all requirement, he ready to learn new things to finish the scope. I will work with him in near future.",
    name: "Ahmed Ragaey",
    designation: "CTO",
    company: "Crystal service",
    image: ahmed,
  },
  {
    testimonial:
      "Muhammed was very helpful with fixing some of the bugs encountered in our dashboard tables regarding pagination issue. He has a good understanding of the codebase and was very helpful",
    name: "Webber Wang",
    designation: "CTO",
    company: "Codelab",
    image: webber,
  },
];

const projects = [
  {
    name: "Codelab",
    description:
      "Codelab: is an open-source Web app builder built with Nx, React, Next.js, Nest.js, MobX, Neo4j, Tailwind, and Vercel, Codelab was one of the most advacnced codebases I have worked on and on of the best in developer experience. during my work on the Codelabe project I was responsible for implementing new features, fixing challenging bugs, both on the Frontend and the Backend.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Mobx",
        color: "green-text-gradient",
      },
      {
        name: "Nx",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "neo4j",
        color: "pink-text-gradient",
      },
    ],
    image: codelapPlatform,
    source_code_link: "https://github.com/codelab-app",
  },
  {
    name: "Shoopfloor.io",
    description:
      "Shoopfloor.io is a platform and a set of software modules that are meant to help machine builders/manufacturers quickly get started with the development of tailor-made Industry IoT solutions.",
    tags: [
      {
        name: "NestJS",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "RabbitMQ",
        color: "red-text-gradient",
      },
      {
        name: "Gitlab CI",
        color: "red-text-gradient",
      },
      {
        name: "PostgresQL",
        color: "red-text-gradient",
      },
      {
        name: "Micro-service architecture",
        color: "purple-text-gradient",
      },
    ],
    image: shopfloor,
    source_code_link: "https://shopfloor.io/",
  },
  {
    name: "Pollenn",
    description:
      "Pollenn.ch: A platform for collecting and managing geo-located environmental observation. The app is meant for tracking wildlife and invasive species. The app is built using the MERN-stack and uses Redux, redux-saga, and Leaflet for mapping functionality.  I was involved in the development of multiple features both on the Frontend and the Backend, writing technical documentations and optimizing the app's overall performance. All made significant contributions to the project's success.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Reudx Redux-saga",
        color: "green-text-gradient",
      },
      {
        name: "Leaflet",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: pollenn,
    source_code_link: "https://maps.pollenn.ch/",
  },
  {
    name: "HUG@HOME",
    description:
      "HUG@HOME is a platform for medical remote consultation, specifically implementing fast and reliable low-cost multi-user video conference solution that can work on multiple platforms (Browser, Android, IOS) and is built with Web technologies, many video conference solutions were tried including Jitsi, OpenVidu with KMS, but there were always comparability or scalability issues. we ended up using Mediasoup for WebRTC as it checked all our boxes in terms of being compatible with WebRTC on IOS, and being very reliable and stable. while it was challenging to implement Mediasoup server and clients from scratch at the time, it was a very fruitful experience that I have learned a lot from.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Ionic",
        color: "green-text-gradient",
      },
      {
        name: "Sails.js",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Mediasoup",
        color: "green-text-gradient",
      },
      {
        name: "WebRTC",
        color: "pink-text-gradient",
      },
    ],
    image: hugAtHome,
    source_code_link: "https://www.hug.ch/medecine-premier-recours/hughome",
  },
  {
    name: "Sezame Crypto Wallet",
    description:
      "Sezame.app: Is an open source React Native Crypto Wallet app for Android and iOS that supports multiple chains and NFTs, I was responsible for implementing blockchain integration as well as developing UI.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "Web3",
        color: "green-text-gradient",
      },
    ],
    image: sezame,
    source_code_link: "https://github.com/maze2-org/sezame-wallet",
  },
  {
    name: "SHHFU",
    description:
      "SHHFU: An Ethereum NFT collection and marketplace that uses Web3 technologies and leverages the expertise of both the community and professionals to provide solutions to your housing problems. My role was a lead Full-Stack developer responsible for Writing Solidity smart contracts and implementing off-chain NFT-lising using EIP712,  building React.js App and Node.js APIs, blockchain integration, and writing technical documentation.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Hardhat",
        color: "pink-text-gradient",
      },
      {
        name: "Web3",
        color: "green-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "EIP712",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "NFTs",
        color: "green-text-gradient",
      },
    ],
    image: shhfu,
    source_code_link: "https://firguntech.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
