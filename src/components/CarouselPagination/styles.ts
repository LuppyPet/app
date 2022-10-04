import styled, { css } from 'styled-components'

interface IContainerProps {
  isChosen: boolean
}

export const BallContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const Ball = styled.div<IContainerProps>`
  border-radius: 1rem;

  font-size: 1rem;
  font-weight: bold;
  color: #fff;

  margin-right: 1rem;

  height: 1rem;
  width: 1rem;

  background-color: #ffffff;

  outline: none;
  border: none;

  cursor: pointer;

  ${(props) =>
    props.isChosen &&
    css`
      width: 2rem;
      animation-name: reducetime;
      animation-duration: 0.5s;
    `}

  @keyframes reducetime {
    0% {
      width: 1rem;
    }
    100% {
      width: 2rem;
    }
  }
`
