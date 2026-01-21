import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../ThemeContext'

import {
  VideoItemContainer,
  ThumbNail,
  VideoDetails,
  UserProfile,
  ChannelDetails,
  ChannelName,
  ChannelTitle,
  ChannelViews,
  StyledLink,
} from './StyledComponents'

class VideoItem extends Component {
  render() {
    const {videoDetails, id} = this.props
    const {thumbnailUrl, title, viewCount, publishedAt, channel} = videoDetails
    const {name, profileImageUrl} = channel
    const dateObj = new Date(publishedAt)
    const currentDateDistance = formatDistanceToNow(
      new Date(
        dateObj.getFullYear(),
        dateObj.getMonth() + 1,
        dateObj.getDate(),
      ),
    )
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <StyledLink to={`videos/${id}`}>
              <VideoItemContainer theme={theme}>
                <ThumbNail src={thumbnailUrl} alt="video thumbnail" />
                <VideoDetails>
                  <UserProfile src={profileImageUrl} alt="channel logo" />
                  <ChannelDetails>
                    <ChannelTitle theme={theme}>{title}</ChannelTitle>
                    <ChannelName theme={theme}>{name}</ChannelName>
                    <ChannelViews>
                      <ChannelName theme={theme}>{viewCount} views</ChannelName>
                      <ChannelName theme={theme}>
                        {' '}
                        . {currentDateDistance}
                      </ChannelName>
                    </ChannelViews>
                  </ChannelDetails>
                </VideoDetails>
              </VideoItemContainer>
            </StyledLink>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(VideoItem)
