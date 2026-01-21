import {Component} from 'react'

import ThemeContext from '../../ThemeContext'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {
  Notfound,
  NotFoundImage,
  Heading,
  Paragraph,
  HomePageHalfPart,
  PageContainer,
} from './StyledComponents'

class NotFoundPage extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          const imageUrl =
            theme === 'light'
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          return (
            <div>
              <Navbar />
              <PageContainer data-testid="home" theme={theme}>
                <div>
                  <Sidebar />
                </div>
                <HomePageHalfPart>
                  <Notfound>
                    <NotFoundImage src={imageUrl} alt="not found" />
                    <Heading theme={theme}>Page Not Found</Heading>
                    <Paragraph theme={theme}>
                      We are sorry, the page you requested could not be found.
                    </Paragraph>
                  </Notfound>
                </HomePageHalfPart>
              </PageContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NotFoundPage
