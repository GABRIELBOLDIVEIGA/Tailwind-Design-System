
export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function getVariant(variant: ButtonProps['variant'], disabled: ButtonProps['disabled']) {
  switch (variant) {
    case 'primary':
      return disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white'
    case 'secondary':
      return disabled ? 'bg-disabled text-disabled' : 'bg-tertiary text-primary'
    case 'tertiary':
      return disabled ? 'bg-none text-disabled' : 'text-primary'
    default:
      return disabled ? '' : ''
  }
}

const Button = ({ variant = 'primary', children, className, disabled, ...rest }: ButtonProps) => {
  const Btn = (classes: string) => {
    return <button
      className={`
        rounded-lg px-6 py-2
        ${getVariant(variant, disabled)}
        ${className}
      `}
      disabled={false}
      {...rest}
    >
      {children}
    </button>
  }
  return Btn(disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white')
}

export default Button;