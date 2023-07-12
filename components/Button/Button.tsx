
export type ButtonProsp = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, className }: ButtonProsp) => {
  return <button
    className={`
      bg-[#2D5BFF] rounded-[8px] px-[32px] py-[12px] text-white
    ${className}
    `}
  >
    {children}
  </button>
}

export default Button;