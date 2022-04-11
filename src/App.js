import './App.css';
import AboutMe from './components/AboutMe.component';
import Certificates from './components/Certificates.component';
import Contact from './components/Contact.component';
import Events from './components/Events.component';
import Experiences from './components/Experiences.component';
import Formations from './components/Formations.component';
import Header from './components/Header.component';
import Langues from './components/Langues.component';
import Projets from './components/Projets.component';
import Skills from './components/Skills.component';
import Slide from './components/Slide.component';
import SoftSkills from './components/SoftSkills.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slide/>
      <AboutMe/>
      <Experiences/>
      <Formations/>
      <Certificates/>
      <Projets/>
      <Events/>
      <Skills/>
      <SoftSkills/>
      <Langues/>
      <Contact/> 
    </div>
  );
}

export default App;
