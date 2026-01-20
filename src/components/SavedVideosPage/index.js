import {Component} from 'react'

import Sidebar from '../Sidebar'
import ThemeContext from '../../ThemeContext'
import Navbar from '../Navbar'
import SavedVideoItem from '../SavedVideoItem'

import {
  PageContainer,
  HomePageHalf,
  NoSavedVideos,
  NoVideosImage,
  Heading,
  Paragraph,
} from './StyledComponents'

class SavedVideosPage extends Component {
  savedVideosPage = savedVideos => {
    const result =
      savedVideos.length === 0
        ? this.noSavedVideos()
        : this.successView(savedVideos)
    return result
  }

  successView = savedVideos => (
    <HomePageHalf>
      {savedVideos.map(eachVideo => (
        <SavedVideoItem eachVideoData={eachVideo} />
      ))}
    </HomePageHalf>
  )

  noSavedVideos = () => (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <NoSavedVideos>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <Heading theme={theme}>No saved videos found</Heading>
            <Paragraph theme={theme}>
              You can save your videos while watching them
            </Paragraph>
          </NoSavedVideos>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme, savedVideos} = value
          return (
            <div>
              <Navbar />
              <PageContainer data-testid="home" theme={theme}>
                <div>
                  <Sidebar />
                </div>
                <div>{this.savedVideosPage(savedVideos)}</div>
              </PageContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideosPage
