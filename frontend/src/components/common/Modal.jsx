import useEscapeKey from '../../hooks/useEscapeKey';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import Icon from './Icon';
import './Modal.css';

export default function Modal({ isOpen, onClose, title, children, size = 'md' }) {
  useLockBodyScroll(isOpen);
  useEscapeKey(onClose, isOpen);
  if (!isOpen) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={title}>
      <div className="modal__scrim" onClick={onClose} />
      <div className={`modal__panel modal__panel--${size}`}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          <Icon name="close" />
        </button>
        {title && <h2 className="modal__title">{title}</h2>}
        {children}
      </div>
    </div>
  );
}