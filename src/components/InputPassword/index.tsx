import { forwardRef, InputHTMLAttributes, useState } from 'react'
import { InputPasswordContainer } from './styles'

import { LockKey } from 'phosphor-react'
import { Input } from '../Input'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const InputPassword = forwardRef<HTMLInputElement, InputProps>(
  function InputPassword({ label, ...rest }, ref): JSX.Element {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    return (
      <InputPasswordContainer>
        <Input
          ref={ref}
          label={label}
          icon={<LockKey size={24} weight="thin" />}
          type={isPasswordVisible === false ? 'password' : 'text'}
          {...rest}
        ></Input>
        <div className="password-buttons-wrapper">
          <button type="button">esqueci minha senha</button>
          <button
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? 'esconder senha' : 'mostrar senha'}
          </button>
        </div>
      </InputPasswordContainer>
    )
  },
)
