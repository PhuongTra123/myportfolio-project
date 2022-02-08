import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutMe from './components/AboutMe';
import Contacts from './components/Contacts';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
