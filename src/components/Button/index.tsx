import React, { MouseEvent, ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface IButtonProps {
  isDisabled?: boolean
  type?: 'button' | 'submit'
  children: ReactNode
  onClick?: (event: MouseEvent<HTMLElement>) => void
}

export const Button: React.FC<IButtonProps> = ({
  isDisabled = false,
  type = 'button',
  children,
  onClick,
}): JSX.Element => (
  <ButtonContainer
    onClick={(event) => (onClick ? onClick(event) : null)}
    type={type}
    isDisabled={isDisabled}
  >
    {children}
  </ButtonContainer>
)
