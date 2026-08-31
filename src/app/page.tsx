import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm"; // Přidaný import

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Reviews />
      <ContactForm />
    </div>
  );
}