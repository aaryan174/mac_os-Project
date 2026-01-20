import React from 'react'
import "./Dock.scss"

const Dock = () => {
  return (
  <footer className='dock'>
    <div className="icon github"><img src="/doc_icons/github.svg" alt="github" /></div>
    <div className="icon note"><img src="/doc_icons/note.svg" alt="note" /></div>
    <div className="icon pdf"><img src="/doc_icons/pdf.svg" alt="pdf" /></div>
    <div className="icon calender"><img src="/doc_icons/calender.svg" alt="calender" /></div>
    <div className="icon spotify"><img src="/doc_icons/spotify.svg" alt="spotify" /></div>
    <div className="icon mail"><img src="/doc_icons/mail.svg" alt="mail" /></div>
    <div className="icon cli"><img src="/doc_icons/cli.svg" alt="cli" /></div>
    <div className="icon link"><img src="/doc_icons/link.svg" alt="link" /></div>
  </footer>
  )
}

export default Dock
