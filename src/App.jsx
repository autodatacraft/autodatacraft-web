import { useState } from 'react'

const Arrow = () => <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5" /></svg>
const Check = () => <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 10 3 3 7-7" /></svg>

const services = [
  {
    number: '01',
    title: 'Full-stack web apps',
    summary: 'A complete, reliable tool your team or customers can use from any browser.',
    examples: 'Client portals · internal tools · dashboards',
  },
  {
    number: '02',
    title: 'Python automation',
    summary: 'Turn repetitive, error-prone work into a process that runs with less effort.',
    examples: 'Reports · file processing · system connections',
  },
  {
    number: '03',
    title: 'Web scraping',
    summary: 'Collect useful public web data and deliver it in a clean, usable format.',
    examples: 'Price tracking · research · lead lists',
  },
]

const steps = [
  ['01', 'Tell me the bottleneck', 'Share the task, rough idea, or outcome you need. You do not need a technical brief.'],
  ['02', 'Get a clear plan', 'I’ll translate it into a practical scope, timeline, and price before work begins.'],
  ['03', 'Follow the progress', 'You’ll receive plain-English updates and working previews along the way.'],
  ['04', 'Launch with confidence', 'I’ll test, deploy, and explain the handover so you are never left guessing.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AutoDataCraft home" onClick={closeMenu}>
          <span className="brand-mark">A</span>
          <span>AutoDataCraft</span>
        </a>
        <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span>
        </button>
        <nav className={menuOpen ? 'open' : ''} aria-label="Main navigation">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#process" onClick={closeMenu}>How it works</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Start a conversation <Arrow /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow"><span></span> Independent developer · Available for projects</p>
            <h1>Useful software,<br /><em>built around your business.</em></h1>
            <p className="hero-lede">I build mobile/web apps, automations, and data-collection tools that remove busywork and help your business run more smoothly.</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Tell me about your project <Arrow /></a>
              <a className="text-link" href="#work">See a recent project <span>↓</span></a>
            </div>
            <div className="trust-row" aria-label="Working principles">
              <span><Check /> Clear scope</span>
              <span><Check /> Plain-English updates</span>
              <span><Check /> Built to hand over</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Illustration of a streamlined business workflow">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="mini-card card-in">
              <span className="dot coral"></span>
              <div><small>BEFORE</small><strong>4 hours of manual work</strong></div>
            </div>
            <div className="flow-line"><span>→</span></div>
            <div className="craft-core">
              <div className="core-ring"><span>ADC</span></div>
              <small>BUILT TO FIT</small>
            </div>
            <div className="mini-card card-out">
              <span className="dot green"></span>
              <div><small>AFTER</small><strong>Ready in one click</strong></div>
            </div>
            <span className="scribble">less busywork</span>
          </div>
        </section>

        <section className="intro-strip">
          <p>Good software should feel less like “technology” and more like <strong>the obvious way to get things done.</strong></p>
        </section>

        <section className="section-shell section" id="services">
          <div className="section-heading split-heading">
            <div><p className="eyebrow"><span></span> What I can build</p><h2>From messy process<br />to simple solution.</h2></div>
            <p>You bring the business problem. I’ll handle the technical decisions and keep you in the loop without drowning you in jargon.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-top"><span>{service.number}</span><div className={`service-icon icon-${service.number}`}><i></i><b></b></div></div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <small>{service.examples}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section section" id="work">
          <div className="section-shell">
            <p className="eyebrow light"><span></span> Featured work</p>
            <div className="case-grid">
              <div className="case-copy">
                <div className="case-title"><span>01 / MOBILE APP</span><h2>Boncos</h2></div>
                <p className="case-lede">A budget-pacing app designed to answer one everyday question: <strong>“How much can I safely spend today?”</strong></p>
                <div className="case-detail">
                  <div><h3>The challenge</h3><p>Most expense trackers show where money went. Boncos makes that history useful by turning a monthly budget into a clear daily spending pace.</p></div>
                  <div><h3>What I built</h3><p>The complete product—from the mobile experience and secure accounts to the behind-the-scenes system that keeps every number in sync.</p></div>
                </div>
                <div className="case-tags"><span>Product design</span><span>Mobile app</span><span>Backend system</span><span>Data dashboard</span></div>
              </div>
              <div className="phone-stage">
                <div className="phone phone-back">
                  <div className="phone-screen"><div className="phone-bar"></div><p>June overview</p><div className="chart"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div className="list-line"></div><div className="list-line short"></div></div>
                </div>
                <div className="phone phone-front">
                  <div className="phone-screen">
                    <div className="phone-bar"></div><small>GOOD MORNING</small><h3>Your pace today</h3><div className="pace-ring"><div><span>Rp</span><strong>84k</strong><small>safe to spend</small></div></div><div className="phone-stat"><span>Monthly budget</span><strong>Rp 3.2m</strong></div><div className="phone-stat"><span>On track</span><strong className="positive">Yes</strong></div>
                  </div>
                </div>
                <div className="project-note">Designed & built<br />end to end <span>↗</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell section" id="process">
          <div className="section-heading centered">
            <p className="eyebrow"><span></span> A straightforward process</p>
            <h2>No technical brief required.</h2>
            <p>Start with the problem in your own words. I’ll help shape the rest.</p>
          </div>
          <div className="process-grid">
            {steps.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className="promise">
            <p>“You’ll always know what’s happening, what comes next, and what you’re paying for.”</p>
            <span>— My working promise</span>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-grid">
            <div>
              <p className="eyebrow light"><span></span> Let’s talk</p>
              <h2>Have a task that should be <em>simpler?</em></h2>
            </div>
            <div className="contact-copy">
              <p>Send me a short note about what you’re trying to improve. I’ll reply with useful next steps—even if we’re not the right fit.</p>
              <a className="button coral-button" href="mailto:autodatacraft@gmail.com?subject=Project%20inquiry%20from%20autodatacraft.com">autodatacraft@gmail.com <Arrow /></a>
              <small>Usually replies within 1 business day</small>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="section-shell footer-inner">
          <a className="brand" href="#top"><span className="brand-mark">A</span><span>AutoDataCraft</span></a>
          <p>Practical software for real-world work.</p>
          <div>
            <a href="https://github.com/autodatacraft" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/william-limy-1235b137" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <span>© 2026 AutoDataCraft</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
