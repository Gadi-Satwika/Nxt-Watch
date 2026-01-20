import {Component} from 'react'

import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import ThemeContext from '../../ThemeContext'

import RouteHeader from '../RouteHeader'

import {PageContainer, HomePageHalfPart} from './StyledComponents'

class TrendingPage extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <div>
              <Navbar />
              <PageContainer data-testid="home" theme={theme}>
                <div>
                  <Sidebar />
                </div>
                <HomePageHalfPart>
                  <RouteHeader heading="Trending" />
                </HomePageHalfPart>
              </PageContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default TrendingPage
