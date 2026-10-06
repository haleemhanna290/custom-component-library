import { useId } from 'react'
import './Input.css'

function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  error,
  helperText,
  disabled = false,
  required = false,
  id,
  className = '',
  ...props
}) {
  const generatedId = useId()
  const inputId = id || generatedId
  const hintId = `${inputId}-help`
  const errorId = `${inputId}-error`
  const describedBy = [error ? errorId : '', helperText ? hintId : '']
    .filter(Boolean)
    .join(' ') || undefined

  return (
    <div className={`hanna-input-group ${className}`.trim()}>
      {label && (
        <label className="hanna-input-label" htmlFor={inputId}>
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </label>
      )}

      <input
        id={inputId}
        className={`hanna-input ${error ? 'input-error' : ''}`.trim()}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={describedBy}
        aria-required={required || undefined}
        {...props}
      />

      {helperText && !error && (
        <p id={hintId} className="hanna-input-hint" aria-live="polite">
          {helperText}
        </p>
      )}

      {error && (
        <p id={errorId} className="hanna-input-error" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  )
}

export default Input
