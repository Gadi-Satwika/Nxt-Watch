import {Component} from 'react'
import {withRouter} from 'react-router-dom'

import ThemeContext from '../../ThemeContext'

import {
  VideoItemContainer,
  ThumbNail,
  VideoDetails,
  StyledLink,
  Title,
  Views,
} from './StyledComponents'

class GamingPageVideoItem extends Component {
  render() {
    const {videoDetails} = this.props
    const {thumbnailUrl, title, viewCount, id} = videoDetails
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <StyledLink to={`videos/${id}`}>
              <VideoItemContainer theme={theme}>
                <ThumbNail src={thumbnailUrl} alt="video thumbnail" />
                <VideoDetails>
                  <Title theme={theme}>{title}</Title>
                  <Views>{viewCount} Watching Worldwide</Views>
                </VideoDetails>
              </VideoItemContainer>
            </StyledLink>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(GamingPageVideoItem)
