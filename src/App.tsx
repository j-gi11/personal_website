import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Landing from "@/components/sections/Landing";
import Resume from "@/components/sections/Resume";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Landing />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
