import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type To } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost'

type BaseProps = {
  variant?: Variant
  children: ReactNode
  className?: string
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: never
  }

type ButtonAsLink = BaseProps & {
  to: To
  onClick?: () => void
} & Omit<ButtonHTMLAttributes<HTMLAnchorElement>, 'type'>

type ButtonProps = ButtonAsButton | ButtonAsLink

const baseClasses =
  'inline-flex items-center justify-center rounded-full text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B3C5D] disabled:opacity-60 disabled:cursor-not-allowed'

const variants: Record<Variant, string> = {
  primary:
    'bg-[#0B3C5D] text-white shadow-md hover:bg-[#0f4f7a] hover:-translate-y-0.5 hover:shadow-lg',
  secondary:
    'bg-white text-[#0B3C5D] border border-slate-200 hover:border-slate-300 hover:bg-slate-50',
  ghost: 'bg-transparent text-slate-700 hover:bg-slate-100',
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', children, className = '', ...rest } = props
  const variantClasses = variants[variant as Variant]

  const combined = `${baseClasses} ${variantClasses} px-5 py-2 ${className}`

  if ('to' in props && props.to) {
    const { to, ...linkProps } = props as ButtonAsLink
    return (
      <Link to={to} className={combined} {...linkProps}>
        {children}
      </Link>
    )
  }

  const buttonProps = rest as ButtonAsButton

  return (
    <button type="button" className={combined} {...buttonProps}>
      {children}
    </button>
  )
}

