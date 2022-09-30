import styled from 'styled-components'

interface ICharactersCountProps {
  isFilled: boolean
}

export const InputContainer = styled.div`
  width: 100%;
  min-height: 60px;
  max-height: 60px;

  display: flex;
  flex-direction: column;

  position: relative;

  span {
    width: 58px;
    height: 16.84px;
    left: 884px;
    top: 336px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #333333;
    margin-bottom: 0.5rem;
  }

  input {
    min-height: 40px;
    max-height: 40px;
    padding: 0 8px;

    border: none;
    outline: none;
    border: 1px solid rgba(51, 51, 51, 0.2);
    border-radius: 0.5rem;
  }

  button {
    background-color: transparent;
    border: none;
    position: absolute;
    right: 8px;
    top: 50%;
    &:focus {
      outline: 1px solid black;
      border-radius: 4px;
    }
  }
`

export const CharactersCount = styled.p<ICharactersCountProps>`
  width: 100%;
  text-align: right;
  font-size: 0.8rem;

  color: ${(props) => (props.isFilled ? '#09b702' : 'inherit')};
`
