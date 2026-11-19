import { useEffect, useRef, useState } from 'react'
import { profile, skills, education, experience, projects, certifications, qualities, languages, T } from './data.js'
import Fractal from './Fractal.jsx'
import Attestation from './Attestation.jsx'

const store = (k, v) => { try { return v === undefined ? localStorage.getItem(k) : localStorage.setItem(k, v) } catch { return null } }
const tr = (x, lang) => (typeof x === 'string' ? x : x[lang])

const Icon = ({ d, children, ...p }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>{d ? <path d={d} /> : children}</svg>
)
const IGithub = () => <Icon><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></Icon>
const ILinkedin = () => <Icon><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" /></Icon>
const IMail = () => <Icon><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></Icon>
const ILang = () => <Icon width="18" height="18"><path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" /></Icon>
const IChev = () => <Icon width="16" height="16" d="m6 9 6 6 6-6" />
const IArrow = () => <Icon width="18" height="18" d="M5 12h14M12 5l7 7-7 7" />
const IDown = () => <Icon width="18" height="18" d="M12 5v14M5 12l7 7 7-7" />

const Socials = ({ t, className = '' }) => (
  <span className={`socials ${className}`}>
    <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><IGithub /></a>
    <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><ILinkedin /></a>
    <a href={`mailto:${profile.email}`} aria-label={t.mail}><IMail /></a>
  </span>
)

const Head = ({ n, id, children }) => (
  <header className="sec-head">
    <p className="eyebrow"><span>{n}</span><i /></p>
    <h2 id={id}>{children}</h2>
  </header>
)

export default function App() {
  const [lang, setLang] = useState(() => store('lang') || (navigator.language.startsWith('fr') ? 'fr' : 'en'))
  const [theme, setTheme] = useState(() => store('theme') || 'dark')
  const [tag, setTag] = useState(null)
  const [copied, setCopied] = useState(false)
  const [photoOk, setPhotoOk] = useState(true)
  const [menu, setMenu] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [active, setActive] = useState('top')
  const burger = useRef(null)
  const langRef = useRef(null)
  const t = T[lang]
  const tags = [...new Set(projects.flatMap((p) => p.tags))]

  const links = [['ab', t.about], ['exp', t.exp], ['pr', t.projects], ['sk', t.skills], ['ct', t.contact]]
  const rail = [['top', t.home], ['ab', t.about], ['exp', t.exp], ['pr', t.projects], ['sk', t.skills], ['ed', t.edu], ['ct', t.contact]]

  useEffect(() => { document.documentElement.lang = lang; store('lang', lang) }, [lang])
  useEffect(() => {
    document.documentElement.dataset.theme = theme; store('theme', theme)
    document.querySelector('meta[name=theme-color]')?.setAttribute('content', theme === 'dark' ? '#0a0f16' : '#f4f9fb')
  }, [theme])

  // menu sandwich : verrouille le scroll, Échap pour fermer, fermeture au passage en desktop
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', menu)
    if (!menu) return
    const onKey = (e) => { if (e.key === 'Escape') { setMenu(false); burger.current?.focus() } }
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [menu])
  useEffect(() => {
    const mq = matchMedia('(min-width: 75rem)')
    const on = () => mq.matches && setMenu(false)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  useEffect(() => {
    if (!langOpen) return
    const away = (e) => { if (!langRef.current?.contains(e.target)) setLangOpen(false) }
    const key = (e) => e.key === 'Escape' && setLangOpen(false)
    addEventListener('pointerdown', away); addEventListener('keydown', key)
    return () => { removeEventListener('pointerdown', away); removeEventListener('keydown', key) }
  }, [langOpen])

  // section active -> rail de points
  useEffect(() => {
    const ids = ['top', 'ab', 'exp', 'pr', 'sk', 'ed', 'ct']
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-35% 0px -60% 0px' })
    ids.forEach((id) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])

  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { location.href = `mailto:${profile.email}` }
  }
  const closeMenu = () => setMenu(false)

  return (
    <>
      <a className="skip" href="#main">{t.skip}</a>
      <header className="top">
        <div className="bar">
          <a className="brand" href="#top" onClick={closeMenu}>{profile.name}</a>
          <nav className="anchors" aria-label={t.nav}>
            {links.map(([id, l]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined}>{l}</a>)}
          </nav>
          <div className="actions">
            <div className="dd" ref={langRef}>
              <button className="langbtn" aria-haspopup="listbox" aria-expanded={langOpen} aria-label={t.langLabel} onClick={() => setLangOpen(!langOpen)}>
                <ILang /><b>{lang.toUpperCase()}</b><IChev />
              </button>
              {langOpen && (
                <ul className="dd-menu" role="listbox" aria-label={t.langLabel}>
                  {['fr', 'en'].map((l) => (
                    <li key={l} role="option" aria-selected={lang === l}>
                      <button lang={l} onClick={() => { setLang(l); setLangOpen(false) }}>{l === 'fr' ? 'Français' : 'English'}</button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Socials t={t} className="desk" />
            <button className="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={t.theme}>{theme === 'dark' ? '☀' : '☾'}</button>
            <a className="btn btn-cta desk" href="#ct">{t.contact}</a>
          </div>
          <button ref={burger} className={`burger ${menu ? 'is-open' : ''}`} aria-expanded={menu} aria-controls="menu" aria-label={menu ? t.closeMenu : t.menu} onClick={() => setMenu(!menu)}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Menu sandwich (mobile / tablette) */}
      <div id="menu" className="drawer" data-open={menu} inert={!menu ? '' : undefined} onClick={(e) => e.target === e.currentTarget && closeMenu()}>
        <nav className="drawer-panel" aria-label={t.nav}>
          <ul>
            {links.map(([id, l], i) => (
              <li key={id} style={{ '--i': i }}><a href={`#${id}`} onClick={closeMenu}><small>0{i + 1}</small>{l}</a></li>
            ))}
          </ul>
          <div className="drawer-tools">
            <div className="seg" role="group" aria-label={t.langLabel}>
              {['fr', 'en'].map((l) => <button key={l} lang={l} aria-pressed={lang === l} onClick={() => setLang(l)}>{l.toUpperCase()}</button>)}
            </div>
            <Socials t={t} />
          </div>
          <a className="btn btn-cta block" href="#ct" onClick={closeMenu}>{t.contact}</a>
        </nav>
      </div>

      <nav className="rail" aria-label={t.sections}>
        {rail.map(([id, l]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined}><span>{l}</span><i /></a>)}
      </nav>

      <main id="main">
        <section id="top" className="hero">
          <Fractal />
          <div className="wrap hero-inner">
            <p className={`status ${profile.available ? 'on' : ''}`}>
              {/* <i aria-hidden="true" /> */}
              <span>{profile.available ? t.avail : t.unavail}{profile.available ? t.duration : ''}</span>
            </p>
            <p className="role">{t.role}</p>
            <h1>{profile.name}</h1>
            <p className="lead">{t.intro[0]}<b>{t.intro[1]}</b>{t.intro[2]}</p>
            <div className="hero-cta">
              <a className="btn btn-cta" href="#ct">{t.contact}</a>
              <a className="btn btn-ghost" href={profile.cv[lang]} download>{t.cv}<IDown /></a>
            </div>
          </div>
        </section>

        <section id="ab" className="wrap" aria-labelledby="abh">
          <Head n="01" id="abh">{t.about}</Head>
          <div className="aboutrow">{photoOk && <img className="portrait" src={profile.photo} alt={profile.name} onError={() => setPhotoOk(false)} />}<p className="about">{t.aboutText}</p></div>
        </section>

        <section id="exp" className="wrap" aria-labelledby="ex">
          <Head n="02" id="ex">{t.exp}</Head>
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.place + e.period.fr}>
                <strong>{tr(e.title, lang)}</strong>
                <span>{tr(e.place, lang)} · {tr(e.period, lang)}</span>
                <Attestation url={e.doc} title={tr(e.title, lang)} t={t} />
                <ul>{e.bullets[lang].map((b) => <li key={b}>{b}</li>)}</ul>
              </li>
            ))}
          </ol>
        </section>

        <section id="pr" className="wrap" aria-labelledby="prh">
          <Head n="03" id="prh">{t.projects}</Head>
          <div className="filters" role="group">
            {[null, ...tags].map((x) => <button key={x ?? 'all'} aria-pressed={tag === x} onClick={() => setTag(x)}>{x ?? t.all}</button>)}
          </div>
          <div className="projects">
            {projects.filter((p) => !tag || p.tags.includes(tag)).map((p, i) => (
              <article key={p.name.fr}>
                <div className="shot"><img src={p.image} alt="" loading="lazy" onError={(e) => (e.currentTarget.parentElement.style.display = 'none')} /></div>
                <div className="pbody">
                  <p className="eyebrow sm"><span>{String(i + 1).padStart(2, '0')}</span><i /><em>{p.tags[0]}</em></p>
                  <h3>{tr(p.name, lang)}</h3>
                  <p className="meta">{tr(p.context, lang)} · {tr(p.period, lang)}</p>
                  {p.desc[lang].map((d) => <p key={d}>{d}</p>)}
                  <p className="tagrow">{p.tags.map((x) => <span key={x}>{x}</span>)}</p>
                  <p className="links">
                    {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">{t.code} <IArrow /></a>}
                    {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">{t.demo} <IArrow /></a>}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="sk" className="wrap" aria-labelledby="skh">
          <Head n="04" id="skh">{t.skills}</Head>
          <div className="skillgrid">
            {skills.map((g) => (
              <div key={tr(g.title, 'fr')} className="card">
                <h3>{tr(g.title, lang)}</h3>
                <ul className="chips">{g.items.map((i) => <li key={tr(i, 'fr')}>{tr(i, lang)}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section id="ed" className="wrap" aria-labelledby="edh">
          <Head n="05" id="edh">{t.edu}</Head>
          <ol className="timeline">
            {education.map((e) => (
              <li key={e.title.fr} className="edu">
                {e.image && <img className="logo" src={e.image} alt="" loading="lazy" onError={(ev) => (ev.currentTarget.style.display = 'none')} />}
                <div>
                  <strong>{tr(e.title, lang)}</strong>
                  <span>{e.place} · {tr(e.period, lang)}</span>
                  <Attestation url={e.doc} title={tr(e.title, lang)} t={t} />
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="wrap" aria-labelledby="ceh">
          <Head n="06" id="ceh">{t.certs}</Head>
          <div className="skillgrid">
            {certifications.map((c) => (
              <div key={tr(c.name, 'fr')} className="card"><h3>{tr(c.name, lang)}</h3><p className="meta">{tr(c.org, lang)}</p>{c.topics && <p>{tr(c.topics, lang)}</p>}<Attestation url={c.doc} title={tr(c.name, lang)} t={t} /></div>
            ))}
          </div>
        </section>

        <section className="wrap" aria-labelledby="qh">
          <Head n="07" id="qh">{t.more}</Head>
          <ul className="chips">{qualities[lang].map((q) => <li key={q}>{q}</li>)}</ul>
          <h3>{t.langs}</h3>
          <ul className="chips">{languages.map((l) => <li key={l.fr}>{l[lang]}</li>)}</ul>
        </section>

        <section id="ct" className="wrap contact" aria-labelledby="cth">
          <Head n="08" id="cth">{t.contact}</Head>
          <div className="contact-card">
            <div className="contact-info">
              <button className="mail" onClick={copy} title={t.copy}>{profile.email}<small aria-live="polite">{copied ? t.copied : t.copy}</small></button>
              <p className="meta">{t.mobility} : {t.region}</p>
            </div>
            <a className="btn btn-cta" href={profile.cv[lang]} download>{t.cv}<IDown /></a>
          </div>
          <div className="contact-actions">
            <a href={`mailto:${profile.email}`}><IMail />{t.mail}<IArrow /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><ILinkedin />{t.linkedinCta}<IArrow /></a>
            <a href={profile.github} target="_blank" rel="noreferrer"><IGithub />GitHub<IArrow /></a>
          </div>
        </section>
      </main>

      <footer>
        <div className="foot">
          <div><a className="brand" href="#top">{profile.name}</a><p>{t.rights}</p></div>
          <div className="foot-mid"><strong>{t.follow}</strong><Socials t={t} className="boxed" /></div>
          <div className="foot-end"><p>{t.region}</p><p>© {new Date().getFullYear()} {profile.name}</p></div>
        </div>
      </footer>
    </>
  )
}
