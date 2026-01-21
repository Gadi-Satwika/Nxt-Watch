import styled from 'styled-components'

export const Notfound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
  @media screen and (max-width: 567px) {
    width: 100vw;
    height: 88vh;
  }
  @media screen and (min-width: 568px) and (max-width: 767px) {
    width: 90vw;
  }
`

export const NotFoundImage = styled.img`
  width: 40vw;
  height: 60vh;

  @media screen and (max-width: 567px) {
    width: 90vw;
    height: 70vh;
  }

  @media screen and (min-width: 568px) and (max-width: 767px) {
    width: 60vw;
    height: 70vh;
  }
`

export const Heading = styled.h1`
  color: ${props => (props.theme === 'light' ? '#181818' : '#f9f9f9')};
  @media screen and (max-width: 567px) {
    font-size: 24px;
  }
`

export const Paragraph = styled.p`
  color: ${props => (props.theme === 'light' ? '#475569' : '#f9f9f9')};
  font-size: 17px;
  @media screen and (max-width: 567px) {
    font-size: 14px;
  }
`
export const HomePageHalfPart = styled.div`
  display: flex;
  flex-direction: column;
`

export const PageContainer = styled.div`
  display: flex;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#000000'};
`
