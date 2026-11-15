import { useEffect, useState } from 'react'
import { profile, skills, education, experience, projects, certifications, qualities, languages, T } from './data.js'
import Fractal from './Fractal.jsx'
import Attestation from './Attestation.jsx'

const store = (k, v) => { try { return v === undefined ? localStorage.getItem(k) : localStorage.setItem(k, v) } catch { return null } }
const tr = (x, lang) => (typeof x === 'string' ? x : x[lang])
const initials = profile.name.split(' ').map((w) => w[0]).join('')

export default function App() {
  const [lang, setLang] = useState(() => store('lang') || (navigator.language.startsWith('fr') ? 'fr' : 'en'))
  const [theme, setTheme] = useState(() => store('theme') || 'light') // clair par défaut
  const [tag, setTag] = useState(null)
  const [copied, setCopied] = useState(false)
  const [photoOk, setPhotoOk] = useState(true)
  const t = T[lang]
  const tags = [...new Set(projects.flatMap((p) => p.tags))]

  useEffect(() => { document.documentElement.lang = lang; store('lang', lang) }, [lang])
  useEffect(() => { document.documentElement.dataset.theme = theme; store('theme', theme) }, [theme])

  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { location.href = `mailto:${profile.email}` }
  }

  return (
    <>
      <a className="skip" href="#main">{t.skip}</a>
      <header className="top">
        <div className="bar">
          {photoOk ? <img className="avatar" src={profile.photo} alt="" onError={() => setPhotoOk(false)} /> : <span className="avatar ini" aria-hidden="true">{initials}</span>}
          <div className="who"><strong>{profile.name}</strong><span>{t.role}</span></div>
          <nav className="anchors" aria-label="Sections">
            <a href="#exp">{t.exp}</a><a href="#pr">{t.projects}</a><a href="#sk">{t.skills}</a><a href="#ct">{t.contact}</a>
          </nav>
          <div className="seg" role="group" aria-label={t.langLabel}>
            {['fr', 'en'].map((l) => <button key={l} lang={l} aria-pressed={lang === l} onClick={() => setLang(l)}>{l.toUpperCase()}</button>)}
          </div>
          <button className="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={t.theme}>{theme === 'dark' ? '☀' : '☾'}</button>
        </div>
      </header>

      <main id="main">
        <section className="hero">
          <Fractal />
          <div className="hero-inner">
            <p className={`status ${profile.available ? 'on' : ''}`}><i />{profile.available ? t.avail : t.unavail}</p>
            <h1>{profile.name}</h1>
            <p className="lead">{t.intro[0]}<b>{t.intro[1]}</b>{t.intro[2]}</p>
          </div>
        </section>

        <section aria-labelledby="ab"><h2 id="ab">{t.about}</h2><div className="aboutrow">{photoOk && <img className="portrait" src={profile.photo} alt={profile.name} />}<p className="about">{t.aboutText}</p></div></section>

        <section id="exp" aria-labelledby="ex">
          <h2 id="ex">{t.exp}</h2>
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

        <section id="pr" aria-labelledby="prh">
          <h2 id="prh">{t.projects}</h2>
          <div className="filters" role="group">
            {[null, ...tags].map((x) => <button key={x ?? 'all'} aria-pressed={tag === x} onClick={() => setTag(x)}>{x ?? t.all}</button>)}
          </div>
          <div className="projects">
            {projects.filter((p) => !tag || p.tags.includes(tag)).map((p) => (
              <article key={p.name.fr}>
                <div className="shot"><img src={p.image} alt="" loading="lazy" onError={(e) => (e.currentTarget.style.visibility = 'hidden')} /></div>
                <h3>{tr(p.name, lang)}</h3>
                <p className="meta">{tr(p.context, lang)} · {tr(p.period, lang)}</p>
                {p.desc[lang].map((d) => <p key={d}>{d}</p>)}
                <p className="tagrow">{p.tags.map((x) => <span key={x}>{x}</span>)}</p>
                <p className="links">
                  {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">{t.code}</a>}
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">{t.demo}</a>}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="sk" aria-labelledby="skh">
          <h2 id="skh">{t.skills}</h2>
          <div className="skillgrid">
            {skills.map((g) => (
              <div key={tr(g.title, 'fr')} className="card">
                <h3>{tr(g.title, lang)}</h3>
                <ul className="chips">{g.items.map((i) => <li key={tr(i, 'fr')}>{tr(i, lang)}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="edh">
          <h2 id="edh">{t.edu}</h2>
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

        <section aria-labelledby="ceh">
          <h2 id="ceh">{t.certs}</h2>
          <div className="skillgrid">
            {certifications.map((c) => (
              <div key={tr(c.name, 'fr')} className="card"><h3>{tr(c.name, lang)}</h3><p className="meta">{tr(c.org, lang)}</p>{c.topics && <p>{tr(c.topics, lang)}</p>}<Attestation url={c.doc} title={tr(c.name, lang)} t={t} /></div>
            ))}
          </div>
        </section>

        <section aria-labelledby="qh">
          <h2 id="qh">{t.more}</h2>
          <ul className="chips">{qualities[lang].map((q) => <li key={q}>{q}</li>)}</ul>
          <h3>{t.langs}</h3>
          <ul className="chips">{languages.map((l) => <li key={l.fr}>{l[lang]}</li>)}</ul>
        </section>

        <section id="ct" className="contact">
          <div>
            <h2>{t.contact}</h2>
            <button className="mail" onClick={copy} title={t.copy}>{profile.email}<small aria-live="polite">{copied ? t.copied : t.copy}</small></button>
            <h2>{t.mobility}</h2>
            <p>{t.region}</p>
            <p className="links">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </p>
          </div>
          <a className="cta" href={profile.cv[lang]} download>{t.cv}<span aria-hidden="true">↓</span></a>
        </section>
      </main>

      <footer><span>{new Date().getFullYear()} {profile.name}</span></footer>
    </>
  )
}
