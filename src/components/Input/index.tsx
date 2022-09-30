/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import * as Label from '@radix-ui/react-label'
import React, { useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { InputContainer } from './styles'

interface IInputProps {
  name: string
  label: string
  type?: 'default' | 'password'
  registerField?: UseFormRegisterReturn
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  name,
  label,
  type = 'default',
  registerField,
  onChange,
}: IInputProps) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(
    type === 'password',
  )

  return (
    <InputContainer>
      <Label.Root htmlFor={name}>{label}</Label.Root>
      <input
        {...registerField}
        type={isPasswordHidden ? 'password' : 'text'}
        name={name}
        onChange={(event) => {
          if (onChange) onChange(event)
        }}
        // maxLength expects a number instead of a string, but in mobile only works with string
        // @ts-ignore
        maxLength={type === 'school_code' ? '6' : 99}
      />
      {type === 'password' && (
        <button
          type="button"
          onClick={() => setIsPasswordHidden(!isPasswordHidden)}
          tabIndex={0}
        >
          <AccessibleIcon.AccessibleIcon
            label={isPasswordHidden ? 'Exibir senha' : 'Esconder senha'}
          >
            <img
              alt={isPasswordHidden ? 'Exibir senha' : 'Esconder senha'}
              className="eye-img"
            />
          </AccessibleIcon.AccessibleIcon>
        </button>
      )}
    </InputContainer>
  )
}
