/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { Link } from 'react-router-dom'

export interface Props {
  type: 'button' | 'link'
  onClick: () => void
  target: string
  className: string
  isPrimary?: boolean
  isSmall?: boolean
  isLarge?: boolean
  isBlock?: boolean
  isCustom?: boolean
  isDisabled?: boolean
  isLoading?: boolean
  isExternal?: boolean
  href: string
  children: JSX.Element
  style: React.CSSProperties
}

const Button: React.FC<Props> = (props: Props) => {
  const className: string[] = [props.className]
  if (props.isPrimary) {
    className.push('btn-primary')
  }
  if (props.isLarge) {
    className.push('btn-lg')
  }
  if (props.isSmall) {
    className.push('btn-sm')
  }
  if (props.isBlock) {
    className.push('btn-block')
  }
  if (props.isCustom) {
    className.push('custom-btn')
  }

  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        <a href={props.href} className={className.join(' ')} style={props.style} target={props.target === '_blank' ? '_blank' : undefined} ref={props.target === '_blank' ? 'noopener noreferrer' : undefined}>
          {props.children}
        </a>
      )
    } else {
      return (
        <Link to={props.href} className={className.join(' ')} style={props.style}>
          {props.children}
        </Link>
      )
    }
  }

  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) {
      className.push('disabled')
    }

    return (
      <span className={className.join(' ')} style={props.style}>
        {props.isLoading ? (
          <>
            <span className='spinner-border spinner-border-sm mx-5'></span>
            <span className='sr-only'>Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    )
  }

  return (
    <button className={className.join(' ')} style={props.style} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
