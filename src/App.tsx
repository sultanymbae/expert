import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { DoctorsSection } from "./components/DoctorsSection";
import { AboutSection } from "./components/AboutSection";
import { ContactInfo } from "./components/ContactInfo";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Добавляем отступ сверху только на десктопе, чтобы контент не был скрыт под фиксированным хедером */}
      <main className="md:pt-[120px]">
        <HeroSection />
        <ServicesSection />
        <DoctorsSection />
        <AboutSection />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
}