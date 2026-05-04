import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './features/hero/Hero';
import { Services } from './features/services/Services';
import { Portfolio } from './features/portfolio/Portfolio';
import { Contact } from './features/contact/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow pt-16 md:pt-24">
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
