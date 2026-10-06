import './Card.css'

function Card({
  title,
  description,
  image,
  children,
  footer,
  clickable = false,
  onClick,
  className = '',
}) {
  return (
    <article
      className={`hanna-card ${clickable ? 'card-clickable' : ''} ${className}`.trim()}
      onClick={clickable ? onClick : undefined}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={
        clickable
          ? (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                onClick?.(event)
              }
            }
          : undefined
      }
    >
      {image && <img className="hanna-card-image" src={image} alt={title || 'Card visual'} />}

      <div className="hanna-card-body">
        {title && <h3 className="hanna-card-title">{title}</h3>}
        {description && <p className="hanna-card-description">{description}</p>}
        {children}
      </div>

      {footer && <div className="hanna-card-footer">{footer}</div>}
    </article>
  )
}

export default Card
