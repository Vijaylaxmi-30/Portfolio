import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App bg-gray-900 text-gray-300 font-sans">
      <Header />
      <main>
        {/* Each section is wrapped in a div with an ID for navigation */}
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
