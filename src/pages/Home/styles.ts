import styled from 'styled-components'

interface IRegisterNowTextProps {
  isPink: boolean
}

export const HomeContainer = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  @media (max-width: 768px) {
    & > div:first-child {
      display: none;
    }
  } ;
`
export const LoginSide = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 4rem 2rem;

  div:first-child {
    margin-bottom: 3rem;
    & > * {
      margin-bottom: 3rem;
    }
  }
  .luppyLogo {
    display: flex;
    width: 100%;
    justify-content: center;
  }
`
export const TwoColoredText = styled.div`
  display: flex;

  h1 {
    font-size: 2rem;
    line-height: 2.375rem;
    font-weight: 700;
  }

  .firstHalf {
    color: #f56076;
  }
  .secondHalf {
    color: #23b6e7;
  }
`
export const ForgotMyPasswordText = styled.button`
  display: flex;

  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #23b6e7;
  cursor: pointer;
`
export const RegisterNowText = styled.div<IRegisterNowTextProps>`
  display: flex;

  font-size: 1.25rem;
  line-height: 2.375rem;
  font-weight: 400;
  margin-bottom: 0;

  span {
    margin-right: 0.25rem;
  }

  button {
    color: ${(props) => (props.isPink ? '#f56076' : '#23b6e7')};
    font-weight: 700;
    cursor: pointer;
    font-size: 1.25rem;
  }
`
