import { Hero } from '../components/home/Hero'
import { TrustBar } from '../components/home/TrustBar'
import { AboutSection } from '../components/home/AboutSection'
import { ProductCategoriesSection } from '../components/home/ProductCategoriesSection'
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection'
import { SustainabilitySection } from '../components/home/SustainabilitySection'
import { CertificationsSection } from '../components/home/CertificationsSection'
import { GlobalExportMapSection } from '../components/home/GlobalExportMapSection'
import { HomeCtaSection } from '../components/home/HomeCtaSection'

export function HomePage() {
  return (
    <div className="bg-slate-50">
      <Hero />
      <TrustBar />
      <AboutSection />
      <ProductCategoriesSection />
      <WhyChooseUsSection />
      <SustainabilitySection />
      <CertificationsSection />
      <GlobalExportMapSection />
      <HomeCtaSection />
    </div>
  )
}

