import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App bg-slate-50 text-slate-800 font-sans antialiased">
      <Header />
      <main className="pt-16">
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
