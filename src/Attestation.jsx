import { useEffect, useRef, useState } from 'react'

// Le bouton n'apparaît que si le fichier existe réellement dans /public.
function useFileExists(url) {
  const [ok, setOk] = useState(false)
  useEffect(() => {
    if (!url) return setOk(false)
    let alive = true
    fetch(url, { method: 'HEAD' })
      .then((r) => alive && setOk(r.ok && !(r.headers.get('content-type') || '').includes('text/html')))
      .catch(() => alive && setOk(false))
    return () => { alive = false }
  }, [url])
  return ok
}

export default function Attestation({ url, title, t }) {
  const ok = useFileExists(url)
  const ref = useRef(null)
  if (!ok) return null
  const isPdf = /\.pdf($|\?)/i.test(url)
  return (
    <>
      <span className="doc-actions">
        <button className="mini" onClick={() => ref.current.showModal()}>{t.viewDoc}</button>
        <a className="mini" href={url} download>{t.downloadDoc} ↓</a>
      </span>
      <dialog ref={ref} className="viewer" aria-label={title} onClick={(e) => e.target === ref.current && ref.current.close()}>
        <div className="viewer-head">
          <strong>{title}</strong>
          <span>
            <a className="mini" href={url} download>{t.downloadDoc} ↓</a>
            <button className="mini" onClick={() => ref.current.close()}>{t.close}</button>
          </span>
        </div>
        {isPdf
          ? <object data={url} type="application/pdf" className="viewer-body"><p style={{ padding: '1rem' }}><a href={url} target="_blank" rel="noreferrer">{t.openDoc}</a></p></object>
          : <img src={url} alt={title} className="viewer-img" />}
      </dialog>
    </>
  )
}
