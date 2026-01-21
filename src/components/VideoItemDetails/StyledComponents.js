import styled from 'styled-components'

export const VideoDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 10px;

  @media screen and (max-width: 767px) {
    display: grid;
  }
`

export const VideoPlayer = styled.div`
  padding: 15px;
  width: 75vw;

  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#0f0f0f'};

  @media screen and (max-width: 767px) {
    width: 100vw;
  }
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

  @media screen and (max-width: 767px) {
    margin-left: -2vw;
  }
`

export const VideoOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2vh;
  width: 20vw;
  margin-bottom: 2vh;
  color: #475569;

  @media screen and (max-width: 767px) {
    margin-top: 7vh;
    margin-left: -4vw;
  }
`

export const VideoOptionButtonsLike = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${props => (props.like ? '#2563eb' : '#64748b')};
`

export const VideoOptionButtonsDislike = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${props => (props.like ? '#2563eb' : '#64748b')};
`

export const VideoOptionButtonsArrow = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${props => (props.like ? '#2563eb' : '#64748b')};
`
export const VideoUserDetails = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20%;
`

export const UserProfile = styled.img`
  margin-top: 2vh;
  width: 3vw;
  height: 6vh;
  align-self: flex-start;

  @media screen and (max-width: 575px) {
    width: 12vw;
    height: 10vh;
  }
`

export const AboutChannel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
`

export const SubscriberCount = styled.p`
  font-size: 12px;
  color: #475569;
  margin-top: -2vh;
  width: 50vw;
`

export const Description = styled.p`
  color: #475569;
  width: 70vw;
  margin-bottom: 5vh;
  color: ${props => (props.theme === 'light' ? '#181818' : '#f9f9f9')};
`

export const Name = styled.p`
  color: ${props => (props.theme === 'light' ? '#181818' : '#f9f9f9')};
  width: 50vw;
`

export const Title = styled.p`
  color: ${props => (props.theme === 'light' ? '#181818' : '#f9f9f9')};
`

export const LoaderContainer = styled.div`
  color: ${props => (props.theme === 'light' ? '#181818' : '#f9f9f9')};
  width: 75vw;
  text-align: center;
`
