import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { InputContainer, InputWrapper } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  icon?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, type = 'text', name, icon, ...rest },
  ref,
): JSX.Element {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <InputWrapper>
        <input ref={ref} type={type} name={name} {...rest} />
        {icon}
      </InputWrapper>
    </InputContainer>
  )
})
