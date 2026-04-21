import { Header } from '@/components/header'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { FeaturedWorksSection } from '@/components/sections/featured-works-section'
import { ExperienceSection } from '@/components/sections/experience-section'
import { ImpactStatsSection } from '@/components/sections/impact-stats-section'
import { SkillsSection } from '@/components/sections/skills-section'
import { RecognitionSection } from '@/components/sections/recognition-section'
import { ContactSection } from '@/components/sections/contact-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-slate-100 overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturedWorksSection />
      <ExperienceSection />
      <ImpactStatsSection />
      <SkillsSection />
      <RecognitionSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
