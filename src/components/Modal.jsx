import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'

function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  showFooter = true,
}) {
  useEffect(() => {
    if (!isOpen) return undefined

    const handleEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        aria-describedby={description ? 'modal-description' : undefined}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          {title && <h2 id="modal-title" className="modal-title">{title}</h2>}
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {description && (
          <p id="modal-description" className="modal-description">
            {description}
          </p>
        )}

        <div className="modal-body">{children}</div>

        {showFooter && (
          <div className="modal-footer">
            <button type="button" className="hanna-btn btn-secondary" onClick={onClose}>
              {cancelText}
            </button>
            <button type="button" className="hanna-btn btn-primary" onClick={onConfirm || onClose}>
              {confirmText}
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body,
  )
}

export default Modal
