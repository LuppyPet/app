import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { InputContainer, InputWrapper } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  icon?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, type = 'text', icon, ...rest },
  ref,
): JSX.Element {
  return (
    <InputContainer>
      <label htmlFor="email">{label}</label>
      <InputWrapper>
        <input ref={ref} type={type} {...rest} />
        {icon}
      </InputWrapper>
    </InputContainer>
  )
})
