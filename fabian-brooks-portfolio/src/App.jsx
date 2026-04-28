import { useEffect, useState } from 'react'

// =============================================================
// CONTENT — edit these objects to update the portfolio
// =============================================================

const PROFILE = {
  name: 'Fabian Brooks',
  location: 'Federal Way, Washington',
  email: 'fabian.brooks.one@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fabian-brooks/',
  github: 'https://github.com/FabianB14',
  itchio: 'https://aieseattle.itch.io/splashseek',
}

const GAMES = [
  {
    n: '01',
    title: 'Vanguard of the Forgotten',
    role: 'Founder · Designer · Engineer',
    year: 'In development',
    studio: 'Interverse Studios',
    blurb:
      'A mobile fighting game built on the Interverse SDK. Five champions, each from a martial tradition history overlooked, defending a heritage the world chose to forget. The first title shipping on Interverse — the launch of the ecosystem.',
    stack: ['Unreal Engine 5', 'Mobile', 'Interverse SDK', 'Blueprints'],
    link: null,
    linkLabel: 'Coming soon',
  },
  {
    n: '02',
    title: 'License to Grill',
    role: 'Technical Designer',
    year: '2025',
    studio: 'AIE Seattle · Major Production',
    blurb:
      'A PVP multiplayer 3rd-person shooter for up to eight players. Pick your meat character and cook your friends with environmental traps, wacky weapons, and a trusty frying pan.',
    stack: ['Unreal Engine 5', 'Multiplayer', 'Steam'],
    link: 'https://aieseattle.itch.io/licensetogrill',
    linkLabel: 'Play on itch.io',
  },
  {
    n: '03',
    title: 'Splash & Seek: Bear vs Fish',
    role: 'Technical Designer',
    year: '2024',
    studio: 'AIE Seattle · Team Condor Halcón',
    blurb:
      'An asymmetrical multiplayer hide-and-seek set in a vibrant water park. One player hunts as the Bear; the rest hide as Fish. Stealth, strategy, and environment interaction in equal measure.',
    stack: ['Unreal Engine 5', 'Asymmetric Multiplayer', 'Stealth'],
    link: 'https://aieseattle.itch.io/splashseek',
    linkLabel: 'Play on itch.io',
  },
  {
    n: '04',
    title: 'Luminara',
    role: 'Founder · Lead Engineer',
    year: 'In development',
    studio: 'Interverse LLC',
    blurb:
      'An AR plant cultivation game built around a real diploid genetics system: Mendelian inheritance, mutation, rarity tiers, and a growth simulation that responds to environmental factors and player care.',
    stack: ['Unreal Engine 5', 'AR', 'Genetics System', 'C++'],
    link: null,
    linkLabel: 'Coming soon',
  },
]

const INTERVERSE_STACK = [
  { label: 'Backend', value: 'Python · FastAPI' },
  { label: 'Game SDK (Unreal)', value: 'C++ · UE5' },
  { label: 'Game SDK (Unity)', value: 'C# · Unity' },
  { label: 'Frontend', value: 'React · JavaScript' },
]

const INTERVERSE_PRODUCTS = [
  {
    name: 'Blockchain',
    status: 'Complete',
    desc: 'Core ledger powering ownership, marketplace settlement, and cross-game state for everything in the Interverse ecosystem.',
  },
  {
    name: 'Wallet',
    status: 'Complete',
    desc: 'Player-facing wallet with abstraction layer so games can offer real ownership without ever forcing players to think about crypto.',
  },
  {
    name: 'Marketplace',
    status: 'Complete',
    desc: 'Listing, discovery, and settlement for cosmetics, items, and currency. Shared infrastructure every Interverse title plugs into.',
  },
  {
    name: 'Unreal SDK',
    status: 'In testing',
    desc: 'C++ / UE5 plugin exposing wallet, ownership, marketplace, and progression as Blueprint-callable nodes. First SDK to ship.',
  },
  {
    name: 'Unity SDK',
    status: 'In development',
    desc: 'C# / Unity package mirroring the Unreal SDK surface so Unity studios get the same Interverse features with the same patterns.',
  },
  {
    name: 'RPG Maker SDK',
    status: 'In development',
    desc: 'Plugin bringing Interverse ownership and currency into RPG Maker projects — opening the ecosystem to a creator community most platforms ignore.',
  },
  {
    name: 'Vanguard of the Forgotten',
    status: 'In development',
    desc: 'The first game integrating with Interverse — kicks off the ecosystem. Mobile fighter with on-chain champion ownership, fight-history records, and portable currency earned in-fight.',
  },
  {
    name: 'Luminara',
    status: 'In development',
    desc: 'Flagship AR title and second proof point for the Interverse SDK suite. Showcases the genetics, growth, and AR systems running on top of the platform.',
  },
]

const TIMELINE = [
  {
    when: '2023 — present',
    what: 'Founder & Lead Engineer · Interverse LLC',
    note:
      'Building a multi-language software platform: blockchain, wallet, and marketplace shipped; Unreal SDK in testing, Unity and RPG Maker SDKs in development. Vanguard of the Forgotten is the first title integrating with the platform.',
  },
  {
    when: '2024 — 2025',
    what: 'Game Design & Production · Academy of Interactive Entertainment',
    note: 'Graduated July 2025. Shipped two team productions on AIE Seattle\'s itch.io.',
  },
  {
    when: '2019 — 2023',
    what: 'Software Development Engineer · Amazon Alexa Video',
    note: 'Four years building consumer-scale video features for Alexa devices.',
  },
  {
    when: '2004 — 2018',
    what: 'United States Army · Staff Sergeant (Retired)',
    note: 'Fourteen years of service. Discipline, leadership under pressure, ship-the-mission mindset.',
  },
]

const SKILLS = [
  { group: 'Languages', items: ['C++', 'C#', 'Python', 'JavaScript / TypeScript', 'Java'] },
  { group: 'Engines', items: ['Unreal Engine 5', 'Unity'] },
  { group: 'Web & Backend', items: ['React', 'FastAPI', 'Node.js', 'AWS'] },
  { group: 'Tooling', items: ['Git', 'Perforce', 'CMake', 'CLion / VS Code'] },
]

// =============================================================
// COMPONENTS
// =============================================================

function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#top" className="nav__brand">
        <span className="nav__brand-mark">FB</span>
        <span className="nav__brand-text">Fabian Brooks</span>
      </a>
      <ul className="nav__links">
        <li><a href="#work">Work</a></li>
        <li><a href="#interverse">Interverse</a></li>
        <li><a href="#background">Background</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__grid">
        <div className="hero__main">
          <p className="eyebrow reveal" style={{ '--d': '0ms' }}>
            <span className="dot" /> Available for fellowships & contract work
          </p>
          <h1 className="hero__title reveal" style={{ '--d': '120ms' }}>
            Building games.<br />
            Building software.<br />
            <em>Building Interverse.</em>
          </h1>
          <p className="hero__sub reveal" style={{ '--d': '260ms' }}>
            Game developer, software engineer, and founder of <strong>Interverse LLC</strong>.
            Fourteen-year Army veteran. Four years at Amazon Alexa Video. Currently building
            Interverse and shipping <strong>Vanguard of the Forgotten</strong> — the first
            game launching on the Interverse SDK.
          </p>
          <div className="hero__cta reveal" style={{ '--d': '380ms' }}>
            <a className="btn btn--primary" href="#work">View work</a>
            <a className="btn btn--ghost" href="#contact">Get in touch →</a>
          </div>
        </div>

        <aside className="hero__card reveal" style={{ '--d': '500ms' }}>
          <div className="hero__card-row">
            <span className="mono-label">Based</span>
            <span>{PROFILE.location}</span>
          </div>
          <div className="hero__card-row">
            <span className="mono-label">Now</span>
            <span>Interverse · Vanguard of the Forgotten</span>
          </div>
          <div className="hero__card-row">
            <span className="mono-label">Building</span>
            <span>Interverse SDK · VotF · Luminara</span>
          </div>
          <div className="hero__card-row">
            <span className="mono-label">Stack</span>
            <span>UE5 · Unity · Python · React</span>
          </div>
        </aside>
      </div>

      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {Array(2).fill(null).map((_, i) => (
            <span key={i}>
              FOUNDER · GAME DEVELOPER · SOFTWARE ENGINEER · VETERAN · EX-AMAZON · UE5 · UNITY · BUILDING INTERVERSE · VANGUARD OF THE FORGOTTEN ·&nbsp;
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section className="section" id={id}>
      <div className="section__head">
        <span className="mono-label section__eyebrow">{eyebrow}</span>
        <h2 className="section__title">{title}</h2>
      </div>
      {children}
    </section>
  )
}

function GameCard({ game, featured }) {
  return (
    <article className={`game ${featured ? 'game--featured' : ''}`}>
      <div className="game__top">
        <span className="game__n">{game.n}</span>
        <span className="mono-label">{game.year}</span>
      </div>
      <h3 className="game__title">{game.title}</h3>
      <p className="game__meta">
        <span className="game__role">{game.role}</span>
        <span className="game__sep">·</span>
        <span>{game.studio}</span>
      </p>
      <p className="game__blurb">{game.blurb}</p>
      <ul className="pills">
        {game.stack.map((s) => (
          <li key={s} className="pill">{s}</li>
        ))}
      </ul>
      <div className="game__cta">
        {game.link ? (
          <a href={game.link} target="_blank" rel="noreferrer" className="link-arrow">
            {game.linkLabel} <span aria-hidden>↗</span>
          </a>
        ) : (
          <span className="link-arrow link-arrow--muted">{game.linkLabel}</span>
        )}
      </div>
    </article>
  )
}

function Work() {
  return (
    <Section id="work" eyebrow="Selected Work · 01" title="Games & shipped projects">
      <div className="games">
        <GameCard game={GAMES[0]} featured />
        <div className="games__row games__row--three">
          <GameCard game={GAMES[1]} />
          <GameCard game={GAMES[2]} />
          <GameCard game={GAMES[3]} />
        </div>
      </div>
    </Section>
  )
}

function Interverse() {
  return (
    <Section id="interverse" eyebrow="Selected Work · 02" title="Interverse LLC">
      <div className="interverse">
        <div className="interverse__intro">
          <p className="interverse__lede">
            Interverse is the company. Everything I build feeds it. The vision is a
            multi-language platform where games, marketplaces, and creator tools share one backend
            and one set of SDKs — so a feature shipped once works across every product.
          </p>
        </div>

        <div className="stack">
          <span className="mono-label stack__label">Platform stack</span>
          <ul className="stack__list">
            {INTERVERSE_STACK.map((s) => (
              <li key={s.label} className="stack__item">
                <span className="mono-label">{s.label}</span>
                <span className="stack__value">{s.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="products">
          {INTERVERSE_PRODUCTS.map((p) => (
            <article key={p.name} className="product">
              <div className="product__head">
                <h3 className="product__name">{p.name}</h3>
                <span className="badge">{p.status}</span>
              </div>
              <p className="product__desc">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Background() {
  return (
    <Section id="background" eyebrow="About · 03" title="The path here">
      <div className="bg-grid">
        <div className="bio">
          <p>
            I grew up in New Orleans. The military taught me to plan, lead, and finish what I start.
            Amazon taught me to ship code at scale. AIE taught me to make games. Interverse is where
            all of that compounds.
          </p>
          <p>
            Everything I do now points at the same thing: build Interverse into a real company,
            put my family on solid ground, and prove that the path I took — service, then big tech,
            then school, then founding — is a path other people can walk too.
          </p>
        </div>

        <ol className="timeline">
          {TIMELINE.map((t, i) => (
            <li key={i} className="timeline__item">
              <div className="timeline__when mono-label">{t.when}</div>
              <div className="timeline__body">
                <h4 className="timeline__what">{t.what}</h4>
                <p className="timeline__note">{t.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="skills">
        <span className="mono-label skills__label">Toolkit</span>
        <div className="skills__grid">
          {SKILLS.map((s) => (
            <div key={s.group} className="skills__group">
              <h5 className="skills__heading">{s.group}</h5>
              <ul className="skills__list">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <span className="mono-label">Contact · 04</span>
        <h2 className="contact__title">
          Have something to build? <em>Let&apos;s talk.</em>
        </h2>
        <p className="contact__sub">
          Open to AI fellowship work, contract engineering, game design contracts, and serious
          conversations about Interverse partnerships.
        </p>
        <div className="contact__links">
          <a href={`mailto:${PROFILE.email}`} className="contact__link">
            <span className="mono-label">Email</span>
            <span className="contact__link-value">{PROFILE.email}</span>
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="contact__link">
            <span className="mono-label">LinkedIn</span>
            <span className="contact__link-value">/in/fabian-brooks ↗</span>
          </a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="contact__link">
            <span className="mono-label">GitHub</span>
            <span className="contact__link-value">@FabianB14 ↗</span>
          </a>
          <a href={PROFILE.itchio} target="_blank" rel="noreferrer" className="contact__link">
            <span className="mono-label">itch.io</span>
            <span className="contact__link-value">Splash &amp; Seek ↗</span>
          </a>
        </div>
      </div>
      <footer className="footer">
        <span>© {new Date().getFullYear()} Fabian Brooks</span>
        <span className="footer__sep">·</span>
        <span>Federal Way, WA</span>
        <span className="footer__sep">·</span>
        <span>Hand-built. No template.</span>
      </footer>
    </section>
  )
}

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Interverse />
        <Background />
        <Contact />
      </main>
    </>
  )
}
