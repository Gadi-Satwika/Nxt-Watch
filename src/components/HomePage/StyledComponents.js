import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#000000'};
`

export const VideosDisplayContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 78vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 576px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    width: 90vw;
  }

  @media screen and (max-width: 575px) {
    width: 95vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const LoaderContainer = styled.div`
  color: ${props => (props.theme === 'light' ? '#181818' : '#f9f9f9')};
  width: 75vw;
  text-align: center;
`
export const FailureImage = styled.img`
  width: 25vw;
  height: 38vh;
  margin-bottom: 5vh;
  margin-top: 5vh;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 78vw;
  height: 45vh;
  display: ${props => (props.displayBanner ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 5vw;

  @media screen and (max-width: 767px) {
    width: 100vw;
    height: 45vh;
  }
`
export const HomeLogoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const AppLogo = styled.img`
  width: 100px;

  @media screen and (min-width: 768px) {
    width: 12vw;
  }
`

export const HomePageHalf = styled.div`
  display: flex;
  flex-direction: column;
`

export const GetNowButton = styled.button`
  width: 10vw;
  height: 7vh;
  background-color: transparent;
  border: 1px solid black;

  @media screen and (max-width: 930px) and (min-width: 680px) {
    width: 13vw;
    height: 8vh;
    font-size: 12px;
  }

  @media screen and (max-width: 681px) and (min-width: 600px) {
    width: 17vw;
    height: 10vh;
    font-size: 14px;
  }

  @media screen and (max-width: 599px) and (min-width: 470px) {
    width: 20vw;
    height: 11vh;
    font-size: 15px;
  }

  @media screen and (max-width: 469px) {
    width: 27vw;
    height: 10vh;
    font-size: 12px;
  }
`
export const CloseBanner = styled.div`
  align-self: flex-end;
  padding-right: 5vw;
`

export const SearchContainer = styled.div`
  margin-left: 1vw;
  display: flex;
  align-items: center;
  margin-top: 3vh;
`

export const SearchInput = styled.input`
  width: 15vw;
  height: 5vh;
  background-color: transparent;
  border: 1px solid #475569;
  padding: 10px;
  outline: none;
  color: ${props => (props.theme === 'light' ? '#475569' : '#f9f9f9')};

  @media screen and (max-width: 880px) and (min-width: 768px) {
    width: 20vw;
    height: 6vh;
  }
  @media screen and (max-width: 767px) {
    width: 23vw;
    height: 6vh;
    margin-left: 3vw;
  }
  @media screen and (max-width: 576px) {
    width: 30vw;
    margin-left: 3vw;
  }
  @media screen and (max-width: 399px) {
    width: 45vw;
    margin-left: 4vw;
  }
`

export const SearchIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #475569;
  width: 5vw;
  height: 5vh;

  @media screen and (max-width: 880px) {
    width: 6vw;
    height: 6vh;
  }
  @media screen and (max-width: 767px) and (min-width: 577px) {
    width: 7vw;
    height: 6vh;
  }
  @media screen and (max-width: 576px) and (min-width: 400px) {
    width: 8vw;
  }
  @media screen and (max-width: 399px) {
    width: 10vw;
  }
`

export const NoVideos = styled.img`
  width: 25vw;
  height: 35vh;
`

export const RetryButton = styled.button`
  width: 9vw;
  height: 5vh;
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  margin-bottom: 5vh;
  cursor: pointer;
`
