import Home from './components/Home';
import Work from './components/Work';
import Sidenav from './components/Sidenav'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/footer';

function App() {

  return (
    <>
      <Sidenav />
      <Home />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App