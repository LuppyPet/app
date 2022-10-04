import styled, { css } from 'styled-components'

interface IContainerProps {
  isDisabled: boolean
}

export const ButtonContainer = styled.button<IContainerProps>`
  width: 100%;
  min-height: 50px;

  font-size: 1rem;
  font-weight: bold;
  color: #fff;

  background-color: #f56076;

  outline: none;
  border: none;

  border-radius: 1rem;

  ${(props) =>
    props.isDisabled &&
    css`
      background-color: #d0d0d0;
    `}
`
