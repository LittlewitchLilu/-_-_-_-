import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Problems } from "./components/Problems";
import { About } from "./components/About";
import { Consultation } from "./components/Consultation";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F0]" style={{ fontFamily: "var(--font-body)" }}>
      <Nav />
      <main>
        <Hero />
        <Problems />
        <About />
        <Consultation />
        <Testimonials />
        <FAQ />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
