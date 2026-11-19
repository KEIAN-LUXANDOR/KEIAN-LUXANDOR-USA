import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import { NAV_MENUS } from '../data/navigation';
import './Content.css';

// Generic content page for guides and policy pages.
// Replace with a CMS fetch (Contentful, Sanity, WordPress, etc.) keyed by `topic`.
const CONTENT = {
  'engagement-ring-guide': {
    title: 'Engagement Ring Guide',
    sections: [
      ['Start with her style', 'Notice the jewelry she already wears — metal colour, delicate or bold, vintage or modern.'],
      ['Choose a shape', 'Round is the most brilliant; oval and pear elongate the finger; emerald and radiant feel architectural.'],
      ['Set a budget', 'Balance carat weight with cut quality — a well-cut stone looks larger and brighter.'],
      ['Find her size', 'Borrow a ring she wears on her right hand, or book an appointment and we’ll help you find the size.'],
    ],
  },
  'choose-a-diamond': {
    title: 'Diamond Buying Guide',
    sections: [
      ['Cut', 'The most important of the 4Cs — it determines sparkle.'],
      ['Color', 'Graded D (colourless) to Z. G–H offers excellent value.'],
      ['Clarity', 'VS and SI grades are typically eye-clean.'],
      ['Carat', 'Weight, not size — shape and cut affect how large a stone looks.'],
    ],
  },
  'diamond-clarity': {
    title: 'Diamond Clarity Explained',
    sections: [
      ['FL / IF', 'Flawless or internally flawless — extremely rare.'],
      ['VVS1 / VVS2', 'Very, very slightly included; inclusions difficult to see under 10× magnification.'],
      ['VS1 / VS2', 'Very slightly included; minor inclusions under magnification.'],
      ['SI1 / SI2', 'Slightly included; often eye-clean and great value.'],
    ],
  },
  'shop-with-confidence': {
    title: 'Shop with Confidence',
    sections: [
      ['Lifetime warranty', 'Every piece is protected against manufacturing defects.'],
      ['Shipping & returns', 'Complimentary insured shipping and 15-day returns.'],
      ['Personal help', 'A Keian expert is a message, call or appointment away.'],
    ],
  },
  accessibility: {
    title: 'Accessibility',
    sections: [['Our commitment', 'We aim to meet WCAG 2.1 AA. Contact us if you have difficulty using any part of this site.']],
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    sections: [['Your data', 'Add your privacy policy content here.']],
  },
};

export default function InfoPage({ topic: topicProp }) {
  const params = useParams();
  const topic = topicProp || params.topic;

  if (topic === 'sitemap') {
    return (
      <>
        <PageHero title="Sitemap" crumbs={[{ label: 'Sitemap' }]} />
        <section className="section container sitemap">
          {NAV_MENUS.map((m) => (
            <div key={m.id}>
              <h3><Link to={m.to}>{m.label}</Link></h3>
              <ul>
                {m.columns.flatMap((c) => c.links).map((l) => (
                  <li key={l.label + l.to}><Link to={l.to}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </>
    );
  }

  const page = CONTENT[topic] || { title: 'Page', sections: [['Content', 'Add content for this page.']] };
  return (
    <>
      <PageHero title={page.title} crumbs={[{ label: page.title }]} />
      <section className="section container prose">
        {page.sections.map(([h, t]) => (
          <div key={h}>
            <h2>{h}</h2>
            <p>{t}</p>
          </div>
        ))}
      </section>
    </>
  );
}