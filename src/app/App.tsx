import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { UseCases } from "./components/UseCases";
import { Pricing } from "./components/Pricing";
import { Download } from "./components/Download";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Stats } from "./components/Stats";
import { Requirements } from "./components/Requirements";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Requirements />
      <Features />
      <Stats />
      <HowItWorks />
      <UseCases />
      <Pricing />
      <Download />
      <Contact />
      <Footer />
    </div>
  );
}