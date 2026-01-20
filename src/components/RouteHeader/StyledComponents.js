import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 15vh;
  display: flex;
  align-items: center;
  background-color: ${props =>
    props.theme === 'light' ? '#e2e8f0' : ' #212121'};
  width: 78.5vw;
  padding-left: 3vw;

  @media screen and (max-width: 567px) {
    width: 100vw;
    padding-left: 5vw;
    height: 12vh;
  }
`
export const Heading = styled.h1`
  font-size: 28px;
  color: ${props => (props.theme === 'light' ? '#475569' : '#ffffff')};

  @media screen and (max-width: 567px) {
    font-size: 23px;
  }
`

export const FireIcon = styled.div`
  background-color: ${props =>
    props.theme === 'light' ? ' #d7dfe9' : '#606060'};
  width: 6vw;
  height: 12vh;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2vw;

  @media screen and (max-width: 567px) {
    height: 11vh;
    width: 11vw;
    margin-right: 4vw;
  }
`
