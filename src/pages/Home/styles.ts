import styled from 'styled-components'

export const HomeContainer = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`
export const LoginSide = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-right: 9.125rem;
  margin-left: 9.125rem;

  div {
    margin-bottom: 3rem;
  }
  .luppyLogo {
    margin-bottom: 3rem;
  }
`
export const TwoColoredText = styled.div`
  display: flex;

  font-family: 'Montserrat';
  font-style: normal;
  font-size: 2rem;
  line-height: 2.375rem;
  font-weight: 700;

  .firstHalf {
    color: #f56076;
  }
  .secondHalf {
    color: #23b6e7;
  }
`
export const ForgotMyPasswordText = styled.div`
  display: flex;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #23b6e7;
  cursor: pointer;
`
export const RegisterNowText = styled.div`
  display: flex;

  font-family: 'Montserrat';
  font-style: normal;
  font-size: 2rem;
  line-height: 2.375rem;
  font-weight: 400;
  position: absolute;
  bottom: 0;

  .pink {
    color: #f56076;
    font-weight: 700;
    cursor: pointer;
  }
  .blue {
    color: #23b6e7;
    font-weight: 700;
    cursor: pointer;
  }
`
