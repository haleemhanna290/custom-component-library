import './Badge.css'

const BADGE_VARIANTS = {
  success: 'badge-success',
  warning: 'badge-warning',
  danger: 'badge-danger',
  info: 'badge-info',
  neutral: 'badge-neutral',
  primary: 'badge-primary',
}

const BADGE_SIZES = {
  small: 'badge-small',
  medium: 'badge-medium',
  large: 'badge-large',
}

function Badge({ children, variant = 'primary', size = 'medium', className = '' }) {
  return (
    <span
      className={`hanna-badge ${BADGE_VARIANTS[variant] || BADGE_VARIANTS.primary} ${BADGE_SIZES[size] || BADGE_SIZES.medium} ${className}`.trim()}
    >
      {children}
    </span>
  )
}

export default Badge
