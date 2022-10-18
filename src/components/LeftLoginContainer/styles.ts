import styled from 'styled-components'

export const SideColoredContainer = styled.div`
  display: flex;

  justify-content: center;

  width: 50%;
  background-color: #23b6e7;

  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
`

export const InnerColoredContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`

export const SideTitleStyle = styled.div`
  display: flex;
  justify-content: center;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 3rem;
  line-height: 3.75rem;

  color: #ffffff;
  margin-top: 3rem;
  margin-bottom: 2.25rem;
`

export const SubtitleStyle = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.4rem;
  text-align: center;

  color: #ffffff;
  margin-bottom: 4rem;
`
