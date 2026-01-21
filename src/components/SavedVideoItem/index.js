import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import {
  SavedVideoItem,
  ChannelDetails,
  ChannelTitle,
  ChannelName,
  ChannelViews,
  ThumbNail,
  VideoDetails,
  UserProfile,
  StyledLink,
} from './StyledComponents'

import ThemeContext from '../../ThemeContext'

class SavedVideosItem extends Component {
  render() {
    const {eachVideoData} = this.props
    const {
      thumbnailUrl,
      publishedAt,
      title,
      viewCount,
      channel,
      id,
    } = eachVideoData
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
              <SavedVideoItem>
                <ThumbNail
                  src={thumbnailUrl}
                  theme={theme}
                  alt="video thumbnail"
                />
                <VideoDetails>
                  <UserProfile src={profileImageUrl} />
                  <ChannelDetails>
                    <ChannelTitle theme={theme}>{title}</ChannelTitle>
                    <ChannelName theme={theme}>{name}</ChannelName>
                    <ChannelViews>
                      <ChannelName theme={theme}>{viewCount} views</ChannelName>
                      <ChannelName theme={theme}>
                        . {currentDateDistance}
                      </ChannelName>
                    </ChannelViews>
                  </ChannelDetails>
                </VideoDetails>
              </SavedVideoItem>
            </StyledLink>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideosItem
