import { FormEvent, useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CirclePlay,
  Instagram,
  Mail,
  Menu,
  Pause,
  Play,
  Plus,
  Volume2,
  X,
} from 'lucide-react';

const images = {
  hero: 'https://images.pexels.com/photos/6697199/pexels-photo-6697199.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  movement: 'https://images.pexels.com/photos/10222726/pexels-photo-10222726.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  stillness: 'https://images.pexels.com/photos/7747182/pexels-photo-7747182.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  practice: 'https://images.pexels.com/photos/6246243/pexels-photo-6246243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  studio: 'https://images.pexels.com/photos/13811764/pexels-photo-13811764.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

type Video = { title: string; category: string; duration: string; image: string; note: string };

type Class = { name: string; day: string; time: string; level: string; format: string; description: string; detail: string };

const videos: Video[] = [
  { title: 'A softer morning', category: 'BREATH + MOVEMENT', duration: '18 min', image: images.movement, note: 'Wake up the places that have been still.' },
  { title: 'For the in-between days', category: 'SLOW FLOW', duration: '26 min', image: images.studio, note: 'A steady, unhurried practice for ordinary days.' },
  { title: 'Neck, shoulders, jaw', category: 'MOBILITY', duration: '14 min', image: images.practice, note: 'A small reset for the places that hold the day.' },
  { title: 'Begin where you are', category: 'FOUNDATIONS', duration: '31 min', image: images.stillness, note: 'No perfect poses required. Just a little curiosity.' },
];

const classes: Class[] = [
  { name: 'Morning Sthira', day: 'Tuesday', time: '07:30 – 08:30', level: 'All levels', format: 'Online · 4 weeks', description: 'A quiet start with enough movement to meet the day well.', detail: 'Four weekly sessions, recorded for you to revisit.' },
  { name: 'Slow Sunday', day: 'Sunday', time: '09:00 – 10:15', level: 'Gentle', format: 'Online · Drop-in', description: 'Longer holds, softer transitions, and nowhere else to be.', detail: 'A spacious class for rest, breath, and unhurried attention.' },
  { name: 'Begin Again', day: 'Thursday', time: '18:30 – 19:30', level: 'Foundations', format: 'Online · 6 weeks', description: 'A welcoming place to make a practice your own.', detail: 'A supportive six-week series for returning to the basics.' },
];

const journal = [
  { category: 'THE BODY', title: 'Why being flexible is not the point', excerpt: 'What I notice when people stop measuring practice by how far their body can go.', read: '6 min read', date: '12.09.24', image: images.practice },
  { category: 'EVERYDAY HEALTH', title: 'Rest is part of practice', excerpt: 'On the useful, slightly uncomfortable art of doing less before the body insists.', read: '4 min read', date: '28.08.24', image: images.stillness },
  { category: 'MOVEMENT', title: 'What sitting all day does to the way we move', excerpt: 'A few small observations from teaching people who spend most of their days in chairs.', read: '8 min read', date: '03.07.24', image: images.movement },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [activeClass, setActiveClass] = useState<Class | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loungeOpen, setLoungeOpen] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const practiceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = activeVideo || activeClass || loungeOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeVideo, activeClass, loungeOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const moveVideos = (direction: number) => {
    const next = Math.max(0, Math.min(videos.length - 1, videoIndex + direction));
    setVideoIndex(next);
    practiceRef.current?.scrollTo({ left: next * 320, behavior: 'smooth' });
  };

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="announcement-bar" role="status">
        <span className="announcement-pulse" />
        <span>New this month · Slow Sunday is open for joining</span>
        <button onClick={() => scrollTo('classes')}>See the classes <ArrowUpRight size={13} /></button>
      </div>
      <main className="site-shell">
        <section className="hero" id="home">
        <div className="hero-image" style={{ backgroundImage: `linear-gradient(180deg, rgba(42,28,20,.15), rgba(42,28,20,.5)), url(${images.hero})` }} />
        <div className="grain" />
        <header className="site-header">
          <button className="brand-mark" onClick={() => scrollTo('home')} aria-label="Go home">M<span>·</span></button>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
            <button onClick={() => scrollTo('home')}>Home</button>
            <button onClick={() => scrollTo('practice')}>Practice</button>
            <button onClick={() => scrollTo('classes')}>Classes</button>
            <button onClick={() => scrollTo('journal')}>Journal</button>
            <button onClick={() => scrollTo('contact')}>Contact</button>
          </nav>
          <button className="header-icon" aria-label="Open Instagram"><Instagram size={16} strokeWidth={1.5} /></button>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </header>
        <div className="hero-line hero-line-one" />
        <div className="hero-line hero-line-two" />
        <div className="hero-copy">
          <p className="eyebrow light">Yoga, health & the everyday body <span>·</span> Est. 1996</p>
          <h1>Make<br /><em>space</em><span className="period">.</span></h1>
          <div className="hero-bottom">
            <p>A quiet corner for practice, useful questions,<br />and finding your way back to yourself.</p>
            <button className="circle-cta" onClick={() => scrollTo('practice')} aria-label="Explore the practice"><ArrowDown size={20} /></button>
          </div>
        </div>
        <p className="hero-note">Come as you are.<br />And yes, we breathe.</p>
        <div className="hero-word">mova</div>
      </section>

      <section className="intro section-pad">
        <div className="section-kicker"><span>01</span><span className="rule" /><span>The approach</span></div>
        <div className="intro-grid">
          <h2>Practice for<br /><em>real life.</em></h2>
          <div className="intro-text">
            <p className="large-copy">I’m Meera. I teach yoga to people who have bodies, busy days, and the occasional stiff neck.</p>
            <p>My classes are a place to pay attention without taking yourself too seriously. We move, breathe, pause, and notice what changes. There is no performance to keep up with here — just a practice that can meet you where you are.</p>
            <button className="text-link" onClick={() => scrollTo('journal')}>A little more about the way I see things <ArrowUpRight size={15} /></button>
          </div>
        </div>
        <div className="intro-stamp">STHIRA<br /><span>·</span> SUKHA</div>
      </section>

      <section className="practice section-pad" id="practice">
        <div className="section-heading-row">
          <div><div className="section-kicker"><span>02</span><span className="rule" /><span>Practice library</span></div><h2>Move a little<br /><em>closer.</em></h2></div>
          <div className="heading-aside"><p>Short practices for the days you have, not the ones you planned.</p><div className="carousel-controls"><button onClick={() => moveVideos(-1)} aria-label="Previous video"><ArrowLeft size={17} /></button><button onClick={() => moveVideos(1)} aria-label="Next video"><ArrowRight size={17} /></button></div></div>
        </div>
        <div className="video-track" ref={practiceRef}>
          {videos.map((video, index) => <button className={`video-card ${index === videoIndex ? 'active' : ''}`} key={video.title} onClick={() => { setActiveVideo(video); setVideoPlaying(false); }}>
            <div className="video-image" style={{ backgroundImage: `linear-gradient(180deg, rgba(36,24,18,.02), rgba(36,24,18,.5)), url(${video.image})` }}><span className="video-play"><CirclePlay size={22} strokeWidth={1.3} /></span><span className="duration">{video.duration}</span></div>
            <div className="video-card-info"><span>{video.category}</span><strong>{video.title}</strong></div>
          </button>)}
        </div>
        <div className="track-progress"><span style={{ width: `${((videoIndex + 1) / videos.length) * 100}%` }} /></div>
      </section>

      <section className="health section-pad">
        <div className="health-top"><div className="section-kicker"><span>03</span><span className="rule" /><span>Things worth paying attention to</span></div><p>Health is less a project to perfect<br />and more a relationship to keep.</p></div>
        <div className="health-grid">
          <article><span className="card-number">01</span><div className="health-icon breath-lines" /><h3>Breathing</h3><p>Not a performance. Just information, available whenever you remember to look.</p><button onClick={() => scrollTo('journal')}>Read a note <ArrowUpRight size={14} /></button></article>
          <article className="featured-health"><img src={images.movement} alt="Woman stretching in a warm room" /><div className="featured-caption"><span>02</span><h3>Movement</h3><p>Small, consistent, and kind enough to come back to tomorrow.</p></div></article>
          <article><span className="card-number">03</span><div className="health-icon rest-circle" /><h3>Rest</h3><p>The body does some of its best thinking when we stop asking it to prove anything.</p><button onClick={() => scrollTo('journal')}>Read a note <ArrowUpRight size={14} /></button></article>
        </div>
      </section>

      <section className="classes section-pad" id="classes">
        <div className="section-heading-row"><div><div className="section-kicker"><span>04</span><span className="rule" /><span>Come practice</span></div><h2>A class for<br /><em>this season.</em></h2></div><p className="heading-aside">Small groups, live online, and taught with care. Tell me a little about where you are — I’ll help you find the right room.</p></div>
        <div className="class-list">{classes.map((item, index) => <article className="class-row" key={item.name}><span className="class-index">0{index + 1}</span><div className="class-name"><h3>{item.name}</h3><span>{item.format}</span></div><div className="class-meta"><span>{item.day}</span><strong>{item.time}</strong></div><div className="class-level"><span>{item.level}</span><p>{item.description}</p></div><button className="join-button" onClick={() => { setActiveClass(item); setSubmitted(false); }}>Join this class <Plus size={17} /></button></article>)}</div><button className="text-link lounge-link" onClick={() => setLoungeOpen(true)}>Already practicing with me? Enter the class lounge <ArrowUpRight size={15} /></button>
      </section>

      <section className="journal section-pad" id="journal">
        <div className="section-heading-row"><div><div className="section-kicker"><span>05</span><span className="rule" /><span>From the journal</span></div><h2>Notes on<br /><em>being here.</em></h2></div><button className="text-link all-notes">Read all notes <ArrowUpRight size={15} /></button></div>
        <div className="journal-grid">{journal.map((article, index) => <article className={`journal-card journal-${index + 1}`} key={article.title}><div className="journal-image" style={{ backgroundImage: `url(${article.image})` }} /> <div className="journal-meta"><span>{article.category}</span><span>{article.date}</span></div><h3>{article.title}</h3><p>{article.excerpt}</p><span className="read-time">{article.read} <ArrowUpRight size={14} /></span></article>)}</div>
      </section>

      <section className="quote-section"><div className="quote-mark">“</div><blockquote>Yoga did not make my life quieter. It helped me hear what was already there.</blockquote><p>— Ananya, practicing since 2018</p></section>

      <section className="contact section-pad" id="contact"><div className="contact-art"><div className="contact-circle" /><span>OM<br />&nbsp;OM</span></div><div className="contact-copy"><div className="section-kicker"><span>06</span><span className="rule" /><span>Stay in touch</span></div><h2>Have a<br /><em>question?</em></h2><p>Ask about a class, a sore shoulder, or whether you’re “doing it right.” (You probably are.)</p><a href="mailto:hello@meera.practice" className="contact-email">hello@meera.practice <ArrowUpRight size={18} /></a><div className="contact-links"><span><Mail size={14} /> hello@meera.practice</span><span><Instagram size={14} /> @meera.practice</span></div></div></section>

      <footer><button className="brand-mark footer-mark" onClick={() => scrollTo('home')}>M<span>·</span></button><p>Take a breath.<br />Then keep going.</p><div className="footer-nav"><button onClick={() => scrollTo('practice')}>Practice</button><button onClick={() => scrollTo('classes')}>Classes</button><button onClick={() => scrollTo('journal')}>Journal</button></div><span className="footer-om">Om.</span></footer>

      {activeVideo && <div className="overlay video-overlay" role="dialog" aria-modal="true"><button className="overlay-close" onClick={() => setActiveVideo(null)} aria-label="Close video"><X size={20} /></button><div className="player-shell"><div className="player-visual" style={{ backgroundImage: `linear-gradient(180deg, rgba(33,21,15,.05), rgba(33,21,15,.6)), url(${activeVideo.image})` }}>{videoPlaying ? <div className="playing-note">Practice in progress<br /><small>follow the breath</small></div> : <button className="big-play" onClick={() => setVideoPlaying(true)}><Play size={25} fill="currentColor" /></button>}<div className="player-controls"><button onClick={() => setVideoPlaying(!videoPlaying)} aria-label="Play or pause">{videoPlaying ? <Pause size={18} /> : <Play size={18} />}</button><div className="player-progress"><span /></div><span>00:00 / {activeVideo.duration}</span><Volume2 size={17} /><span className="fullscreen-label">FULLSCREEN</span></div></div><div className="player-info"><div><span>{activeVideo.category}</span><h2>{activeVideo.title}</h2></div><p>{activeVideo.note}</p></div></div></div>}

      {activeClass && <div className="overlay form-overlay" role="dialog" aria-modal="true"><button className="overlay-close" onClick={() => setActiveClass(null)} aria-label="Close form"><X size={20} /></button><div className="form-card">{submitted ? <div className="success-state"><div className="success-icon"><Check size={23} /></div><span className="eyebrow">Message received</span><h2>Thank you for<br /><em>sharing.</em></h2><p>I’ll read this personally and be in touch soon about <strong>{activeClass.name}</strong>. In the meantime, take one easy breath.</p><button className="solid-button" onClick={() => setActiveClass(null)}>Back to the studio <ArrowUpRight size={15} /></button></div> : <><div className="form-intro"><span className="eyebrow">{activeClass.name} · {activeClass.day}</span><h2>Before<br /><em>we begin.</em></h2><p>Tell me a little about your practice. There are no wrong answers here.</p></div><form onSubmit={submitEnquiry}><label>Your name<input required name="name" placeholder="The name you like to be called" /></label><label>Your email<input required type="email" name="email" placeholder="hello@example.com" /></label><label>What brings you to this class?<textarea required name="reason" placeholder="A sentence or two is plenty." rows={3} /></label><label>Anything I should know about your body or movement?<textarea name="notes" placeholder="Optional — share only what feels useful." rows={3} /></label><button className="solid-button" type="submit">Send my note <ArrowUpRight size={15} /></button></form></>}</div></div>}

      {loungeOpen && <div className="overlay lounge-overlay" role="dialog" aria-modal="true"><button className="overlay-close" onClick={() => setLoungeOpen(false)} aria-label="Close class lounge"><X size={20} /></button><div className="lounge-card"><div className="lounge-screen"><div className="lounge-screen-inner"><span className="live-dot">LIVE</span><p>Morning Sthira</p><strong>Class begins<br />in a moment.</strong><span className="lounge-breath">Breathe in · Breathe out</span></div></div><aside><span className="eyebrow">Your class lounge</span><h2>Morning<br /><em>Sthira.</em></h2><p>Tuesday, 07:30 – 08:30<br />with Meera</p><button className="solid-button" onClick={() => setLoungeOpen(false)}>Leave class <X size={15} /></button></aside></div></div>}
    </main>
    </>
  );
}

export default App;
