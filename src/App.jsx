import { useState } from 'react'
import { Alert, Badge, Button, Card, Input, Modal, Navbar } from './components'
import './App.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Components', href: '#components' },
  { label: 'Documentation', href: '#docs' },
  { label: 'Accessibility', href: '#accessibility' },
  { label: 'About', href: '#about' },
]

const componentCards = [
  {
    name: 'Button',
    description: 'Interactive CTAs with multiple variants and states.',
    variants: ['primary', 'secondary', 'success', 'danger', 'warning', 'ghost'],
  },
  {
    name: 'Input',
    description: 'Accessible form fields with validation and helper text.',
    variants: ['text', 'email', 'password', 'number', 'search'],
  },
  {
    name: 'Card',
    description: 'Flexible content containers for products, profiles, and docs.',
    variants: ['basic', 'image', 'profile', 'product'],
  },
  {
    name: 'Modal',
    description: 'Dialog patterns for important confirmations and actions.',
    variants: ['default', 'confirm', 'danger'],
  },
  {
    name: 'Badge',
    description: 'Compact labels for status, release, or category context.',
    variants: ['success', 'warning', 'danger', 'info', 'neutral', 'primary'],
  },
  {
    name: 'Alert',
    description: 'User feedback messages with accessible dismiss behavior.',
    variants: ['success', 'info', 'warning', 'error'],
  },
  {
    name: 'Navbar',
    description: 'Responsive navigation for docs, marketing, or product pages.',
    variants: ['desktop', 'tablet', 'mobile'],
  },
]

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [showAlert, setShowAlert] = useState(true)

  return (
    <div className="docs-shell">
      <aside className="sidebar" aria-label="Documentation sidebar">
        <div className="sidebar-brand">
          <span className="brand-mark">H</span>
          <div>
            <div className="brand-name">HannaUI</div>
            <div className="brand-subtitle">Beautiful. Accessible. Reusable.</div>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Sidebar navigation">
          <div className="nav-group-label">Overview</div>
          <a href="#home" className="nav-item active">Home</a>
          <div className="nav-group-label">Components</div>
          {['Button', 'Input', 'Card', 'Modal', 'Badge', 'Alert', 'Navbar'].map((item) => (
            <a key={item} href="#components" className="nav-item">
              {item}
            </a>
          ))}
          <a href="#docs" className="nav-item">Documentation</a>
          <a href="#docs" className="nav-item">Getting Started</a>
          <a href="#accessibility" className="nav-item">Accessibility</a>
          <a href="#about" className="nav-item">About</a>
        </nav>
      </aside>

      <main className="content-panel">
        <Navbar links={navItems} ctaText="GitHub" onCtaClick={() => window.open('https://github.com', '_blank', 'noopener,noreferrer')} />

        <header className="topbar" aria-label="Documentation toolbar">
          <label className="search-field" htmlFor="component-search">
            <span aria-hidden="true">⌕</span>
            <input
              id="component-search"
              type="search"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              placeholder="Search components"
              aria-label="Search components"
            />
          </label>

          <div className="topbar-actions">
            <button type="button" className="theme-toggle" aria-label="Toggle theme">
              ☀︎
            </button>
            <Button variant="secondary" size="small" onClick={() => window.open('https://github.com', '_blank', 'noopener,noreferrer')}>
              GitHub
            </Button>
          </div>
        </header>

        <div className="page-content">
          <section className="hero-section" id="home">
            <div className="hero-copy">
              <Badge variant="primary" size="medium">
                Release ready
              </Badge>
              <h1>HannaUI</h1>
              <p className="hero-subtitle">Beautiful. Accessible. Reusable.</p>
              <p className="hero-description">
                A modern React component library with customizable components, built for developers.
              </p>

              <div className="hero-actions">
                <Button variant="primary" size="large" onClick={() => setShowModal(true)}>
                  Explore Components
                </Button>
                <Button variant="secondary" size="large" onClick={() => window.open('https://github.com', '_blank', 'noopener,noreferrer')}>
                  View on GitHub
                </Button>
              </div>

              <div className="feature-badges" aria-label="Key library benefits">
                {['Fast', 'Accessible', 'Customizable', 'Responsive'].map((feature) => (
                  <Badge key={feature} variant="neutral" size="medium">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="visual-window">
                <div className="window-header">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="window-body">
                  <div className="mini-card card-1">
                    <div className="mini-graph" />
                    <div className="mini-pill" />
                  </div>
                  <div className="mini-card card-2">
                    <div className="mini-profile" />
                    <div>
                      <span className="mini-line short" />
                      <span className="mini-line medium" />
                    </div>
                  </div>
                  <div className="mini-board">
                    <span className="mini-chip primary">UI</span>
                    <span className="mini-chip secondary">Docs</span>
                    <span className="mini-chip success">A11y</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="components-section" id="components">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Library</p>
                <h2>Available Components</h2>
              </div>
              <Button variant="secondary" size="small">
                Explore all
              </Button>
            </div>

            <div className="component-grid">
              {componentCards.map((item) => (
                <Card key={item.name} className="component-card" title={item.name} description={item.description} footer={
                  <div className="card-actions">
                    <Button variant="ghost" size="small">Code</Button>
                    <Button variant="secondary" size="small">Docs</Button>
                  </div>
                }>
                  <div className="component-preview">
                    {item.name === 'Button' && (
                      <div className="button-stack">
                        <Button variant="primary" size="small">Primary</Button>
                        <Button variant="secondary" size="small">Secondary</Button>
                      </div>
                    )}

                    {item.name === 'Input' && (
                      <Input
                        label="Email"
                        placeholder="example@hannaui.dev"
                        value={searchValue}
                        onChange={(event) => setSearchValue(event.target.value)}
                        type="email"
                        helperText="Optional assistant access"
                      />
                    )}

                    {item.name === 'Card' && (
                      <div className="mini-preview-grid">
                        <div className="preview-tile" />
                        <div className="preview-tile alt" />
                        <div className="preview-tile tall" />
                      </div>
                    )}

                    {item.name === 'Modal' && (
                      <Button variant="primary" size="small" onClick={() => setShowModal(true)}>
                        Open modal
                      </Button>
                    )}

                    {item.name === 'Badge' && (
                      <div className="badge-row">
                        <Badge variant="success">New</Badge>
                        <Badge variant="warning">Beta</Badge>
                        <Badge variant="info">Popular</Badge>
                      </div>
                    )}

                    {item.name === 'Alert' && (
                      <Alert type="success" title="Saved" message="Changes were applied successfully." />
                    )}

                    {item.name === 'Navbar' && (
                      <div className="mini-nav">
                        <span>Home</span>
                        <span className="active">Docs</span>
                        <span>API</span>
                      </div>
                    )}
                  </div>

                  <div className="variant-list">
                    {item.variants.map((variant) => (
                      <Badge key={variant} variant="neutral" size="small">
                        {variant}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="docs-section" id="docs">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Documentation</p>
                <h2>Design system essentials</h2>
              </div>
            </div>

            <div className="docs-grid">
              <div className="info-column">
                <p className="lead">Purpose-built patterns for developer experiences, product interfaces, and polished docs.</p>
                <Button variant="primary" size="medium" onClick={() => setShowModal(true)}>
                  Open demo modal
                </Button>
              </div>

              <div className="demo-column">
                <Input
                  label="Work email"
                  type="email"
                  placeholder="team@yourcompany.com"
                  value="hello@hannaui.dev"
                  onChange={() => {}}
                  helperText="This field is connected to an accessible label and error region."
                />

                <div className="demo-stack">
                  <Button variant="success" size="medium">Ship updates</Button>
                  <Button variant="danger" size="medium">Remove draft</Button>
                </div>

                {showAlert && (
                  <Alert
                    type="info"
                    title="New component available"
                    message="The accessibility section shows keyboard guidance and ARIA patterns for inclusive design."
                    dismissible
                    onClose={() => setShowAlert(false)}
                  />
                )}
              </div>
            </div>
          </section>

          <section className="accessibility-section" id="accessibility">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Accessibility</p>
                <h2>Built for inclusive interfaces</h2>
              </div>
            </div>

            <div className="accessibility-grid">
              <Card title="Semantic HTML" description="Each component uses native elements like button, label, nav, and dialog semantics before adding ARIA.">
                <Badge variant="primary">aria-labelledby</Badge>
              </Card>
              <Card title="Keyboard support" description="Focus rings, Enter/Space interactions, and Escape handling support smooth keyboard use.">
                <Badge variant="success">Focus visible</Badge>
              </Card>
              <Card title="Validation states" description="Form inputs reinforce invalid states with aria-invalid and descriptive error messaging.">
                <Badge variant="warning">aria-invalid</Badge>
              </Card>
              <Card title="Screen-reader friendly" description="Accessible labels, descriptions, and live regions help content remain understandable to assistive tech.">
                <Badge variant="info">aria-describedby</Badge>
              </Card>
            </div>
          </section>

          <section className="about-section" id="about">
            <div className="about-card">
              <div>
                <p className="eyebrow">About</p>
                <h2>Developer-first design system</h2>
              </div>
              <p>
                HannaUI combines clean visuals, accessible patterns, and component reusability to help teams ship polished interfaces faster.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Explore HannaUI"
        description="The component library includes accessible foundations for modern product experiences and internal tools."
        confirmText="Continue"
        cancelText="Close"
        onConfirm={() => setShowModal(false)}
      >
        <p>Use HannaUI to create marketing pages, admin dashboards, and product components with a consistent visual language.</p>
      </Modal>
    </div>
  )
}

export default App
