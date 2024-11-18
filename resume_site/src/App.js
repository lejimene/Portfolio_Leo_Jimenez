import logo from './logo.svg';
import './App.css';
import './Front_End/tailwind.css';
import ProjectBox  from './Front_End/projects_box';
import {InstagramButtonsText, GithubButtonsText,LinkdnButtonsText} from './Front_End/Socials_button';
import Resume_Banner from './Front_End/title_banner';

import in_devlopment from ".//images/in_development.png"

// Since this is a resume website we dont need multiple pages
//Thus we will be using a array to explain our information and load that array
//into our site

const projects =[
  {
    title: "LLC Restaurant/Deli Website",
    description: `A dynamic website for a Mexican restaurant, designed to enhance their online visibility and 
    customer engagement. Built with Django and MySQL, it provides real-time menu updates, seamless bilingual support 
    (English and Spanish), and an intuitive interface for easy language switching. This project demonstrates my skills 
    in backend and database integration, along with handling cross-language support for a diverse user base. Deployment 
    is in progress, with a dedicated domain already secured.`,
    tags: ["Personal Project", "Python", "Django", "HTML", "CSS", "JavaScript", "MySQL"],
    photos: in_devlopment // Replace "url" with the actual image URL
  
  },
  {
    title: "Wealth Wise Website",
    description: `A collaborative financial tracking tool built for desktop and mobile. Created with a team of four 
    students, this web app allows users to input expenses, set financial goals, and visualize spending trends with graphs.
     My primary focus was on the React-based frontend, ensuring responsive design and smooth user interactions.
      We used MySQL for data management and followed Agile practices, including user stories and Figma-based design 
      prototyping.`,
    tags: ["School Project", "React", "MySQL", "CSS", "PHP", "Figma"],
    photos: "url" // Replace "url" with the actual image URL
  
  },
  {
    title: "Marketplace Talriz Website",
    description: `Developed a secure marketplace platform with a team of three, implementing core e-commerce features 
    like login/registration, a product auctioning system, and a user 'like' system. Security was a high priority, 
    with measures to prevent SQL injection and XSRF attacks. Built using Django and MySQL, with Docker for 
    streamlined deployment and testing, showcasing my skills in security best practices and team-based development.`,
    tags: ["School Project", "Python", "Django", "HTML", "CSS", "JavaScript", "MySQL", "Docker"],
    photos: "url", // Replace "url" with the actual image URL
    githubLink: "https://github.com/lejimene/Talriz"
  },
  {
    title: "Resume Website",
    description: `A personal website designed to showcase my portfolio, skills, and projects in a clean, 
    mobile-friendly format. Built with React and styled with CSS, this website serves as a central hub for 
    prospective employers and collaborators to view my technical work and accomplishments. Emphasis on responsive 
    design ensures a consistent experience across devices.`,
    tags: ["Personal Project", "React", "CSS"],
    photos: "url" // Replace "url" with the actual image URL
  
  },
  {
    title: "MP3 YouTube Downloader",
    description: `A Python-based desktop application created with Tkinter, allowing users to download and tag MP3 
    files from YouTube videos. The app supports batch downloads, prevents duplicate downloads, and includes custom 
    tagging options for artist, album, and song name, along with audio adjustments by decibel. This project highlights 
    my skills in Python, GUI development, and user-focused software design.`,
    tags: ["Personal Project", "Python", "Tkinter"],
    photos: "url", // Replace "url" with the actual image URL
    githubLink: "https://github.com/lejimene/Simple-Youtube-to-MP3-Downloader"
  },
];




function App() {
  return (
      <div className="flex flex-wrap justify-center bg-slate-50">
        <Resume_Banner/>
        <div className="flex justify-center place-items-center gap-2 w-screen "><LinkdnButtonsText/><GithubButtonsText/><InstagramButtonsText/></div>
        {projects.map((project, index) => (
          <ProjectBox
              key={index}
              title={project.title}
              description={project.description}
              image={project.photos}
              tags={project.tags}
              projectLink={project.projectLink}
              githubLink={project.githubLink}
          />
      ))}
      </div>
  );
}

export default App;
