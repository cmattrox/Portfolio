import Nelson from "../images/IMG_2260.JPG";
import Portfolio from "../images/Portfolio.png";
import Sports from "../images/Sports-Social-Media.png";
import Lawn from "../images/4th-and-lawn.png";
import FeedbackUI from "../images/FeedbackUI.png";
import GithubFinder from "../images/GithubFinder.png";
import HouseMarketplace from "../images/HouseMarketPlace.png";
import SupportDesk from "../images/SupportDesk.png";

export const homeInfo = [
  {
    img: Nelson,
    header: "Hello, World!",
    paragraph:
      "I am a young, full-stack developer with experience in assembly language programming and object oriented design. I'm currently in my final semester as a computer science major and have studied a broad spectrum of information systems, with an emphasis on data structures and algorithm analysis for front and back end development.",
    skillsTitle: "Certified skills: ",
    preferredStack: " My preferred stack is MERN",
    skills: [
      {
        value: "HTML",
      },
      {
        value: "CSS",
      },
      {
        value: "JavaScript",
      },
      {
        value: "JQuery",
      },
      {
        value: "PHP",
      },
      {
        value: "MySQL",
      },
      {
        value: "C++",
      },
      {
        value: "ReactJS",
      },
      {
        value: "MongoDB",
      },
      {
        value: "Express",
      },
      {
        value: "NodeJS",
      },
    ],
    recommendationTitle: "Received Recommendations:",
    recommendation:
      "I worked with Charles on multiple projects during our time in Bootcamp. He is a quick study and a willing teacher. Many times, I would reach out to him for an explanation of concepts and review of my code. During our projects, he demonstrated problem-solving and a team-first approach. For one project we collaborated to complete a full backend ourselves. Another project he took on the challenge of working multiple external APIs into the project seamlessly. From my experience collaborating with Charles, he has a strong grasp on full stack development concepts and has shown the ability to be an excellent communicator. When the 'going got tough' during our projects, he dug in and hit deadlines. I've enjoyed my time collaborating with Charles and would work with him on future projects.",
    job: "-Senior Sales Engineer at AppDynamics",
  },
];

export const contactInfo = [
  {
    header: "Contact Me",
    formInputs: [
      {
        type: "text",
        name: "firstname",
        id: "fname",
        required: true,
        text: "First Name: ",
      },
      {
        type: "text",
        name: "lastname",
        id: "lname",
        required: true,
        text: "Last Name: ",
      },
      {
        type: "tel",
        name: "phone",
        id: "phone",
        placeholder: "Format: 123-456-7890",
        pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
        text: "Phone: ",
        required: false,
      },
      {
        type: "email",
        name: "email",
        id: "email",
        required: true,
        text: "Email: ",
      },
      {
        type: "textarea",
        name: "message",
        id: "messge",
        required: true,
        text: "Message: ",
      },
    ],
  },
];

export const projectInfo = [
  {
    title: "Portfolio Website:",
    img: Portfolio,
    github: "https://github.com/cmattrox/Portfolio",
    text: "This is my portfolio website, built with React and Tailwindcss. I built this platform to introduce myself, show you what I have done, and give you a place to connect with me. Everything you see here was designed by me, even this carousel! Links under my projects will take you to the respective github pages and from there you can take a look at all of my repositories to see what I have worked on over the course of my career in development. The Contact Me page uses email.js, so if you would like to know more about any of my projects, or set up a meeting, please feel free to fill out the forum!",
    technologies: [
      {
        title: "React",
      },
      {
        title: "TailwindCSS",
      },
      {
        title: "NPM",
      },
      {
        title: "JQuery",
      },
      {
        title: "Email.JS",
      },
      {
        title: "FontAwesome",
      },
      {
        title: "Github Pages",
      },
      {
        title: "PostCSS",
      },
      {
        title: "Autoprefixer",
      },
      {
        title: "Craco",
      },
    ],
  },
  {
    title: "Github Finder",
    img: GithubFinder,
    github: "https://github.com/cmattrox/github-finder",
    livesite: "https://github-finder-josqqukxv-cmattrox.vercel.app/",
    text: "This app was from 'React Front To Back 2022' by Brad Traversy. It is a simple application, designed to look up users and their info on github. It uses the Github API to pull up a user's 10 most recent repos, as well as their following, follower, public repos and public gist counts.",
    technologies: [
      {
        title: "React",
      },
      {
        title: "Github API",
      },
      {
        title: "Axios",
      },
      {
        title: "DaisyUI",
      },
      {
        title: "Micromatch",
      },
      {
        title: "React-Icons",
      },
      {
        title: "React Router Dom",
      },
      {
        title: "Source Map URL",
      },
      {
        title: "TailwindCSS",
      },
      {
        title: "Autoprefixer",
      },
      {
        title: "PostCSS",
      },
    ],
  },
  {
    title: "House Marketplace",
    img: HouseMarketplace,
    github: "https://github.com/cmattrox/house-marketplace-app",
    livesite: "https://house-marketplace-app-7l6drnbar-cmattrox.vercel.app",
    text: "Here is another project from 'React Front To Back 2022' by Brad Traversy. This website is a place for users to create and view real estate listings, both for rent and for sale properties. House Marketplace includes Google Authentication API so users can create an account with their google accounts. I made some additional changes outside of what Traversy's course covered. I added a feature for logged in users to edit their email, on top of some styling and layout changes to make the site more user friendly.",
    technologies: [
      {
        title: "React",
      },
      {
        title: "Google OAuth API",
      },
      {
        title: "Firebase",
      },
      {
        title: "Leaflet",
      },
      {
        title: "React Router Dom",
      },
      {
        title: "Toastify",
      },
      {
        title: "Swiper",
      },
      {
        title: "UUID",
      },
      {
        title: "TailwindCSS",
      },
      {
        title: "Autoprefixer",
      },
      {
        title: "PostCSS",
      },
    ],
  },
  {
    title: "Support Desk",
    img: SupportDesk,
    github: "https://github.com/cmattrox/ticket-support-app",
    livesite: "https://welchsupportdesk.herokuapp.com",
    text: "Support Desk is another site from 'React Front To Back 2022' by Brad Traversy. This project is a favorite of mine that I've had the pleasure of working on to date. Support Desk is a full-stack project using a MERN stack. While working on this app, I found that I really enjoy the MERN stack. It includes a complete user authentication API and a way to log support tickets for Apple products. I made quite a few changes and new implementations to this project, including an edit and delete feature to your own tickets. I added some fun styling changes: hover effects, animations and interactive buttons to improve the user experience.",
    technologies: [
      {
        title: "MongoDB",
      },
      {
        title: "Express",
      },
      {
        title: "React",
      },
      {
        title: "NodeJS",
      },
      {
        title: "BCryptJS",
      },
      {
        title: "Concurrently",
      },
      {
        title: "Express Async Handler",
      },
      {
        title: "JSON Web Token",
      },
      {
        title: "Mongoose",
      },
      {
        title: "Nodemon",
      },
      {
        title: "Axios",
      },
      {
        title: "React Icons",
      },
      {
        title: "React Modal",
      },
      {
        title: "Redux",
      },
      {
        title: "React Redux Tool Kit",
      },
      {
        title: "React Router Dom",
      },
      {
        title: "Toastify",
      },
    ],
  },
  {
    title: "4th-and-lawn",
    img: Lawn,
    github: "https://github.com/cmattrox/4th-and-lawn",
    text: "4th-and-Lawn is an application I developed with several of my peers that we designed for users to be able to rent out parking spaces for events and trips to ensure you have a spot once you arrive. My main role consisted of implementing external APIs, such as Google Maps, in back-end development. I even set up an automatic confirmation email to add to the user???s experience.",
    technologies: [
      {
        title: "React",
      },
      {
        title: "Heroku",
      },
      {
        title: "NPM",
      },
      {
        title: "Nodemon",
      },
      {
        title: "Yarn",
      },
      {
        title: "Node.JS",
      },
      {
        title: "MongoDB",
      },
      {
        title: "Express",
      },
      {
        title: "Mongoose",
      },
      {
        title: "Google Maps API",
      },
      {
        title: "SASS",
      },
      {
        title: "NodeMailer",
      },
      {
        title: "Passport",
      },
      {
        title: "Axios",
      },
      {
        title: "Animate.CSS",
      },
      {
        title: "JQuery",
      },
    ],
  },
  {
    title: "Sports Social Media App",
    img: Sports,
    github: "https://github.com/cmattrox/project-2",
    text: "This was a group project designed to enable users to post and find times, dates, and locations for recreational pick-up games. This application has many functions, including the ability for users to create players, keep track of their games, and view other???s activities. We used Handlebars.js to build out the templates we needed, and Express.js as the backend server framework. ",
    technologies: [
      {
        title: "Express",
      },
      {
        title: "SASS",
      },
      {
        title: "Handlebars",
      },
      {
        title: "MySQL",
      },
      {
        title: "Node.JS",
      },
      {
        title: "Passport",
      },
      {
        title: "Chai",
      },
      {
        title: "Sequelize",
      },
      {
        title: "Mocha",
      },
    ],
  },
  {
    title: "Feedback UI",
    img: FeedbackUI,
    github: "https://github.com/cmattrox/feedback-application",
    text: "This is an application from udemy course React Front to Back 2022. It is a simple application that allows you to leave feedback on a service, with a ranking and review. The app gives a total number of reviews and an average rating as well as shows all past reviews. The user can also edit and delete past reviews on top of adding new reviews. I did add a few changes of my own from the course. I implemented tailwindcss and daisyui to consolidate styling and changed a bunch of the stylings myself.",
    technologies: [
      {
        title: "ReactJS",
      },
      {
        title: "TailwindCSS",
      },
      {
        title: "DaisyUI",
      },
      {
        title: "JSON Server",
      },
      {
        title: "Concurrently",
      },
      {
        title: "PostCSS",
      },
      {
        title: "Autoprefixer",
      },
    ],
  },
];

export const experienceInfo = [
  {
    header: "Experience",
    experience: [
      {
        title: "International Academy of Science (Full-Stack Developer):",
        time: "September 2021 - Current",
        description:
          "The International Academy of Science is an online, post-secondary, educational platform. On the web development team with five peers to collaborate and develop a clean, efficient, design for development projects in our que. I specialized in connecting front and back-end sources to generate essential data for pages while maintaining high standards of the industry. I primarily used HTML, CSS, JavaScript, React, PHP, and MySQL. Additionally, I facilitated a transition to React based coding to maintain the consistency of the company's websites while ensuring current projects are up-to-date and effective. ",
      },
      {
        title:
          "Metropolitan Community College (Associate's in Computer Science):",
        time: "January 2020 - May 2022",
        description:
          "I am currently enrolled in a broad spectrum of computer science class as Metropolitan Community College. After graduating with my associate???s degree, I plan on transferring to the University of Missouri--Kansas City to pursue my bachelor???s degree in computer science. Throughout my education, my main focus has been on data structures and algorithm analysis, object oriented design, and assembly language programming. ",
      },
      {
        title: "University of Kansas (Full-Stack Bootcamp):",
        time: "May 2018 - October 2018",
        description:
          "During my time at Kansas University, I was part of a full-stack web development program administered by KU and Trilogy. Here, I honed my skills using HTML, CSS, and JavaScript, as well as using front-end libraries, like React. Additionally, I worked with my peers to develop several applications, such as a real estate home locator. The highlights of this bootcamp included building and maintaining MongoDB and MySQL databases, along with integrating APIs into projects for access to different databases and tools. ",
      },
    ],
  },
];
