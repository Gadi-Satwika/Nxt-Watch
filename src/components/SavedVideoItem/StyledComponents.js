import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SavedVideoItem = styled.div`
  display: flex;
  align-items: center;
  height: 30vh;
  justify-content: space-between;
  margin-top: 5vh;
  margin-bottom: 10vh;

  @media screen and (max-width: 575px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    margin-top: 5vh;
  }

  @media screen and (min-width: 576px) and (max-width: 767px) {
    height: 40vh;
  }
`

export const ThumbNail = styled.img`
  width: 28vw;
  height: 34vh;

  @media screen and (max-width: 575px) {
    width: 70vw;
    height: 50vh;
  }

  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 40vw;
    height: 34vh;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 30vw;
  }
`
export const ChannelDetails = styled.div`
  height: 35vh;
  width: 27vw;

  @media screen and (max-width: 575px) {
    width: 70vw;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 18px;
    width: 38vw;
  }
`
export const ChannelTitle = styled.p`
  color: ${props => (props.theme === 'light' ? '#000000' : '#ffffff')};
  font-size: 23px;
  height: 14vh;

  @media screen and (max-width: 575px) {
    font-size: 18px;
    width: 65vw;
  }

  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 18px;
    width: 38vw;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 16px;
  }
`
export const ChannelName = styled.p`
  color: ${props => (props.theme === 'light' ? '#64748b' : '#94a3b8')};
  font-size: 18px;
  height: 1vh;
  @media screen and (max-width: 575px) {
    font-size: 15px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    font-size: 18px;
  }
`

export const ChannelViews = styled.div`
  display: flex;
  font-size: 18px;
  align-items: center;
  height: 2vh;
  margin-bottom: 2vh;
  width: 20vw;

  @media screen and (max-width: 575px) {
    font-size: 14px;
    width: 60vw;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 16px;
    width: 50vw;
  }
  @media screen and (min-width: 768px) and (max-width: 1100px) {
    font-size: 16px;
    width: 45vw;
  }
`
export const UserProfile = styled.img`
  width: 12vw;
  height: 10vh;
  margin-top: -15vh;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const VideoDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-left: 2vw;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`
