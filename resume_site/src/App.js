import logo from './logo.svg';
import './App.css';
import './Front_End/tailwind.css';
import ProjectBox  from './Front_End/projects_box';
import {InstagramButtonsText, GithubButtonsText,LinkdnButtonsText} from './Front_End/Socials_button';
import Resume_Banner from './Front_End/title_banner';

// Since this is a resume website we dont need multiple pages
//Thus we will be using a array to explain our information and load that array
//into our site

const projects = [

  {
      title: "LLC Restaurant/Deli Website",
      description: `I created a website to showcase a Mexican restaurant/deli I had worked at to provide them a website to give
      more coverage especially online. Giving a website that showcases menu items and prices. This by giving data from MySQL and updating it if needed.
      Another thing is it must handle the difference in languages as customers are mainly Spanish speakers and thus we must handle rendering only 
      Spanish items and descriptions if they choose to see in Spanish.`,
      tags: ["Personal Project", "Python", "Django", "HTML", "CSS", "Javascript", "MySQL"],
      photos: "url" // Replace "url" with the actual image URL
  },
  {
      title: "Wealth Wise Website",
      description: `My team consisting of four other students created a financial diary website of sorts that the user will add by input and
      will show graphs for amount used per month, goals that the user has, and how far they are within the goal like how much is left with a pie graph. 
      This website must also work with mobile devices. This assignment had us follow a PM and create user stories and task stories before
      starting our assignment. This included creating a Figma. The assignment's frontend was my main focus.`,
      tags: ["School Project", "React", "MySQL", "CSS", "PHP", "Figma"],
      photos: "url" // Replace "url" with the actual image URL
  },
  {
      title: "Marketplace Talriz Website",
      description: `My team consisting of three other students is tasked with creating a website that handles making a marketplace system. This involves
      creating login and registration. Creating a like system and selling and auctioning system. This also means handling SQL injection issues and 
      XSRF issues. Trying to fix any security issues.`,
      tags: ["School Project", "Python", "Django", "HTML", "CSS", "Javascript", "MySQL", "Docker"],
      photos: "url" // Replace "url" with the actual image URL
  },
  {
      title: "Resume Website",
      description: `Current website that handles showcasing my projects and basically showing all of my work. This meant making it mobile-friendly and clean to read.`,
      tags: ["Personal Project", "React", "CSS"],
      photos: "url" // Replace "url" with the actual image URL
  },
  {
    title: "Mp3 Youtube Downloader",
    description: `Personal project Using Tkinter and some python
    I created a downloader allowing for multiple downloads to occur while
    disabling duplicates and allowing for adding tags inputs such as Artist name, Album Name, Changing volume by decibel, and Song name`,
    tags: ["Personal Project", "Python", "Tkinter"],
    photos: "url" // Replace "url" with the actual image URL
},
];



function App() {
  return (
      <div className="flex flex-wrap justify-center bg-slate-50">
        <Resume_Banner/>
        <div className="flex justify-center place-items-center gap-2 w-screen "><LinkdnButtonsText/><GithubButtonsText/><InstagramButtonsText/></div>
          {projects.map((project, index) => (
            <ProjectBox
            title={project.title}
            description={project.description}
            image={project.photos}
            tags={project.tags}
          />
          ))}
      </div>
  );
}

export default App;
