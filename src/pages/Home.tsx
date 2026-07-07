import {
  StarBackground,
  Navbar,
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
  Footer,
  CertificatesSection,
} from "components";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main content*/}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>

      {/* Footer*/}
      <Footer />
    </div>
  );
}
