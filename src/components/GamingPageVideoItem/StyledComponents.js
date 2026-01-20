import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItemContainer = styled.div`
  width: 20vw;
  padding: 10px;

  @media screen and (max-width: 575px) {
    width: 40vw;
  }

  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 25vw;
  }

  @media screen and (min-width: 768px) and (max-width: 1000px) {
    width: 25vw;
  }
`

export const ThumbNail = styled.img`
  width: 15vw;
  height: 33vh;

  @media screen and (max-width: 575px) {
    width: 40vw;
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
  width: 23vw;
  height: 13vh;

  @media screen and (max-width: 575px) {
    width: 30vw;
    height: 20vh;
  }

  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 38vw;
    height: 18vh;
  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    width: 25vw;
    height: 16vh;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const Title = styled.p`
  color: ${props => (props.theme === 'light' ? '#181818' : '#f9f9f9')};
  font-size: 18px;
  width: 35vw;
`
export const Views = styled.p`
  color: #475569;
`
