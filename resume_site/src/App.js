import logo from './logo.svg';
import './App.css';


// Since this is a resume website we dont need multiple pages
//Thus we will be using a array to explain our information and load that array
//into our site

const projects = [
  {
    title: "Mp3 Youtube Downloader",
    description: `Personal project Using Tkiner and some python
    I created a downloaded allowing for multiple downloads to occur while
    disabling duplicates and allowing for adding tags inputs such as Artist name, Album Name, Changing volume by decibal and Song name`,
    tags: ["Personal Project","Python", "Tkinter"],
    photos: "url"
  },

  {
    title: "LLC Resturant/Deli Website",
    description: `I created a website to showcase a mexican resturant / deli I had worked at to provide them a website to give
    more coverage especially online. Giving a website that showcases menu items and prices. This by giving data from MySQL and updating it if needed.
    Another thing is it must handle the difference in langauages as customers are mainly spanish speakers and thus we must handle rendering only 
    spanish items and descriptions if they choose to see in spanish.`,
    tags: ["Personal Project","Python", "Django", "HTML","CSS","Javascript","MySQL"],
    photos: "url"
  },
  {
    title: "Wealth Wise Website",
    description: `My team consisting of four other students we created a fiancial dairy website of sorts that the user will add by input and
    will show graphs for amount used per month, goals that the user has and how far they are wuthin the goal like how much is left with a pie graph. 
    This website must also work with mobile devices. This assingment had us follow a PM and creating user stories and task stories before
     starting our assingment. This included creating a figma. The assingment frontend was my main focus.`,
    tags: ["School Project","React", "MySql", "CSS", "PHP", "Figma"],
    photos: "url"
  },
  {
    title: "Marketplace Talriz Website",
    description: `My team consisting of three other students are tasked with creating website that handles making a marketplace system. This involves
    creating login and regirstration. Creating a like system and selling and auctioning system. This also means handlign SQL injection issues and 
    XSRF issues. Trying to fix any secrurity issues`,
    tags: ["School Project","Python", "Django", "HTML","CSS","Javascript","MySQL", "Docker"],
    photos: "url"
  },
  {
    title: "Resume Website",
    description: `My team consisting of three other students are tasked with creating website that handles making a marketplace system. This involves
    creating login and regirstration. Creating a like system and selling and auctioning system. This also means handlign SQL injection issues and 
    XSRF issues. Trying to fix any secrurity issues`,
    tags: ["Personal Project","React","CSS","MySQL",],
    photos: "url"
  },
  
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
