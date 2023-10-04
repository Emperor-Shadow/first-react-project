import './tailwind-all.css';
import './style.css';
import Nav from './nav';
import Head from "./head";
import Project from './project';
import About from './about';
import Contact from './contact';

function App() {

  return (
    <div>
      <Nav />
      <Head />
      <Project />
      <About />
      <Contact />
    </div>
  )
}

export default App
