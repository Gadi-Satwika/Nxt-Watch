import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#000000'};
`

export const HomePageHalf = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 10px;
`
export const NoVideosImage = styled.img`
  width: 50vw;
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

export const NoSavedVideos = styled.div`
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
