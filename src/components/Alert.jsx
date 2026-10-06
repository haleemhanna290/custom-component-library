import './Alert.css'

const ALERT_VARIANTS = {
  success: 'alert-success',
  info: 'alert-info',
  warning: 'alert-warning',
  error: 'alert-error',
}

function Alert({
  type = 'info',
  title,
  message,
  dismissible = false,
  onClose,
  className = '',
}) {
  return (
    <div
      className={`hanna-alert ${ALERT_VARIANTS[type] || ALERT_VARIANTS.info} ${className}`.trim()}
      role="alert"
      aria-live="assertive"
    >
      <div className="alert-content">
        {title && <strong className="alert-title">{title}</strong>}
        {message && <span className="alert-message">{message}</span>}
      </div>

      {dismissible && (
        <button
          type="button"
          className="alert-close"
          onClick={onClose}
          aria-label="Dismiss alert"
        >
          ×
        </button>
      )}
    </div>
  )
}

export default Alert
