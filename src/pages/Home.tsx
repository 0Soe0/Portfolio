import { ThemeToggle, StarBackground, Navbar, HeroSection, AboutSection, SkillsSection, ProjectsSection, ContactSection, Footer } from 'components';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme toggle */}
      <ThemeToggle />

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
        <ContactSection />
      </main>

      {/* Footer*/}
      <Footer />
    </div>
  )
}