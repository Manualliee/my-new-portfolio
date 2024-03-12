import About from "./About";
import Skills from "./Skills";
import picture from './assets/IMG_1658.jpg';


import './App.css'

function App() {
  return (
    <div className="App">
      <div className="main-picture">
        <img src={picture} alt="a picture of myself" />
        <div className="picture-text">
          <h1>Manuel F. Venegas</h1>
          <p>Front-End Developer</p>
        </div>
      </div>

      <div className="about-me">
        <About />
      </div>

      <div className="skill-section">
        <h2>Skills:</h2>
        <Skills />
      </div>
    </div>
    
  )
}

export default App
