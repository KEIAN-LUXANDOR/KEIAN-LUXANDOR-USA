import { useEffect, useRef, useState } from 'react';
import { useUI } from '../../context/UIContext';
import Icon from './Icon';
import './ChatWidget.css';

// Floating "Chat with an Expert" launcher + demo panel.
// Replace the canned reply with your live-chat provider's SDK.
export default function ChatWidget() {
  const { overlay, open, close } = useUI();
  const isOpen = overlay === 'chat';
  const [messages, setMessages] = useState([
    { from: 'agent', text: 'Hello! I’m your jewelry specialist. How can I help you today?' },
  ]);
  const [draft, setDraft] = useState('');
  const [lift, setLift] = useState(0);
  const listRef = useRef(null);

  // When the black bar at the very bottom of the footer scrolls into view,
  // move the button up so it sits above the bar instead of covering it.
  useEffect(() => {
    const update = () => {
      const bar = document.querySelector('.footer__bottom');
      const overlap = bar ? window.innerHeight - bar.getBoundingClientRect().top : 0;
      setLift(Math.max(0, Math.round(overlap)));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, isOpen]);

  const send = (e) => {
    e.preventDefault();
    if (!draft.trim()) return;
    setMessages((m) => [...m, { from: 'me', text: draft.trim() }]);
    setDraft('');
    window.setTimeout(() => {
      setMessages((m) => [
        ...m,
        { from: 'agent', text: 'Thank you! A specialist will join this chat in a moment. Meanwhile, you can also book an appointment.' },
      ]);
    }, 700);
  };

  return (
    <>
      {!isOpen && (
        <button
          className="chat-launcher"
          onClick={() => open('chat')}
          style={lift ? { transform: `translateY(-${lift}px)` } : undefined}
        >
          <Icon name="chat" size={18} />
          <span>Chat with an Expert</span>
        </button>
      )}
      {isOpen && (
        <section className="chat" role="dialog" aria-label="Chat with an expert">
          <header className="chat__head">
            <div>
              <p className="serif chat__title">Chat with an Expert</p>
              <p className="chat__status"><span /> Specialists online</p>
            </div>
            <button onClick={close} aria-label="Close chat"><Icon name="close" /></button>
          </header>
          <div className="chat__list" ref={listRef}>
            {messages.map((m, i) => (
              <p key={i} className={`chat__msg chat__msg--${m.from}`}>{m.text}</p>
            ))}
          </div>
          <form className="chat__form" onSubmit={send}>
            <input className="input" value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Type your message…" aria-label="Message" />
            <button className="btn" type="submit">Send</button>
          </form>
        </section>
      )}
    </>
  );
}