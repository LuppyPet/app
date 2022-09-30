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

  align-items: center;

  div {
    margin-bottom: 3rem;
  }
`
export const TwoColoredText = styled.div`
  display: flex;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  .firstHalf {
    color: #f56076;
  }
  .secondHalf {
    color: #23b6e7;
  }
`
