import { useState } from 'react'
import './Navbar.css'

function Navbar({
  logo = 'HannaUI',
  links = [
    { label: 'Home', href: '#home' },
    { label: 'Components', href: '#components' },
    { label: 'Docs', href: '#docs' },
    { label: 'Pricing', href: '#pricing' },
  ],
  ctaText = 'Get Started',
  onCtaClick,
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState(links[0]?.label || 'Home')

  return (
    <header className={`hanna-navbar ${className}`.trim()}>
      <nav className="navbar-shell" aria-label="Main navigation">
        <div className="navbar-brand" aria-label="HannaUI home">
          <span className="brand-mark">H</span>
          <span>{logo}</span>
        </div>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar-links ${isOpen ? 'is-open' : ''}`} id="mobile-menu">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={activeLink === link.label ? 'nav-link active' : 'nav-link'}
              onClick={() => {
                setActiveLink(link.label)
                setIsOpen(false)
              }}
              aria-current={activeLink === link.label ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button type="button" className="navbar-cta hanna-btn btn-primary" onClick={onCtaClick}>
          {ctaText}
        </button>
      </nav>
    </header>
  )
}

export default Navbar
