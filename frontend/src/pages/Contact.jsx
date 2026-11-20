import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import Icon from '../components/common/Icon';
import { SITE } from '../config/site';
import { useUI } from '../context/UIContext';
import './Content.css';

const TOPICS = ['Product question', 'Order status', 'Warranty & repairs', 'Custom design', 'Other'];

export default function Contact() {
  const { open } = useUI();
  const [form, setForm] = useState({ name: '', email: '', topic: TOPICS[0], message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'Required';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (form.message.trim().length < 10) errs.message = 'Please add a few more details';
    setErrors(errs);
    if (Object.keys(errs).length) return;
    // TODO: POST form to your support endpoint.
    setSent(true);
  };

  return (
    <>
      <PageHero title="Contact Us" text="Our jewelry specialists are here to help — online, by phone, or in store." crumbs={[{ label: 'Contact Us' }]} />
      <section className="section container contact">
        <aside className="contact__ways">
          <a href={`tel:${SITE.phone.replace(/\D/g, '')}`} className="contact__way"><Icon name="phone" /><div><p className="eyebrow">Call</p><p>{SITE.phone}</p></div></a>
          <a href={`mailto:${SITE.email}`} className="contact__way"><Icon name="mail" /><div><p className="eyebrow">Email</p><p>{SITE.email}</p></div></a>
          <button onClick={() => open('chat')} className="contact__way"><Icon name="chat" /><div><p className="eyebrow">Live Chat</p><p>Chat with an expert now</p></div></button>
          <button onClick={() => open('appointment')} className="contact__way"><Icon name="calendar" /><div><p className="eyebrow">Appointment</p><p>Book a virtual or in-store visit</p></div></button>
          <Link to="/store-locator" className="contact__way"><Icon name="pin" /><div><p className="eyebrow">Visit</p><p>Find a store</p></div></Link>
        </aside>

        {sent ? (
          <div className="contact__done">
            <h2>Thank you</h2>
            <p className="muted">We’ve received your message and will reply within one business day.</p>
          </div>
        ) : (
          <form className="contact__form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="c-name">Full Name</label>
              <input id="c-name" name="name" className="input" value={form.name} onChange={onChange} />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>
            <div className="field">
              <label htmlFor="c-email">Email</label>
              <input id="c-email" name="email" type="email" className="input" value={form.email} onChange={onChange} />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>
            <div className="field field--full">
              <label htmlFor="c-topic">Topic</label>
              <select id="c-topic" name="topic" className="input" value={form.topic} onChange={onChange}>
                {TOPICS.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className="field field--full">
              <label htmlFor="c-msg">Message</label>
              <textarea id="c-msg" name="message" className="input" value={form.message} onChange={onChange} />
              {errors.message && <span className="field-error">{errors.message}</span>}
            </div>
            <button className="btn field--full" type="submit">Send Message</button>
          </form>
        )}
      </section>
    </>
  );
}