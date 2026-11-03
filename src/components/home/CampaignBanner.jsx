import { Link } from 'react-router-dom';
import { CAMPAIGN } from '../../data/home';
import Media from '../common/Media';
import Reveal from '../common/Reveal';

// Tiffany-style split: short centred text on the left, large photo on the right.
export default function CampaignBanner() {
  return (
    <section className="campaign">
      <Reveal className="campaign__copy">
        <h2>{CAMPAIGN.title}</h2>
        <p>{CAMPAIGN.text}</p>
        <Link to={CAMPAIGN.cta.to} className="campaign__link">{CAMPAIGN.cta.label}</Link>
      </Reveal>
      <Media className="campaign__media" src={CAMPAIGN.image} tone={CAMPAIGN.tone} kind="necklace" alt={CAMPAIGN.title} ratio="auto" />
    </section>
  );
}
