import PageHero from '../components/common/PageHero';
import Icon from '../components/common/Icon';
import Reveal from '../components/common/Reveal';
import './Content.css';

const VALUES = [
  { id: 'craft', icon: 'award', title: 'Finished by Hand', text: 'Every piece is polished and finished by hand, so it feels as good as it looks.' },
  { id: 'quality', icon: 'gem', title: 'Checked with Care', text: 'We check each stone and setting before a piece is sent to you.' },
  { id: 'warranty', icon: 'shield', title: 'Lifetime Warranty', text: 'Every Keian Luxandor piece is covered against manufacturing defects for life.' },
  { id: 'returns', icon: 'refresh', title: '15-Day Returns', text: 'Return any piece within 15 days of delivery in its original condition.' },
  { id: 'shipping', icon: 'truck', title: 'Complimentary Insured Shipping', text: 'Every order is insured and delivered with care, at no extra cost.' },
  { id: 'appointment', icon: 'calendar', title: 'Personal Appointments', text: 'Meet a Keian expert online or in person to find the right piece.' },
];

export default function Values() {
  return (
    <>
      <PageHero title="Our Promise" text="What you can expect from every Keian Luxandor piece." crumbs={[{ label: 'About Us', to: '/about-us' }, { label: 'Our Promise' }]} />
      <section className="section container values">
        {VALUES.map((v) => (
          <Reveal as="article" key={v.id} id={v.id} className="value">
            <Icon name={v.icon} size={30} strokeWidth={1.1} />
            <h3>{v.title}</h3>
            <p className="muted">{v.text}</p>
          </Reveal>
        ))}
      </section>
    </>
  );
}