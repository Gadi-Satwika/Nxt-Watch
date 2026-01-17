import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItemContainer = styled.div`
  width: 20vw;
  padding: 10px;
  margin-bottom: 2vh;

  @media screen and (max-width: 575px) {
    width: 90vw;
  }

  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 40vw;
  }

  @media screen and (min-width: 768px) and (max-width: 1000px) {
    width: 25vw;
  }
`

export const ThumbNail = styled.img`
  width: 23vw;
  height: 22vh;

  @media screen and (max-width: 575px) {
    width: 90vw;
    height: 50vh;
  }

  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 43vw;
    height: 34vh;
  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    width: 23vw;
  }
`
export const VideoDetails = styled.div`
  width: 20vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 20vh;

  @media screen and (max-width: 575px) {
    width: 90vw;
    height: 30vh;
  }

  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 38vw;
    height: 34vh;
  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    width: 25vw;
    height: 35vh;
  }
`

export const UserProfile = styled.img`
  margin-top: 2vh;
  width: 4vw;
  height: 6vh;
  align-self: flex-start;

  @media screen and (max-width: 575px) {
    width: 12vw;
    height: 10vh;
  }
`
export const ChannelDetails = styled.div`
  height: 18vh;
`
export const ChannelTitle = styled.p`
  color: ${props => (props.theme === 'light' ? '#000000' : '#ffffff')};
  font-size: 14px;
  height: 10vh;
`
export const ChannelName = styled.p`
  color: ${props => (props.theme === 'light' ? '#64748b' : '#94a3b8')};
  height: 1vh;
`

export const ChannelViews = styled.div`
  display: flex;
  align-items: center;
  height: 2vh;
  margin-bottom: 2vh;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`
