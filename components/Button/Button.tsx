
export type ButtonProsp = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, className }: ButtonProsp) => {
  return <button
    className={`
      bg-primary rounded-lg px-6 py-2 text-white 
    ${className}
    `}
  >
    {children}
  </button>
}

export default Button;