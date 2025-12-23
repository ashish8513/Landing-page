import { Banner } from '@/components/home';
import Encryption from '@/components/home/Encryption';
import Projects from '@/components/home/Projects';
import Skills from '@/components/home/Skills';
import TechStack from '@/components/home/TechStack';
import ServicesSection from './../src/components/home/ServicesSection';
import PortfolioSection from './../src/components/home/AnimatedPortfolio';
export default function Home() {
  return (
    <div>
      <Banner />
      <Skills />
      <Encryption />

      <ServicesSection />
      <PortfolioSection />
    </div>
  );
}
