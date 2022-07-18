import logo from "./logo.svg";
import "./App.css";
import selfie from "./Images/sunsetBackgroundSquare.jpg";
import knickKnack from "./Images/knickKnacksScreenshot.png";
import weatherApp from "./Images/weatherAppScreenshot.png";
import timelessTechBlog from "./Images/timelessTechBlogScreenshot.png";
import bitcoinTracker from "./Images/bitcoinTrackerScreenshot.png";

function App() {
  return (
    <div classNameName="App">
      <header className="static-header">
            <h2 className="header main-header">Phoenix Staley - Web Developer</h2>
            <h2 className="header short-header">Phoenix Staley - Developer</h2>
            <nav className="text-right navigation">
                <ul>
                    <li>
                        
                    </li>
                    <li>
                        <a href="#project-section">Projects</a>
                    </li>
                    <li>
                        <a href="#contact-me">Contact</a>
                    </li>
                    <li>
                        <a href="./Assets/phoenixDevResume.pdf" target="_blank">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>

        <div className="hero" alt="The word developer on a dark background surrounded by yellow angle brackets">
            <img src={selfie} alt="A picture of Phoenix Staley in a white cardigan, wearing square glasses, with the sunset in the background" className="pineapple-shirt"/>
            <h2 className="hero-subtitle">Keeping Current</h2>
        </div>
        
        <main className="flex-container main-section" id="about-me">
            <aside className="sidebar flex-container">
                <h2 className="section-heading">About Me</h2>
            </aside>
            <div className="content">
                <p>
                    Welcome to my website! I'm a nonbinary developer currently enrolled in a full-stack JavaScript bootcamp through the
                    University of Washington.
                    I've been fascinated about computers and the internet since I was a kid. I began programming video games on Roblox in
                    middle school. Ever since then my drive to continue learning and developing programs has never ceased.
                </p>
                <br/>
                <p>
                    Below you can view projects I have developed, either with a team or by myself. You can view the Github repositories of
                    these web apps on <a href="https://www.github.com/Phoenix-Staley">my Github profile</a>.
                </p>
            </div>
        </main>

        <div className="flex-container main-section" id="project-section">
            <div className= "content flex-container projects">
                <div className="projects grid-container">
                    <h2 id="project-heading" className="section-heading">Projects</h2>
                    <a href="https://knickknacks-ondemand.herokuapp.com/" target="_blank" className="mainProject col-12">
                        <h3 className="project-title">KnickKnacks On Demand</h3>
                        <img src={knickKnack} alt="A line chart showing the price of bitcoin over time" className="main-project project-image"/>
                    </a>
                    <a href="https://phoenix-staley.github.io/weatherApp/" target="_blank" className="project1 col-3">
                        <h3 className="project-title">Weather App</h3>
                        <img src={weatherApp} alt="A forecast of weather in Seattle" className="project-image"/>
                    </a>
                    <a href="https://intense-ridge-45065.herokuapp.com/" target="_blank" className="project2 col-3">
                        <h3 className="project-title" target="_blank">Timeless Tech Blog</h3>
                        <img src={timelessTechBlog} alt="A grey website with a purple start quiz" className="project-image"/>
                    </a>
                    <a href="https://phoenix-staley.github.io/cryptocurrency_tracker/" target="_blank" className="project3 col-3">
                        <h3 className="project-title">Bitcoin Price Tracker</h3>
                        <img src={bitcoinTracker} alt="A text area with a red button labeled 'generate password'" className="project-image"/>
                    </a>
                </div>
            </div>
        </div>

        <div className="flex-container main-section" id="contact-me">
            <aside className="sidebar flex-container">
                <h2 className="section-heading">Contact Me</h2>
            </aside>
            <div className="content flex-container">
                <h3><a href="mailto:PhoenixStaley_Developer@outlook.com">Email</a></h3>
                <h3><a href="https://www.linkedin.com/in/phoenix-staley-b17672211/" target="_blank">LinkedIn</a></h3>
                <h3><a href="https://www.github.com/Phoenix-Staley" target="_blank">Github</a></h3>
            </div>
        </div>

        <footer id="relative-footer">
            <h3>Developed by Phoenix Staley</h3>
            <h3>2022 ©</h3>
        </footer>
    </div>
  );
}

export default App;
