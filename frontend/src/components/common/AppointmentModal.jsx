import { useState } from 'react';
import { useUI } from '../../context/UIContext';
import Modal from './Modal';
import './AppointmentModal.css';

const EMPTY = { firstName: '', lastName: '', email: '', phone: '', zip: '', comments: '' };

const validate = (v) => {
  const e = {};
  if (!v.firstName.trim()) e.firstName = 'Required';
  if (!v.lastName.trim()) e.lastName = 'Required';
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email';
  if (v.phone && !/^[\d\s()+-]{7,}$/.test(v.phone)) e.phone = 'Enter a valid phone number';
  if (!v.zip.trim()) e.zip = 'Required';
  return e;
};

// "Book an Appointment" form. Wire `onSubmit` to your CRM / API endpoint.
export default function AppointmentModal() {
  const { overlay, close } = useUI();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleClose = () => {
    close();
    window.setTimeout(() => {
      setSent(false);
      setErrors({});
    }, 300);
  };

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    // TODO: POST values to your appointment endpoint.
    setSent(true);
    setValues(EMPTY);
  };

  const field = (name, label, type = 'text', full = false) => (
    <div className={`field ${full ? 'field--full' : ''}`}>
      <label htmlFor={`appt-${name}`}>{label}</label>
      {type === 'textarea' ? (
        <textarea id={`appt-${name}`} name={name} className="input" value={values[name]} onChange={onChange} />
      ) : (
        <input id={`appt-${name}`} name={name} type={type} className="input" value={values[name]} onChange={onChange} />
      )}
      {errors[name] && <span className="field-error">{errors[name]}</span>}
    </div>
  );

  return (
    <Modal isOpen={overlay === 'appointment'} onClose={handleClose} title="Book an Appointment">
      {sent ? (
        <div className="appt__done">
          <p className="serif">Thank you.</p>
          <p className="muted">A jewelry specialist will contact you shortly to confirm your appointment.</p>
          <button className="btn" onClick={handleClose}>Close</button>
        </div>
      ) : (
        <form className="appt__form" onSubmit={onSubmit} noValidate>
          <p className="appt__intro muted">Meet with a specialist in store or virtually to find your perfect piece.</p>
          {field('firstName', 'First Name')}
          {field('lastName', 'Last Name')}
          {field('email', 'Email', 'email')}
          {field('phone', 'Phone', 'tel')}
          {field('zip', 'Zip Code')}
          {field('comments', 'Comments', 'textarea', true)}
          <button type="submit" className="btn btn--block appt__submit">Submit</button>
        </form>
      )}
    </Modal>
  );
}