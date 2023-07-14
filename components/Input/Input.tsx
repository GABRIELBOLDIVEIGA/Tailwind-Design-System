
export type InputProps = {
  label?: string;
  multiline?: boolean;
  placeholder?: string;
} & (Input | TextArea)

type TextArea = React.HTMLAttributes<HTMLTextAreaElement>
type Input = React.InputHTMLAttributes<HTMLInputElement>

const InputOrTextArea = (props: InputProps) => {
  if (props.multiline) {
    return <textarea {...props as TextArea} />
  } else {
    return <input {...props as Input} />
  }
}

const Input = ({ label, className, ...rest }: InputProps) => {
  return (
    <div className="relative">
      {label && <label className={`absolute pt-1 pl-1 text-xs`}>{label}</label>}
      <InputOrTextArea
        className={`
          bg-dark text-gray-primary rounded-md p-1
          disabled:bg-disabled disabled:border-2 disabled:border-disabled
          ${label && 'pt-5'}
          ${className}
        `}
        {...rest} 
      />
    </div>
  )
}

export default Input;