import Hero from '../components/home/Hero';
import CategoryStrip from '../components/home/CategoryStrip';
import CampaignBanner from '../components/home/CampaignBanner';
import ZigZagStory from '../components/home/ZigZagStory';
import OurCraft from '../components/home/OurCraft';
import Benefits from '../components/home/Benefits';
import '../components/home/home.css';

// Home page sections, top to bottom.
export default function Home() {
  return (
    <>
      <Hero />
      <CategoryStrip />
      <CampaignBanner />
      <ZigZagStory />
      <OurCraft />
      <Benefits />
    </>
  );
}